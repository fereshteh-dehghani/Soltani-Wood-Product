import { AccountCircle, Cancel, CheckBox, DeleteForever, Edit, Save } from '@mui/icons-material';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
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
import { Button, Row, Spacer, Text, Modal, Loading } from '@nextui-org/react';
import { useMemo, useRef, useState, useEffect } from 'react';
import { useFormContext, Controller, useForm, useFieldArray } from 'react-hook-form';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { showMessage } from 'app/store/fuse/messageSlice';
import { apiUrlUsersListWithFullNameAndId } from 'app/services/jwtService/defaultValues';

import {
  addNewStock,
  fetchStock,
  fetchStockList,
  updateStock,
  deleteStock,
} from '../store/stockSlice';

const styleBtn = {
  backgroundColor: "#00d041",
  borderRadius: "5px",
  width: "80%",
  height: "40px",
  fontSize: "2rem",
  '&:hover': {
    backgroundColor: "#00d084",
  },
}

const styleResetBtn = {
  backgroundColor: "#ff5722",
  borderRadius: "5px",
  width: "50%",
  height: "40px",
  fontSize: "1.5rem",
  '&:hover': {
    backgroundColor: "#ff9800",
  },
}

const styletext = {
  '&:hover': {
    fontSize: "2rem",
  },
}

const StockTable = () => {

  const defaultValue = {
    code: '',
    title: '',
    address: '',
    userId: 0,
    isMain: false,
  }
  const gridRef = useRef();

  const gridStyleR = useMemo(() => ({ height: 800, width: 800 }), []);
  const [modalAlertDelete, setModalAlertDelete] = useState(false);
  const [options, setOptions] = useState([]);
  const [stockId, setStockId] = useState();
  const [newStock, setNewStock] = useState({ ...defaultValue });
  const [valueSelect, setValueSelect] = useState();
  const [isLoading, setIsLoading] = useState(false);

  /* Get Users List */
  useEffect(() => {
    axios
      .get(`${apiUrlUsersListWithFullNameAndId}?textToFind=${''}`)
      .then((resp) => {
        const result = [...resp.data.result];
        const tempArray = [];
        result.forEach((item) => {
          tempArray.push({ value: item.id, label: item.name });
        });
        setOptions([...tempArray]);
      })
      .catch((err) => {
        console.log('Error in Get Userslist', err);
      }, []);
  }, []);



  useEffect(() => {
    const findValueSelect = () => {
      const val = options.find((item) => item.value === newStock.userId);
      setValueSelect({ ...val });
    };
    findValueSelect();
  }, [newStock])

  const handleChange = (e) => {
    setNewStock({
      ...newStock,
      [e.target.name]: e.target.value,
    });
  };

  /* submition Form */
  const onSubmitForm = () => {
    setIsLoading(true);
    if (newStock.stockId !== undefined) {
      dispatch(updateStock(newStock))
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
      dispatch(addNewStock(newStock))
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
  };

  const {
    data: rowData,
    loading,
    response,
  } = useSelector(({ baseInformation }) => baseInformation.stockSlice);
  const dispatch = useDispatch();

  function editstock(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button
          shadow
          gradient
          size="sm"
          iconRight={<Edit />}
          onClick={() => {
            setNewStock(e.data);
          }}
        >
          <Text size={11} color="#fff">
            {` ویرایش `}
          </Text>
        </Button>
      </div>
    );
    return tagItem;
  }

  function deletedStock(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button
          color="error"
          size="sm"
          shadow
          iconRight={<DeleteForever />}
          onClick={() => {
            setStockId(e.data.stockId);
            setModalAlertDelete(!modalAlertDelete);
          }}
        >
          <Text size={11} color="#fff">
            حذف
          </Text>
        </Button>
      </div>
    );
    return tagItem;
  }


  const onGridReady = useEffect(() => {
    dispatch(fetchStockList());
    setNewStock({ ...defaultValue });
    setIsLoading(false)
  }, [response]);

  // Grid Options
  const [columnDefs] = useState([
    { field: 'title', headerName: 'نام انبار', minWidth: 180 },
    { field: 'code', headerName: 'کد انبار', minWidth: 180 },
    { field: 'userDisplayName', headerName: 'انباردار', minWidth: 180 },

    {
      field: 'stockId',
      headerName: 'ویرایش',
      cellRenderer: editstock,
      minWidth: 150,
    },
    {
      field: 'stockId',
      headerName: 'حذف ',
      cellRenderer: deletedStock,
      minWidth: 150,
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
          justifyContent="center"
          sm={12}
          spacing={1}
          sx={{ margin: 'auto' }}
        >
          <form>
            <Grid
              container
              item
              row
              sm={12}
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={12}>
                <TextField
                  className="mt-8 mb-8 input-style "
                  defaultValue=""
                  required
                  fullWidth
                  name="code"
                  type="text"
                  size="small"
                  label="کد"
                  variant="outlined"
                  value={newStock.code}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  defaultValue=""
                  className="mt-8 mb-8 input-style "
                  required
                  fullWidth
                  name="title"
                  type="text"
                  size="small"
                  label="عنوان"
                  variant="outlined"
                  value={newStock.title}
                  onChange={handleChange}
                // InputLabelProps={{ shrink: { labelSherink } }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              item
              row
              sm={12}
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={12}>
                <TextField
                  defaultValue=""
                  className="mt-8 mb-8 input-style "
                  required
                  fullWidth
                  type="text"
                  size="small"
                  name="address"
                  label="آدرس انبار"
                  variant="outlined"
                  value={newStock.address}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Grid
              container
              item
              row
              sm={12}
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={12}>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  value={valueSelect}
                  isRtl
                  isSearchable
                  name="userId"
                  onChange={(e) => {

                    setNewStock({ ...newStock, userId: e.value });
                    setValueSelect({ ...e });
                  }}
                  options={options}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  label="انبار اصلی"
                  control={
                    <Checkbox
                      name="isMain"
                      checked={newStock.isMain}
                      onChange={(e) => setNewStock({ ...newStock, isMain: e.target.checked })}
                    />
                  }
                />
              </Grid>
            </Grid>
          </form>
          <Grid container item row sm={12} justifyContent="center" alignItems="center">
            <Spacer y={3} />
            <Grid item xs={3} alignItems="left">
              <Button
                // 
                css={styleResetBtn}
                // iconRight={<cancel/>}
                onClick={() => setNewStock({ ...defaultValue })}
              >
                ریست
              </Button>
            </Grid>
            <Grid item xs={3} alignItems="right">
              <Button
                css={styleBtn}
                size="lg"
                shadow
                ripple
                animated
                iconRight={!isLoading && <Save />}
                onClick={onSubmitForm}
              >
                {isLoading &&
                  <Loading color="currentColor" size="md" />
                }
                {!isLoading &&
                  "ذخیره"
                }
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} y={5} justifyContent="center" style={{ marginTop: '3rem' }}>
            <Row justify="center" mt={20}>
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
              dispatch(deleteStock(stockId));
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

export default StockTable;
