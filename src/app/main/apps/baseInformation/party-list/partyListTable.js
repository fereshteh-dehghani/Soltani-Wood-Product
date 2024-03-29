/* eslint-disable prettier/prettier */
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseLoading from '@fuse/core/FuseLoading';
import { AgGridReact } from 'ag-grid-react';
// import basicinfo

import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
} from '@mui/material';
import 'ag-grid-enterprise';
import {
  BorderColorOutlined,
  Close,
  CloseOutlined,
  DeleteForeverOutlined,
  DoneAllOutlined,
  EditOutlined,
  FileDownloadOutlined,
  Print,
} from '@mui/icons-material';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import { showMessage } from 'app/store/fuse/messageSlice';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import withRouter from '@fuse/core/withRouter';
import axios from 'axios';
import { Button, Modal, Text, Spacer } from '@nextui-org/react';
import { motion } from 'framer-motion';
import '../../../../../styles/MyStyles.css';

import { useTheme } from 'styled-components';
import { navbarToggle, navbarToggleMobile } from 'app/store/fuse/navbarSlice';
import { setDefaultSettings } from 'app/store/fuse/settingsSlice';
import _ from 'lodash';
import { fetchPartyGroupJustChildList } from '../store/partyGroupSlice';
import {deleteParty, fetchPartyList } from '../store/partyListSlice';


