import { AccountCircle, CheckBox } from '@mui/icons-material';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  FormGroup,
  Checkbox,
  Container,
  MenuItem,
  Divider,
  Typography,
} from '@mui/material';
import { Button, Row, Spacer, Text, Modal } from '@nextui-org/react';
import { useMemo, useRef, useState, useEffect } from 'react';
import { useFormContext, Controller, useForm, useFieldArray } from 'react-hook-form';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { showMessage } from 'app/store/fuse/messageSlice';
import { fetchBankList, fetchBank, addNewBank, updateBank, deleteBank } from '../store/bankSlice';

const BankTable = () => {
  const gridRef = useRef();
  const gridStyleR = useMemo(() => ({ height: 800,width: 800 }), []);

  const [newBank, setNewBank] = useState({});
  const [modalAlertDelete, setModalAlertDelete] = useState(false);
  const [accountBankList, setAccountBankList] = useState([]);
  const [isUpdateGrid, setIsUpdateGrid] = useState('0');
  const [optionSelectBank, setOptionSelectBank] = useState([]);
  const [isLoadingSelectBankList, setIsLoadingSelectBankList] = useState(true);
  const [bankId, setBankId] = useState();
  const [labelSherink, setLabelSherink] = useState(false);

  const {
    data: rowData,
    loading,
    response,
  } = useSelector(({ baseInformation }) => baseInformation.bankSlice);
  const dispatch = useDispatch();

  const handleSaveBank = () => {
    if (newBank.bankId !== undefined) {
      dispatch(updateBank(newBank))
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
            setLabelSherink(false);
            setNewBank({ title: '', code: '' });
          } else {
            dispatch(
              showMessage({
                                message: 'عملیات ناموفق ', // text or html
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
                            message: 'عملیات ناموفق ', // text or html
              autoHideDuration: 6000, // ms
              anchorOrigin: {
                vertical: 'top', //   top bottom
                horizontal: 'right', //  left center right
              },
              variant: 'error', //   success error info warning null
            })
          );
        });
    } else {
      dispatch(addNewBank(newBank))
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
            setLabelSherink(false);
            setNewBank({ title: '', code: '' });
          } else {
            dispatch(
              showMessage({
                                message: 'عملیات ناموفق ', // text or html
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
                            message: 'عملیات ناموفق ', // text or html
              autoHideDuration: 6000, // ms
              anchorOrigin: {
                vertical: 'top', //   top bottom
                horizontal: 'right', //  left center right
              },
              variant: 'error', //   success error info warning null
            })
          );
        });
    }
    setIsUpdateGrid('1');
  };

  function editBank(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button
          color="success"
          size="sm"
          onClick={() => {
            setLabelSherink(true);
            setNewBank(e.data);
          }}
        >
          <Text size={14} color="#fff">
            ویرایش
          </Text>
        </Button>
      </div>
    );
    return tagItem;
  }

  function deletedBank(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button
          color="error"
          size="sm"
          onClick={() => {
            setBankId(e.data.bankId);
            setModalAlertDelete(!modalAlertDelete);
          }}
        >
          <Text size={12} color="#fff">
            حذف
          </Text>
        </Button>
      </div>
    );
    return tagItem;
  }

  const onGridReady = useEffect(() => {
    dispatch(fetchBankList());
    setAccountBankList([...accountBankList]);
  }, [response]);

  // Grid Options
  const [columnDefs] = useState([
    { field: 'title', headerName: 'عنوان بانک', minWidth: 180 },
    { field: 'code', headerName: 'شعبه', minWidth: 180 },
    {
      field: 'bankId',
      headerName: 'ویرایش',
      cellRenderer: editBank,
      minWidth: 120,
    },
    {
      field: 'bankId',
      headerName: 'حذف ',
      cellRenderer: deletedBank,
      minWidth: 100,
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 700,
      sortable: true,
      filter: true,
    };
  }, []);
  const gridOptions = {
    columnDefs: defaultColDef,
    rowData: null,
    enableRtl: true,
    scroll: true,
    domLayout: 'autoHeight',
    animateRows: true,
    defaultColDef: {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 700,
      filter: true,
      resizable: true,
    },
  };

  return (
    <div>
      <Container>
        <Grid
          container
          className="mb-16 mt-16"
          justifyContent="flex-start"
          sm={12}
          spacing={1}
          sx={{ margin: 'auto' }}
        >
          {/* <Grid container item row sm={12} justifyContent="center" alignItems="center" spacing={1}> */}

          <Grid item xs={3} sm={3}>
            <TextField
              className="mt-8 mb-8 input-style "
              required
              fullWidth
              id="title"
              type="text"
              size="small"
              label="عنوان بانک"
              variant="outlined"
              value={newBank.title}
              onChange={(e) => setNewBank({ ...newBank, title: e.target.value })}
            />
          </Grid>
          <Grid item xs={3} sm={3}>
            <TextField
              className="mt-8 mb-8 input-style "
              required
              fullWidth
              name="code"
              id="code"
              type="text"
              size="small"
              label="کد بانک"
              variant="outlined"
              InputLabelProps={{ shrink: { labelSherink } }}
              value={newBank.code}
              onChange={(e) => setNewBank({ ...newBank, code: e.target.value })}
            />
          </Grid>
          
          <Grid item xs={3} style={{display:"flex",marginTop:"1rem" }} justifyContent="center" >
            <Button
              onClick={handleSaveBank}
              // color="gradiant"
            >
              <Text size={14} color="#fff">
                ذخیره
              </Text>
            </Button>
          </Grid>
          {/* </Grid> */}
          {/* <Grid container item row sm={12} justifyContent="center" alignItems="center" spacing={1}> */}

          <Grid item xs={12} y={5} justifyContent="flex-start" style={{marginTop:"2rem"}}>
            <Row justify="flex-start" mt={20}>
              <FuseScrollbars className=" overflow-x-auto">
                <div style={gridStyleR} className="ag-theme-alpine">
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
            </Row>
          </Grid>
          {/* </Grid> */}
        </Grid>
      </Container>

      <Modal
        open={modalAlertDelete}
        closeButton
        width="38%"
        height="43%"
        onClose={() => setModalAlertDelete(false)}
      >
        <Modal.Body>
          <h3>آیا می خواهید اطلاعات را حذف کنید؟</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="error"
            onClick={() => {
              dispatch(deleteBank(bankId));
              setModalAlertDelete(!modalAlertDelete);
            }}
          >
            <Text size={12} color="#fff">
              بلی
            </Text>
          </Button>{' '}
          <Button color="warning" onClick={() => setModalAlertDelete(false)}>
            <Text size={12} color="#fff">
              خیر
            </Text>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BankTable;
