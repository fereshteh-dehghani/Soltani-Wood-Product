import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  useFormContext,
  Controller,
  FormProvider,
  useForm
} from 'react-hook-form';
import { useDeepCompareEffect } from '@fuse/hooks';
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
  Switch,
} from '@mui/material';
import { Button, Row, Spacer, Text, Modal } from '@nextui-org/react';
import { useMemo, useRef, useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { showMessage } from 'app/store/fuse/messageSlice';
import {
  fetchCashList,
  fetchCash,
  addNewCash,
  updateCash,
  deleteCash,
  cashDisabled,
  newCash,
} from '../store/cashSlice';

const CashTable = () => {



  const gridRef = useRef();
  const gridStyleR = useMemo(() => ({ height: 800, width: 800 }), []);

  // const [newCash, setNewCash] = useState({});
  const [modalAlertDelete, setModalAlertDelete] = useState(false);
  const [noCash, setNoCash] = useState(false);

  const [cashList, setCashList] = useState([]);
  const [isUpdateCash, setIsUpdateCash] = useState(false);
  const [cashId, setCashId] = useState();
  const [labelSherink, setLabelSherink] = useState(false);

  const {
    data: rowData,
    loading,
    response,
    cash
  } = useSelector(({ baseInformation }) => baseInformation.cashSlice);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {},
  })
  const { control, formState, setValue, getValues, watch, reset } = methods;

  const form = watch();

  const dispatch = useDispatch();

  useEffect(() => {
    function updateCashState() {

      if (cashId !== undefined && isUpdateCash) {

        /**
        * Get Cash Data
        */
        dispatch(fetchCash(cashId))
          .then((action) => {
            /**
  * If the requested Cash is not exist show message
  */
            if (!action.payload) {
              setNoCash(true);
            }
          })

      }
      else {
        /**
          * Create New Cash Data
          */
        dispatch(newCash())
      }
    }
    updateCashState();
  }, [cashId, isUpdateCash]);


  useEffect(() => {
    if (!cash || cash.code === undefined) {
      return;
    }
    /**
     * Reset the form on customer state changes
     */
    reset(cash);
  }, [cash, reset]);

  const onSubmitForm = () => {
    if (cashId !== undefined && isUpdateCash) {
      dispatch(updateCash(getValues()))
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
            reset(newCash());
            setIsUpdateCash(false);
            setCashId();
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
      dispatch(addNewCash(getValues()))
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
            reset(newCash());
            setCashId();
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

  const ChangeStatus = (data) => {
    dispatch(cashDisabled(data))
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
          reset(newCash());
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
  };

  function handleDeleteCash() {

    dispatch(deleteCash(cashId))
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
          // setNewCash({ title: '', code: '' });
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

  function cashStatus(e) {
    const tagItem = (
      <div>
        <Switch
          defaultChecked={e.value}
          onChange={(event) => {
            ChangeStatus({ cashId: e.data.cashId, isDisabled: event.target.checked });
          }}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
    );
    return tagItem;
  }

  function editCash(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button
          color="gradient"
          size="sm"
          onClick={() => {

            setCashId(e.data.cashId)
            setIsUpdateCash(true);
          }}
        >
          <Text size={12} color="#fff">
            ویرایش
          </Text>
        </Button>
      </div>
    );
    return tagItem;
  }

  function deletedCash(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button
          color="error"
          size="sm"
          onClick={() => {
            setIsUpdateCash(false);
            setCashId(e.data.cashId);
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
    dispatch(fetchCashList());
    setCashList([...cashList]);
  }, [response]);

  // Grid Options
  const [columnDefs] = useState([
    { field: 'name', headerName: 'نام', minWidth: 100 },
    { field: 'code', headerName: 'کد', minWidth: 80 },
    { field: 'initCash', headerName: 'موجودی اولیه', minWidth: 80 },
    { field: 'cashTypeAcceptNegativeValuePer', headerName: 'پذیرش مقدار منفی', minWidth: 180 },
    {
      field: 'isDisabled',
      headerName: 'وضعیت',
      cellRenderer: cashStatus,
      minWidth: 120,
    },
    {
      field: 'cashId',
      headerName: 'ویرایش',
      cellRenderer: editCash,
      minWidth: 80,
    },
    {
      field: 'cashId',
      headerName: 'حذف ',
      cellRenderer: deletedCash,
      minWidth: 80,
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
    <FormProvider {...methods}>
      <Container>
        <Grid
          container
          className="mb-16 mt-16"
          justifyContent="center"
          sm={12}
          spacing={1}
          sx={{ margin: 'auto' }}
        >
          <Grid container item row sm={12} justifyContent="center" alignItems="center" spacing={1}>
            <Grid item xs={8} sm={4}>
              <Controller
                name="name"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mt-8 mb-8 input-style "
                    required
                    fullWidth
                    type="text"
                    size="small"
                    label="نام"
                    variant="outlined"

                  />
                )}
              />
            </Grid>
            <Grid item xs={8} sm={4}>
              <Controller
                name="code"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mt-8 mb-8 input-style "
                    required
                    fullWidth
                    type="text"
                    size="small"
                    label="کد"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid container item row sm={12} justifyContent="center" alignItems="center" spacing={1}>
            <Grid item xs={8}>
              <Controller
                name="initCash"
                defaultValue=""
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    className="mt-8 mb-8 input-style "
                    required
                    fullWidth
                    type="text"
                    size="small"
                    label="موجودی اولیه"
                    variant="outlined"
                    value={value}
                    onChange={(event) => onChange(+ event.target.value)}
                  />
                )}
              />
            </Grid>
            <Grid item xs={8}>
              <Controller
                id="description"
                name="description"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mt-8 mb-16"
                    id="description"
                    label="توضیحات"
                    type="text"
                    multiline
                    rows={2}
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid container item xs={12} justifyContent="center" alignItems="center" spacing={1}>
            <Grid item xs={8}>
              <Controller
                name="cashTypeAcceptNegativeValue"
                defaultValue={0}
                control={control}
                render={({ field }) => (
                  <FormControl>
                    <FormLabel component="legend">پذیرش مقدار منفی :</FormLabel>
                    <RadioGroup
                      {...field}
                      className="mt-16"
                      row
                      name="cashTypeAcceptNegativeValue"
                      value={field.value === '' ? 0 : field.value}
                      onChange={(event, value) => {
                        field.onChange(+value);
                      }}
                    >
                      <FormControlLabel control={<Radio />} label="پذیرش" value={0} />
                      <FormControlLabel control={<Radio />} label="عدم پذیرش" value={1} />
                      <FormControlLabel control={<Radio />} label="پیغام خطا" value={2} />
                    </RadioGroup>
                  </FormControl>
                )}
              />
            </Grid>
          </Grid>

          <Grid container item row sm={12} justifyContent="center" alignItems="center" spacing={1}>
            <Spacer y={3} />
            <Grid item xs={3}>
              <Button color="gradient" size="lg" onClick={onSubmitForm}>
                <Text size={14} color="#fff">
                  ذخیره
                </Text>
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

              setModalAlertDelete(!modalAlertDelete);
              handleDeleteCash();
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
    </FormProvider>
  );
};

export default CashTable;