function PartyListTable() {
  const dispatch = useDispatch();
  const gridStyle = useMemo(
    () => ({ height: '60vh', width: '100%', justifyContent: 'center', margin: '2% auto' }),
    []
  );
  const gridRef = useRef();
  const [modalDelete, setModalDelete] = useState(false);
  const [modalMultiEdit, setModalMultiEdit] = useState(false);
  const [partyId, setPartyId] = useState();
  const [partyGroupOptions, setPartyGroupOptions] = useState([]);
  const [checkedPartyItems, setCheckedPartyItems] = useState([]);
  const { response, loading } = useSelector(
    ({ baseInformation }) => baseInformation.partyListSlice
  );
  const rowData = useSelector(({ baseInformation }) => baseInformation.partyListSlice.data);

  const handleDeleteproduct = () => {
    setModalDelete(!modalDelete);
    dispatch(deleteParty(partyId))
      .unwrap()
      .then((res) => {
        if (res !== undefined && res.result && res.errors.length === 0) {
          dispatch(
            showMessage({
              message: 'عملیات با موفقیت انجام شد', // text or html
              autoHideDuration: 6000, // ms
              anchorOrigin: {
                vertical: 'top', //   top bottom
                horizontal: 'right', //  left center right
              },
              variant: 'success', //   success error info warning null
            })
          );
        } else {
          dispatch(
            showMessage({
              message: 'عملیات با خطا انجام شد', // text or html
              autoHideDuration: 6000, // ms
              anchorOrigin: {
                vertical: 'top', //   top bottom
                horizontal: 'right', //  left center right
              },
              variant: 'error', //   success error info warning null
            })
          );
        }
      })
      .catch((err) => {
        dispatch(
          showMessage({
            message: 'عملیات با خطا انجام شد', // text or html
            autoHideDuration: 6000, // ms
            anchorOrigin: {
              vertical: 'top', //   top bottom
              horizontal: 'right', //  left center right
            },
            variant: 'success', //   success error info warning null
          })
        );
      });
  };

  function deletePartyItem(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button
          color="error"
          onClick={() => {
            setPartyId(e.data.partyId);
            setModalDelete(true);
          }}
        >
          <Text size={12}> حذف</Text>
        </Button>
      </div>
    );

    return tagItem;
  }

  function updatePartyItem(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button
          color="gradient"
          onClick={() => {
            setPartyId(e.data.partyId);
          }}
        >
          <Link to={`/apps/baseInformation/party/${e.value}/party-detailes`}>
            <Text size={12}> ویرایش</Text>
          </Link>
        </Button>
      </div>
    );
    return tagItem;
  }

  // ---------------------------------------


  const theme = useTheme();
  // const mdDown = useMediaQuery(theme.breakpoints.down('lg'));
  const settings = useSelector(({ fuse }) => fuse.settings.current);
  const { config } = settings.layout;
  useEffect(() => {
    dispatch(navbarToggleMobile());
    if (config.navbar.style === 'style-2') {
      dispatch(
        setDefaultSettings(
          _.set({}, 'layout.config.navbar.folded', !settings.layout.config.navbar.folded)
        )
      );
    } else {
      dispatch(navbarToggle());
    }
  }, []);




    // edit modal content---------------
    const [isCustomer , setIsCustomer] = useState(false)

  //----------------------------------

  //--------------------------------------------

  useEffect(() => {
    dispatch(fetchPartyGroupJustChildList())
      .unwrap()
      .then((res) => {
        const arrayList = [];
        res.forEach(function (element) {
          arrayList.push({ value: element.partyGroupId, label: element.title });
        });
        setPartyGroupOptions(arrayList);
      });
  }, []);


  //----------------------------

  // handle multiple checked checkboxes----------------
  const [partyItemMultiEdit, setPartyItemMultiEdit] = useState([]);

  function handleCheckPartyList(ev , e) {
    const { value, checked } = ev.target;
    const item = `${e.data.firstName} ${e.data.lastName} `

    if (checked) {
      setCheckedPartyItems((prev) => [...prev, value]);
      setPartyItemMultiEdit((pre)=> [...pre, item])
    } else {
      setCheckedPartyItems((prev) => {
        return [...prev.filter((c) => c !== value)];
      });
      setPartyItemMultiEdit((pre)=>{
        return [...pre.filter((d) => d !== item)]
      })
    }
  }

  // this function shows checkboxes in the table --------------------
  function CheckPartyItem(e) {
    const tagItem = (
      <div>
        <input
          id="rowCheckboxes"
          type="checkbox"
          onChange={(ev) => {
            handleCheckPartyList(ev , e);
          }}
          // value={e.data.partyId}
        />
      </div>
    );

    return tagItem;
  }

    // Pinned Row---------------------------------
    const createData = (count) => {
      const result = [];
      for (let i = 0; i < count; i+=1) {
        result.push({
          codeMelli: ` Athlete ${ i}`,
        });
      }
      return result;
    };


    const getRowStyle = useCallback((params) => {
        return { 'font-weight': 'bold' };
      
    }, []);

    const pinnedBottomRowData = useMemo(() => {
      return createData(1);
    }, []);

    // const onPinnedRowBottomCount = useCallback(() => {
    //   const footerRowsToFloat = document.getElementById('bottom-row-count').value;
    //   const count = Number(footerRowsToFloat);
    //   const rows = createData(count, 'Bottom');
    //   gridRef.current.api.setPinnedBottomRowData(rows);
    // }, []);
  
    // -------------------------------------------------

  // Download an Excel file of current table--------
  const onBtExport = useCallback(() => {
    gridRef.current.api.exportDataAsExcel();
  }, []);


  // print table------------------------
  
  const PrintMe = () =>{      
    const printContents = document.getElementById('myGrid').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
   document.body.innerHTML = originalContents; 
  }

  const onBtPrint = useCallback(() => {
    const apix = gridRef.current.api;
    setPrinterFriendly(apix);
    setTimeout(() => {
      PrintMe(apix)
      setNormal(apix);
    }, 2000);
  }, []);



const setPrinterFriendly = (api) => {
  const eGridDiv = document.querySelector('#myGrid');
  eGridDiv.style.width = '';
  eGridDiv.style.height = '';
  api.setDomLayout('print');
};

