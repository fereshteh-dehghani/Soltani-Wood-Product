import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseLoading from '@fuse/core/FuseLoading';
import { AgGridReact } from 'ag-grid-react';
import { showMessage } from 'app/store/fuse/messageSlice';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import withRouter from '@fuse/core/withRouter';
import {
  apiUrlDeleteProductGroup, apiUrlDeleteUnit, apiUrlGetProductGroup, apiUrlGetUnitList,
} from 'app/services/jwtService/defaultValues';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Spacer, Text } from '@nextui-org/react';
// import { Button } from '@mui/material';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { fetchUnitsList, deleteUnit } from '../store/unitsSlice';



const styleButtonForText = {
  'font-size': '12px',
};
const styleButtonForUpdateBtn = {
  'font-size': '12px',
  'background-color': '#069DCD',
};
function UnitsTable() {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '50vh', width: '50%', justifyContent: 'center', margin: '10% auto' }), []);

  const [modalOpen, setModalOpen] = useState(false);
  const gridRef = useRef();
  const rowData = useSelector(({ baseInformation }) => baseInformation.unitsSlice.data);
  const loading = useSelector(({ baseInformation }) => baseInformation.unitsSlice.loading);
  const response = useSelector(({ baseInformation }) => baseInformation.unitsSlice.response);

  const [newUnit, setNewUnit] = useState();
  const [isUnitList, setIsUnitList] = useState();
  const [modalDelete, setModalDelete] = useState(false);
  const [unitIdDelete, setUnitIdDelete] = useState();



  const dispatch = useDispatch();


  function deleteUnits(e) {
    const tagItem = (
      <div>
        <Button
          color="error"
          onClick={() => {
            setUnitIdDelete(e.data.unitId);
            setModalDelete(true);
          }
          }
        >
          حذف
        </Button>
      </div>
    );
    return tagItem;
  }
  const handleDeleteUnit = () => {
    setModalDelete(!modalDelete)
    dispatch(deleteUnit(unitIdDelete))
      .unwrap()
      .then((res) => {
        if (res !== undefined && res.result && res.errors.length === 0) {
          dispatch(
            showMessage({
              message: 'عملیات با موفقیت انجام شد', // text or html
              autoHideDuration: 6000, // ms
              anchorOrigin: {
                vertical: 'top', //   top bottom
                horizontal: 'right' //  left center right
              },
              variant: 'success' //   success error info warning null
            }))
        } else {
          dispatch(
            showMessage({
              message: 'عملیات با خطا انجام شد', // text or html
              autoHideDuration: 6000, // ms
              anchorOrigin: {
                vertical: 'top', //   top bottom
                horizontal: 'right' //  left center right
              },
              variant: 'error' //   success error info warning null
            }))
        }
      })
      .catch((err) => {
        dispatch(
          showMessage({
            message: 'عملیات با خطا انجام شد', // text or html
            autoHideDuration: 6000, // ms
            anchorOrigin: {
              vertical: 'top', //   top bottom
              horizontal: 'right' //  left center right
            },
            variant: 'success' //   success error info warning null
          }))
      });

  }

  const [columnDefs] = useState([
    // field: 'title'
    {
      field: "title",
      headerName: 'عنوان',
      minWidth: 50,

    },
    {
      field: "delete",
      headerName: "حذف",
      cellRenderer: deleteUnits,
      minWidth: 50,
    },
  ])
  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    editable: false,
    animateRows: true,
  }))
  const cellClickedListener = useCallback(e => console.log('cellClicked', e));

  const onGridReady = useEffect(() => {
    dispatch(fetchUnitsList());
  }, [response])

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
      cellStyle: { border: 'solid 0.1px gray' }
    },
  };

  const updateGrid = (unit, isSuccessSubmition) => {

    if (isSuccessSubmition) {
      setIsUnitList({ ...unit });
    }

  }
  if (loading) {
    return <FuseLoading />;
  }
  return (
    <>
      <div className="w-full flex flex-col" style={{ justifyContent: 'center' }}>
        <FuseScrollbars className="grow overflow-x-auto">
          <div style={gridStyle} className="ag-theme-alpine">
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              gridOptions={gridOptions}
              rowSelection="single"
              onGridReady={onGridReady}
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
        height='40%'
      >
        <Modal.Header>
          <Text size={18}>
            آیا می خواهید این اطلاعات را حذف شوند؟
          </Text>

        </Modal.Header>
        <Modal.Body>
          <Button
            color="error"
            onClick={handleDeleteUnit}
            width='50%'
          >
            <Text size={14}>
              بلی
            </Text>
          </Button>
          {" "}
          <Button
            color="warning"
            width='50%'
            onClick={() => setModalDelete(false)}
          >
            <Text size={14}>
              خیر
            </Text>


          </Button>
        </Modal.Body>
      </Modal>

    </>
  );
}

export default withRouter(UnitsTable);
