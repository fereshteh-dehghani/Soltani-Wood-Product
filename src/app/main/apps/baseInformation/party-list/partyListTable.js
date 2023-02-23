import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseLoading from '@fuse/core/FuseLoading';
import { AgGridReact } from 'ag-grid-react';
import { showMessage } from 'app/store/fuse/messageSlice';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import withRouter from '@fuse/core/withRouter';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Spacer, Text } from '@nextui-org/react';
// import { Button } from '@mui/material';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import {deleteParty, fetchPartyList } from '../store/partyListSlice';
import RightClickParty from '../../right-click/RightClickParty';

function PartyListTable() {
  const dispatch = useDispatch();
  const gridStyle = useMemo(
    () => ({ height: '60vh', width: '100%', justifyContent: 'center', margin: '2% auto' }),
    []
  );
  const gridRef = useRef();
  const [modalDelete, setModalDelete] = useState(false);
  const [partyId, setPartyId] = useState();
  const {
    response,
    loading,
  } = useSelector(({ baseInformation }) => baseInformation.partyListSlice);
  const rowData =useSelector(({ baseInformation }) => baseInformation.partyListSlice.data);


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
  const [columnDefs] = useState([
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
      cellRenderer:deletePartyItem,
      minWidth: 50,
    },
  ]);


  const onGridReady = useEffect(() => {
    dispatch(fetchPartyList());
    console.log("rowData listproduct ", rowData);
  }, [response]);


  if (loading) {
    return <FuseLoading />;
  }

  function handlePartyId(e){
    localStorage.setItem("partyId" , e.data.partyId)
  }

  return (
    <>
      <div className="w-full flex flex-col" style={{ justifyContent: 'center' }}>
        <FuseScrollbars className="grow overflow-x-auto">
          <RightClickParty/>
          <div style={gridStyle} className="ag-theme-alpine">
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              gridOptions={gridOptions}
              rowSelection="single"
              onGridReady={onGridReady}
              onCellContextMenu={(e)=> handlePartyId(e)}
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
          <Button
            color="error"
            onClick={handleDeleteproduct}
            width="50%"
          >
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

export default PartyListTable;