const setNormal = (api) => {
  const eGridDiv = document.querySelector('#myGrid');
  eGridDiv.style.width = '1070px';
  eGridDiv.style.height = '500px';
  api.setDomLayout();
};


  // ----------------------------------------

  function handlePartyId(e) {
    localStorage.setItem('partyId', e.data.partyId);
  }

  // Paginaton-----------------------------
  const onFirstDataRendered = useCallback(() => {
    gridRef.current.api.paginationGoToPage(1);
  }, []);

  const paginationNumberFormatter = useCallback((params) => {
    return `${params.value.toLocaleString()}`;
  }, []);

  // open update party on double click---------
  const navigate = useNavigate();

  // handle right click just on specified table ----------
  // const [showContext, setShowContext] = useState(false);

  // useEffect(() => {
  //   const handleClick = () => setShowContext(false);
  //   window.addEventListener('click', handleClick);
  //   return () => {
  //     window.removeEventListener('click', handleClick);
  //   };
  // }, [showContext]);
  // ------------------------------------------------------

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    editable: false,
    animateRows: true,
    resizable: true,
  }));

  const gridOptions = {
    columnDefs: defaultColDef,
    rowData: null,
    enableRtl: true,
    defaultColDef: {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 10,
      filter: true,
      resizable: true,
      cellStyle: { border: 'solid 0.1px gray' },
    },
  };

  // Ag Grid Select/Unselect Columns---------------

  const sideBar = useMemo(() => {
    return {
      toolPanels: [
        {
          id: 'columns',
          labelDefault: 'انتخاب ستون',
          labelKey: 'columns',
          iconKey: 'columns',
          toolPanel: 'agColumnsToolPanel',
          toolPanelParams: {
            suppressRowGroups: true,
            suppressValues: true,
            suppressPivots: true,
            suppressPivotMode: true,
            suppressColumnFilter: true,
            suppressColumnSelectAll: true,
            suppressColumnExpandAll: true,
          },
        },
      ],
      defaultToolPanel: 'columns',
    };
  }, []);

  // Ag Grid onContext Menu***********************

  const getContextMenuItems = useCallback(() => {
    const result = [
      {
      name:"ویرایش",
      subMenu:  [ 
        {
          name: 'ویرایش در همین صفحه (دبل کلیک)',
          action: ()=>{
            navigate(`/apps/baseInformation/party/${localStorage.getItem('partyId')}/party-detailes`);
          },
          icon: <EditOutlined />,
        },
        {
          name: 'ویرایش در صفحه دیگر',
          action: ()=>{
            window.open(`/apps/baseInformation/party/${localStorage.getItem('partyId')}/party-detailes`);
          },
          icon: <EditOutlined />,
        },
      ],
    },
      {
        name: ' حذف  ',
        action: ()=>{
          setModalDelete(true);
        },
        icon: <EditOutlined />,
        
      },
      // {
      //   // custom item
      //   name: 'Alert ',
      //   action: () => {
      //     window.alert('Alerting about ');
      //   },
      //   cssClasses: ['redFont', 'bold'],
      // },
      // {
      //   // custom item
      //   name: 'Always Disabled',
      //   disabled: true,
      //   tooltip:
      //     'Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!',
      // },
      {
        name: 'Country',
        subMenu: [
          {
            name: 'Ireland',
            action: () => {
              console.log('Ireland was pressed');
            },
          },
          {
            name: 'UK',
            action: () => {
              console.log('UK was pressed');
            },
          },
          {
            name: 'France',
            action: () => {
              console.log('France was pressed');
            },
          },
        ],
      },
      {
        name: 'Person',
        subMenu: [
          {
            name: 'Niall',
            action: () => {
              console.log('Niall was pressed');
            },
          },
          {
            name: 'Sean',
            action: () => {
              console.log('Sean was pressed');
            },
          },
        ],
      },
      'separator',
      {
        // custom item
        name: 'Windows',
        shortcut: 'Alt + W',
        action: () => {
          console.log('Windows Item Selected');
        },
        icon:
          '<img src="https://www.ag-grid.com/example-assets/skills/windows.png" />',
      },
      {
        // custom item
        name: 'Mac',
        shortcut: 'Alt + M',
        action: () => {
          console.log('Mac Item Selected');
        },
        icon:
          '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>',
      },
      'separator',
      {
        // custom item
        name: 'Checked',
        checked: true,
        action: () => {
          console.log('Checked Selected');
        },
        icon:
          '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>',
      },
      'separator',
      'chartRange',
    ];
    return result;
  }, []);


  // ********************************************* 

  const autoGroupColumnDef = useMemo(() => {
    return {
      Width: 600,
      cellRendererParams: {
        footerValueGetter: (params) => {
          const isRootLevel = params.node.level === -1;
          if(isRootLevel){
            return 'ppppppp';
          }
          return 'ppppppp';
        },
      },
    };
  }, []);



  const [columnDefs] = useState([
    
    // field: 'Check'
    {
      field: 'checkRow',
      headerName: 'انتخاب ',
      width: 120,
      cellRenderer: CheckPartyItem,
    },

    // field: 'number'
    {
      field: 'numberOfRow',
      headerName: 'ردیف ',
      width: 110,
      // cellRenderer: rowNumberOfPartyItem,
      valueGetter: 'node.rowIndex + 1',
      
    },
    // field: 'title'
    {
      field: 'typePersion',
      headerName: 'نوع',
      // minWidth: 50,
    },
    {
      field: 'firstName',
      headerName: 'نام',
      // minWidth: 50,
    },
    {
      field: 'lastName',
      headerName: 'نام خانوادگی',
      // minWidth: 50,
    },
    {
      field: 'codeMelli',
      headerName: 'کد ملی',
      minWidth: 50,
      aggFunc:'avg'
    },
    {
      field: 'email',
      headerName: 'ایمیل',
      minWidth: 50,
    },
    {
      field: 'economicCode',
      headerName: 'کد اقتصادی',
      minWidth: 50,
    },
    {
      field: 'genderPersion',
      headerName: 'جنسیت',
      // minWidth: 50,
    },
    {
      field: 'partyId',
      headerName: 'ویرایش',
      cellRenderer: updatePartyItem,
      minWidth: 50,
    },
    {
      field: 'partyId',
      headerName: 'حذف',
      cellRenderer: deletePartyItem,
      minWidth: 50,
    },
  ]);



  const onGridReady = useEffect(() => {
    dispatch(fetchPartyList());
    console.log('rowData listproduct ', rowData);
  }, [response]);

  if (loading) {
    return <FuseLoading />;
  }





  return (
    <>
      <div className="w-full flex flex-col" style={{ justifyContent: 'center' }}>
        <Grid sm={8} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '7px' }}>
          {/* <Button className="mx-3" style={{ fontSize: '13px' }} >
            انتخاب همه <DoneAllOutlined />
          </Button> */}

          {/* <input type="checkbox" onChange={(myCheckbox) => selectAll(myCheckbox)} /> */}

          <Button
            className="mx-3"
            style={{ fontSize: '13px' }}
            onClick={() => setModalMultiEdit(true)}
            id="CustomBtn"
          >
            ویرایش موارد انتخابی <AutoFixHighOutlinedIcon />
          </Button>

          <Button className="mx-3" color="error" onClick={onBtPrint} style={{ fontSize: '13px' }} id="CustomBtn" >
            حذف موارد انتخابی <DeleteForeverOutlined />
          </Button>

          <Button className="mx-3" onClick={onBtExport}  style={{ fontSize: '13px' }} id="CustomBtn" >
            دانلود اکسل   <FileDownloadOutlined />
          </Button>



        </Grid>

        <FuseScrollbars className="grow overflow-x-auto">
            <div style={gridStyle} id="myGrid" className="ag-theme-alpine">
              <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                gridOptions={gridOptions}
                rowSelection="single"
                enableRangeSelection="true"
                allowContextMenuWithControlKey="true"
                getContextMenuItems={getContextMenuItems}
                animateRows="true"
                onGridReady={onGridReady}
                sideBar={sideBar}
                rowHeight={60}
                autoGroupColumnDef={autoGroupColumnDef}
                groupIncludeFooter="true"
                groupIncludeTotalFooter="true"
                pinnedBottomRowData={pinnedBottomRowData}
                // onCellFocused={() => setShowContext(true)}
                onCellContextMenu={(e) => {
                  handlePartyId(e);
                  // setShowContext(true);
                }}
                onCellDoubleClicked={(e) =>
                  navigate(`/apps/baseInformation/party/${e.data.partyId}/party-detailes`)
                }
                onFirstDataRendered={onFirstDataRendered}
                paginationNumberFormatter={paginationNumberFormatter}
                paginationAutoPageSize
                pivotPanelShow="always"
                pagination
                suppressPaginationPanel={false}
              />
            </div>
        </FuseScrollbars>
      </div>
      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={modalDelete}
        onClose={() => setModalDelete(false)}
        width="30%"
        height="40%"
      >
        <Modal.Header>
          <Text size={18}>آیا می خواهید این اطلاعات را حذف شوند؟</Text>
        </Modal.Header>
        <Modal.Body>
          <Button color="error" onClick={handleDeleteproduct} width="50%">
            <Text size={14}>بلی</Text>
          </Button>{' '}
          <Button color="warning" width="50%" onClick={() => setModalDelete(false)}>
            <Text size={14}>خیر</Text>
          </Button>
        </Modal.Body>
      </Modal>

      <Modal
        style={{ paddingTop: '0px' }}
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={modalMultiEdit}
        onClose={() => setModalMultiEdit(false)}
        width="46%"
        height="80%"
      >
        <Modal.Header className="Modal-Header" justify="flex-end">
          <select
            style={{
              color: 'black',
              fontWeight: '600',
              width: '28%',
              height: '28px',
              fontSize: '13px',
              border: '1px solid black',
              borderRadius: '5px',
            }}
          >
            {partyItemMultiEdit.map((partyItems) => {
              return(
                <>
                  <option style={{ color: 'black', fontWeight: '600' }}>{partyItems} </option>
                </>
              )
              })}

          </select>
        </Modal.Header>

        <Modal.Body dir="rtl">
        
          <div className=" container justify-content-center">
            
            <h4 style={{textAlign:"right"}} className='mt-8' >نوع : </h4>

            <div style={{ display: 'flex', flexDirection: 'row' }} className='mb-24' >
              <input type="radio" name='legal' className='mx-4' /> <p>حقیقی</p>
              <input type="radio" name='legal' className='mx-4' />  <p>حقوقی</p>
            </div>

            <div className='my-24' style={{ display: 'flex', flexDirection: 'row' }}>
              <select
                placeholder="گروه طرف حساب"
                style={{
                  width: '15em',
                  border: '1px solid black',
                  padding: '4px',
                  borderRadius:   '5px',
                }}

              >
                <option>نجاران شیراز</option>
                <option>کابینت سازان شیراز</option>
              </select>

              <select
                className='mx-8'
                style={{
                  width: '15em',
                  border: '1px solid black',
                  padding: '4px',
                  borderRadius: '5px',
                }}
              >
                <option value={0}>آقا</option>
                <option value={1}>خانم</option>
              </select>
            </div>

            <h4 style={{textAlign:"right"}} >نقش : </h4>

            <div style={{ display: 'flex', flexDirection: 'row' }} className='mb-24' >
              <input type="checkbox"  className='mx-5' onChange={()=> setIsCustomer(!isCustomer)} />  <p> مشتری </p>
              <input type="checkbox"  className='mx-5' />  <p> فروشنده </p>
              <input type="checkbox"  className='mx-5' />  <p> تامین کننده </p>
            </div>

              {isCustomer &&
              <div id='isCustomer' className='my-24' >
                
                <h4 style={{textAlign:"right" , marginBottom:"4px" }} > اعتبار مشتری : </h4>
                
                <div style={{ display: 'flex', flexDirection: 'row' }} className='mb-24' >
                  <input type="checkbox" />  <p className='ml-20 mr-4' > مشتری اعتبار دارد </p>
                  <input type='text' placeholder='اعتبار مشتری *' style={{borderBottom:"2px solid black" , width:"10rem"}} />
                </div>
              
                <div style={{ display: 'flex', flexDirection: 'row' }} className='my-24' >
                  <input type="radio" name='commitFactor' className='ml-4' /> <p>هشدار در صورت ثبت فاکتور</p>
                  <input type="radio" name='commitFactor' className='mx-8' />  <p>عدم ثبت فاکتور</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row' }} className='my-24' >
                  <input type="checkbox" />  <p className='ml-20 mr-4' > گرفتن چک از مشتری بلامانع است. </p>
                </div>      
              
              </div>
              }


          </div>

          <Spacer y={1} />
        </Modal.Body>

        <Modal.Footer>
          <Button color="primary">
            <Text size={14}>
              {' '}
              <AutoFixHighOutlinedIcon /> ویرایش
            </Text>
          </Button>{' '}
          <Button color="error" onClick={() => setModalMultiEdit(false)}>
            <Text size={14}> بستن</Text>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PartyListTable;
