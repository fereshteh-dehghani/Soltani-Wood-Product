import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseLoading from '@fuse/core/FuseLoading';
import { AgGridReact } from 'ag-grid-react';
import { showMessage } from 'app/store/fuse/messageSlice';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import withRouter from '@fuse/core/withRouter';
import axios from 'axios';
import { Grid } from 'ag-grid-community';
import 'ag-grid-enterprise';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Spacer, Text } from '@nextui-org/react';
// import { Button } from '@mui/material';
import {
  BorderColorOutlined,
  DeleteForeverOutlined,
  EditOutlined,
  FileDownloadOutlined,
  PrintOutlined,
} from '@mui/icons-material';
import _ from 'lodash';
import { useTheme } from 'styled-components';
import { navbarToggle, navbarToggleMobile } from 'app/store/fuse/navbarSlice';
import { setDefaultSettings } from 'app/store/fuse/settingsSlice';
import { deleteProduct, fetchProductList } from '../store/productListSlice';


function ProductListTable() {
  const dispatch = useDispatch();
  const gridStyle = useMemo(
    () => ({ height: '60vh', width: '100%', justifyContent: 'center', margin: '2% auto' }),
    []
  );
  const gridRef = useRef();
  const [modalDelete, setModalDelete] = useState(false);
  const [productId, setProductId] = useState();
  const { response, loading } = useSelector(
    ({ baseInformation }) => baseInformation.productListSlice
  );
  const rowData = useSelector(({ baseInformation }) => baseInformation.productListSlice.data);

  const handleDeleteproduct = () => {
    setModalDelete(!modalDelete);
    dispatch(deleteProduct(productId))
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

  function deleteProductItem(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button
          color="error"
          onClick={() => {
            setProductId(e.data.productId);
            setModalDelete(true);
          }}
        >
          <Text size={12}> حذف</Text>
        </Button>
      </div>
    );

    return tagItem;
  }

  // print product table -----------------------

  // const PrintMe = () => {
  //   const printContents = document.getElementById('myGrid').innerHTML;
  //   const originalContents = document.body.innerHTML;
  //   document.body.innerHTML = printContents;
  //   window.print();
  //   document.body.innerHTML = originalContents;
  // };

  // const onBtPrint = useCallback(() => {
  //   const apix = gridRef.current.api;
  //   setPrinterFriendly(apix);
  //   setTimeout(() => {
  //     PrintMe(apix);
  //     setNormal(apix);
  //   }, 2000);
  // }, []);

  // const setPrinterFriendly = (api) => {
  //   const eGridDiv = document.querySelector('#myGrid');
  //   eGridDiv.style.width = '';
  //   eGridDiv.style.height = '';
  //   api.setDomLayout('print');
  // };

  // const setNormal = (api) => {
  //   const eGridDiv = document.querySelector('#myGrid');
  //   eGridDiv.style.width = '1070px';
  //   eGridDiv.style.height = '500px';
  //   api.setDomLayout();
  // };

  // Download an Excel file of current table--------
  const onBtExport = useCallback(() => {
    gridRef.current.api.exportDataAsExcel();
  }, []);

  // handle multiple checked checkboxes----------------
  const [checkedProductItems, setCheckedProductItems] = useState([]);
  const [productItemMultiEdit, setProductItemMultiEdit] = useState([]);

  function handleCheckProductList(e) {
    const { value, checked } = e.target;

    if (checked) {
      setCheckedProductItems((prev) => [...prev, value]);
    } else {
      setCheckedProductItems((prev) => {
        return [...prev.filter((c) => c !== value)];
      });
    }
  }

  const handleMultiEditAndDelete = (item) => {
    setProductItemMultiEdit((pre) => [...pre, item.data.firstName]);
  };

  useEffect(() => {
    console.log(checkedProductItems);
  }, [checkedProductItems]);

  // this function shows checkboxes in the table --------------------
  function CheckPartyItem(e) {
    const tagItem = (
      <div>
        <input
          id="rowCheckboxes"
          type="checkbox"
          onChange={(ev) => {
            handleCheckProductList(ev);
          }}
          // value={e.data.productId}
          onClick={() => handleMultiEditAndDelete(e)}
        />
      </div>
    );

    return tagItem;
  }

  // --------------------------------------------------------

  // Paginaton--------------------
  const onFirstDataRendered = useCallback(() => {
    gridRef.current.api.paginationGoToPage(1);
  }, []);

  const paginationNumberFormatter = useCallback((params) => {
    return `${params.value.toLocaleString()}`;
  }, []);

  // redirect on double click---------
  const navigate = useNavigate();

  function updateProductItem(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button
          color="gradient"
          onClick={() => {
            setProductId(e.data.productId);
          }}
        >
          <Link to={`/apps/baseInformation/products/${e.value}/productDetaile`}>
            <Text size={12}> ویرایش</Text>
          </Link>
        </Button>
      </div>
    );
    return tagItem;
  }

  // ---------------------------------

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

  // handle right click just on specified table ----------
  const [showContext, setShowContext] = useState(false);

  // ------------------------------------------------------

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    editable: false,
    animateRows: true,
  }));

  const gridOptions = {
    columnDefs: defaultColDef,
    rowData: null,
    enableRtl: true,
    defaultColDef: {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
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
          labelDefault: 'Columns',
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
        name: 'ویرایش',
        subMenu: [
          {
            name: 'ویرایش در همین صفحه (دبل کلیک)',
            action: () => {
              navigate(
                `/apps/baseInformation/products/${localStorage.getItem('productId')}/productDetaile`
              );
            },
            icon: <EditOutlined />,
          },
          {
            name: 'ویرایش در صفحه دیگر',
            action: () => {
              window.open(
                `/apps/baseInformation/products/${localStorage.getItem('productId')}/productDetaile`
              );
            },
            icon: <EditOutlined />,
          },
        ],
      },
      {
        name: ' حذف  ',
        action: () => {
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
        icon: '<img src="https://www.ag-grid.com/example-assets/skills/windows.png" />',
      },
      {
        // custom item
        name: 'Mac',
        shortcut: 'Alt + M',
        action: () => {
          console.log('Mac Item Selected');
        },
        icon: '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>',
      },
      'separator',
      {
        // custom item
        name: 'Checked',
        checked: true,
        action: () => {
          console.log('Checked Selected');
        },
        icon: '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>',
      },
      'separator',
      'chartRange',
    ];
    return result;
  }, []);

  // *********************************************

  // Pinned Row---------------------------------
  const createData = () => {
    const result = [];
    result.push({
      taxPercent: `hetgh`,
    });
    return result;
  };

  const pinnedBottomRowData = useMemo(() => {
    return createData();
  }, []);

  // -------------------------------------------------
  const autoGroupColumnDef = useMemo(() => {
    return {
      minWidth: 300,
      // cellRendererParams: {
      //   footerValueGetter: (params) => {
      //     const isRootLevel = params.node.level === -1;
      //     if (isRootLevel) {
      //       return 'ppppppp';
      //     }
      //     return 'ppppppp';
      //   },
      // },
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
      valueGetter: 'node.rowIndex + 1',
    },
    // field: 'title'
    {
      field: 'title',
      headerName: 'عنوان',
      minWidth: 50,
      aggFunc :"salam"
    },
    {
      field: 'type',
      headerName: 'نوع',
      minWidth: 50,
    },
    {
      field: 'code',
      headerName: 'کد',
      minWidth: 50,
    },
    {
      field: 'taxPercent',
      headerName: 'درصد مالیات',
      minWidth: 50,
      aggFunc: 'avg',
    },
    {
      field: 'minimumAmount',
      headerName: 'حداقل موجودی',
      minWidth: 50,
      aggFunc: 'avg',
    },
    {
      field: 'maximumAmount',
      headerName: 'حداکثر موجودی',
      minWidth: 50,
    },
    {
      field: 'productId',
      headerName: 'ویرایش',
      cellRenderer: updateProductItem,
      minWidth: 50,
    },
    {
      field: 'productId',
      headerName: 'حذف',
      cellRenderer: deleteProductItem,
      minWidth: 50,
    },
  ]);

  const onGridReady = useEffect(() => {
    dispatch(fetchProductList());
    console.log('rowData listproduct ', rowData);
  }, [response]);

  if (loading) {
    return <FuseLoading />;
  }

  function handleProductId(e) {
    localStorage.setItem('productId', e.data.productId);
  }

  // --------------------------------------------------

  return (
    <>
      <div className="w-full flex flex-col" style={{ justifyContent: 'center' }}>
        {/* <Grid sm={8} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '7px' }}>
          <Button
            className="mx-3"
            color="error"
            onClick={onBtPrint}
            style={{ fontSize: '13px' }}
            id="CustomBtn"
          >
            حذف موارد انتخابی <DeleteForeverOutlined />
          </Button>

          <Button className="mx-3" onClick={onBtExport} style={{ fontSize: '13px' }} id="CustomBtn">
            دانلود اکسل <FileDownloadOutlined />
          </Button>
        </Grid> */}
        <FuseScrollbars className="grow overflow-x-auto">
          {/* <Dropdown overlay={ContextMenu} trigger={['contextMenu']}> */}
          <div style={gridStyle} id="myGrid" className="ag-theme-alpine">
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              gridOptions={gridOptions}
              rowSelection="single"
              onGridReady={onGridReady}
              enableRangeSelection="true"
              allowContextMenuWithControlKey="true"
              getContextMenuItems={getContextMenuItems}
              sideBar={sideBar}
              rowHeight={60}
              autoGroupColumnDef={autoGroupColumnDef}
              groupIncludeFooter="true"
              groupIncludeTotalFooter="true"
              pinnedBottomRowData={pinnedBottomRowData}
              // onCellFocused={() => setShowContext(true)}
              onCellContextMenu={(e) => {
                handleProductId(e);
                // setShowContext(true);
              }}
              onCellDoubleClicked={(e) =>
                navigate(`/apps/baseInformation/products/${e.data.productId}/productDetaile`)
              }
              onFirstDataRendered={onFirstDataRendered}
              paginationNumberFormatter={paginationNumberFormatter}
              paginationAutoPageSize
              pivotPanelShow="always"
              pagination
              suppressPaginationPanel={false}
            />
          </div>
          {/* </Dropdown> */}
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
    </>
  );
}

export default ProductListTable;
