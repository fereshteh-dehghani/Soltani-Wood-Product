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
import FuseLoading from '@fuse/core/FuseLoading';
import { Button, Row, Spacer, Text, Modal, Loading } from '@nextui-org/react';
import { useMemo, useRef, useState, useEffect } from 'react';
import { useFormContext, Controller, useForm, useFieldArray } from 'react-hook-form';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { showMessage } from 'app/store/fuse/messageSlice';
import Select from 'react-select';
import {
  fetchBankAccountList,
  fetchBankAccount,
  addNewBankAccount,
  updateBankAccount,
  deleteBankAccount,
} from '../store/bankAccountSlice';
import "../../../../../styles/MyStyles.css"

const BankAccountTable = () => {
  const gridRef = useRef();
  const gridStyleR = useMemo(() => ({ height: 400 , width: 1180 }), []);

  const [newBankAccount, setNewBankAccount] = useState({});
  const [modalAlertDelete, setModalAlertDelete] = useState(false);
  const [modalBankAccount , setModalBankAccount] = useState(false);
  const [accountBankList, setAccountBankList] = useState([]);
  const [isUpdateGrid, setIsUpdateGrid] = useState('0');
  const [optionSelectBank, setOptionSelectBank] = useState([]);
  const [isLoadingSelectBankList, setIsLoadingSelectBankList] = useState(true);
  const [bankAccountId, setBankAccountId] = useState();
  const [labelSherink, setLabelSherink] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);

  const {
    data: rowData,
    loading,
    response,
  } = useSelector(({ baseInformation }) => baseInformation.bankAccountSlice);
  const dispatch = useDispatch();
  /* GET Bank lIst */
  useEffect(() => {
    axios
      .get(`/api/Bank/GetBankList`)
      .then((resp) => {
        console.log(resp.data.result);
        const result = [...resp.data.result];
        const optionsArray = [];
        result.forEach((item) => {
          optionsArray.push({ value: item.bankId, label: item.title });
        });
        setOptionSelectBank([...optionsArray]);
        setIsLoadingSelectBankList(false);
      })
      .catch((err) => {
        console.log('Error in Get bank', err);
      });
  }, []);

  const handleSaveBank = () => {
    setLoadingBtn(true);
    if (newBankAccount.bankAccountId !== undefined) {
      dispatch(updateBankAccount(newBankAccount))
        .unwrap()
        .then((res) => {
          if (res !== undefined && res.result && res.errors.length === 0) {
            dispatch(
              showMessage({
                message: '???????????? ???? ???????????? ?????????? ????', // text or html
                autoHideDuration: 6000, // ms
                anchorOrigin: {
                  vertical: 'top', //   top bottom
                  horizontal: 'right', //  left center right
                },
                variant: 'success', //   success error info warning null
              })
            );
            setLabelSherink(false);
            setNewBankAccount({});
            setLoadingBtn(false);
          } else {
            dispatch(
              showMessage({
                message: '???????????? ???????????? ', // text or html
                autoHideDuration: 6000, // ms
                anchorOrigin: {
                  vertical: 'top', //   top bottom
                  horizontal: 'right', //  left center right
                },
                variant: 'error', //   success error info warning null
              })
            );
            setLoadingBtn(false);
          }
        })
        .catch((err) => {
          dispatch(
            showMessage({
              message: '???????????? ???????????? ', // text or html
              autoHideDuration: 6000, // ms
              anchorOrigin: {
                vertical: 'top', //   top bottom
                horizontal: 'right', //  left center right
              },
              variant: 'error', //   success error info warning null
            })
          );
          setLoadingBtn(false);
        });
    } else {
      dispatch(addNewBankAccount(newBankAccount))
        .unwrap()
        .then((res) => {
          if (res !== undefined && res.result && res.errors.length === 0) {
            dispatch(
              showMessage({
                message: '???????????? ???? ???????????? ?????????? ????', // text or html
                autoHideDuration: 6000, // ms
                anchorOrigin: {
                  vertical: 'top', //   top bottom
                  horizontal: 'right', //  left center right
                },
                variant: 'success', //   success error info warning null
              })
            );
            setLabelSherink(false);
            setNewBankAccount({});
            setLoadingBtn(false);
          } else {
            dispatch(
              showMessage({
                message: '???????????? ???????????? ', // text or html
                autoHideDuration: 6000, // ms
                anchorOrigin: {
                  vertical: 'top', //   top bottom
                  horizontal: 'right', //  left center right
                },
                variant: 'error', //   success error info warning null
              })
            );
            setLoadingBtn(false);
          }
        })
        .catch((err) => {
          dispatch(
            showMessage({
              message: '???????????? ???????????? ', // text or html
              autoHideDuration: 6000, // ms
              anchorOrigin: {
                vertical: 'top', //   top bottom
                horizontal: 'right', //  left center right
              },
              variant: 'error', //   success error info warning null
            })
          );
          setLoadingBtn(false);

        });
    }
    setIsUpdateGrid('1');
  };

  function editBankAccount(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button
          color="#333"
          onClick={() => {
            setLabelSherink(true);
            setNewBankAccount(e.data);
          }}
        >
          <Text size={12} color="#fff">
            ????????????
          </Text>
        </Button>
      </div>
    );
    return tagItem;
  }

  function deletedBankAccount(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button
          color="error"
          onClick={() => {
            setBankAccountId(e.data.bankAccountId);
            setModalAlertDelete(!modalAlertDelete);
          }}
        >
          <Text size={12} color="#fff">
            ??????
          </Text>
        </Button>
      </div>
    );
    return tagItem;
  }

  const onGridReady = useEffect(() => {
    dispatch(fetchBankAccountList());
    setAccountBankList([...accountBankList]);
  }, [response]);

  // Grid Options
  const [columnDefs] = useState([
    // { field: "id", headerName: "Id", minWidth: 65 },
    { field: 'bankTitle', headerName: '?????????? ????????', minWidth: 120 },
    { field: 'bankBranchCode', headerName: '???? ????????', minWidth: 120 },
    { field: 'bankBranchTitle', headerName: '?????? ????????', minWidth: 150 },
    { field: 'accountNumber', headerName: '?????????? ????????', minWidth: 150 },
    { field: 'owner', headerName: '???????? ????????', minWidth: 150 },
    { field: 'atmCard', headerName: '?????????? ????????', minWidth: 180 },
    { field: 'sabaNumber', headerName: '?????????? ??????', minWidth: 200 },

    {
      field: 'bankId',
      headerName: '????????????',
      cellRenderer: editBankAccount,
      minWidth: 120,
    },
    {
      field: 'bankId',
      headerName: '?????? ',
      cellRenderer: deletedBankAccount,
      minWidth: 100,
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 50,
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
      minWidth: 100,
      filter: true,
      resizable: true,
    },
  };

  if (loading) {
    return <FuseLoading />;
  }

  return (
    <div>
      <Container style={{ display: "flex", flexDirection: "column", marginTop:"1rem"  }}   >



      <Modal
        style={{alignItems:"center" , paddingTop:"0px" }}
        open={modalBankAccount}
        closeButton
        preventClose
        width="60%"
        height="60%"
        onClose={() => setModalBankAccount(false)}
      >

        <Modal.Header style={{backgroundColor:"#1B2330" , width:"100%" , }}  >
          <h4 style={{color:"white"}} >?????? ???????? ??????????</h4>
        </Modal.Header>

        <Modal.Body style={{justifyContent:"center" , alignItems:"center"}} >
        <Grid container item row sm={10} justifyContent="center" justifySelf="center" alignItems="center" spacing={1}>
          <Grid item sx={5} sm={4} className="mt-8">
            <Select
              labelId="demo-simple-select-label"
              className="react-select mt-8 mb-16"
              classNamePrefix="react-select"
              tabindex="0"
              fullWidth
              width="100%"
              // value={}
              // value={newBankAccount.find((c) => c.value === value[0])}
              options={optionSelectBank}
              inline
              isLoading={isLoadingSelectBankList}
              placeholder="????????"
              onChange={(e) => setNewBankAccount({ ...newBankAccount, bankId: e.value })}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              className="mt-8 mb-8"
              required
              fullWidth
              id=" bankAccountTitle"
              type="text"
              size="small"
              label="?????????? ????????"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={newBankAccount.bankAccountTitle}
              onChange={(e) =>
                setNewBankAccount({ ...newBankAccount, bankAccountTitle: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              className="mt-8 mb-8"
              required
              fullWidth
              name="owner"
              id="owner"
              type="text"
              size="small"
              label="???????? ????????"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={newBankAccount.owner}
              onChange={(e) => setNewBankAccount({ ...newBankAccount, owner: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              className="mt-8 mb-8"
              required
              fullWidth
              id="bankBranchCode"
              type="text"
              size="small"
              label="???? ????????"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={newBankAccount.bankBranchCode}
              onChange={(e) =>
                setNewBankAccount({ ...newBankAccount, bankBranchCode: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              className="mt-8 mb-8"
              required
              fullWidth
              id="bankBranchTitle"
              type="text"
              size="small"
              label="?????? ????????"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={newBankAccount.bankBranchTitle}
              onChange={(e) =>
                setNewBankAccount({ ...newBankAccount, bankBranchTitle: e.target.value })
              }
            />
          </Grid>

          {/* <Grid item xs={12} sm={4}>

                        <TextField

                            className="mt-8 mb-8"
                            required
                            fullWidth

                            id="branchName"
                            type="text"
                            size="small"
                            label="?????? ????????"
                            variant="outlined"
                            onChange={(e) => setNewBankAccount({ ...newBankAccount, branchName: e.target.value })}

                        />

                    </Grid> */}
          <Grid item xs={4}>
            <TextField
              className="mt-8 mb-8"
              required
              fullWidth
              id="accountNumber"
              type="text"
              size="small"
              label="?????????? ????????"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={newBankAccount.accountNumber}
              onChange={(e) =>
                setNewBankAccount({ ...newBankAccount, accountNumber: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              className="mt-8 mb-8"
              required
              fullWidth
              id="atmCard"
              type="text"
              size="small"
              label="?????????? ????????"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={newBankAccount.atmCard}
              onChange={(e) => setNewBankAccount({ ...newBankAccount, atmCard: e.target.value })}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              className="mt-8 mb-8"
              required
              fullWidth
              name="shabaNumber"
              id="shabaNumber"
              type="text"
              size="small"
              label="?????????? ??????"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={newBankAccount.sabaNumber}
              onChange={(e) => setNewBankAccount({ ...newBankAccount, sabaNumber: e.target.value })}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              className="mt-8 mb-8"
              required
              fullWidth
              name="bankBranchMangerName"
              id="bankBranchManagerName"
              type="text"
              size="small"
              label="?????? ???????? ????????"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={newBankAccount.bankBranchManagerName}
              onChange={(e) =>
                setNewBankAccount({ ...newBankAccount, bankBranchManagerName: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              className="mt-8 mb-8"
              required
              fullWidth
              name="bankBranchPhoneNumber"
              id="bankBranchPhoneNumber"
              type="text"
              size="small"
              label="?????????? ???????? ????????"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={newBankAccount.bankBranchPhoneNumber}
              onChange={(e) =>
                setNewBankAccount({ ...newBankAccount, bankBranchPhoneNumber: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={8}>
            <TextField
              className="mt-8 mb-8"
              required
              fullWidth
              name="bankBranchAddress"
              id="bankBranchAddress"
              type="text"
              size="small"
              label="???????? ????????"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={newBankAccount.bankBranchAddress}
              onChange={(e) =>
                setNewBankAccount({ ...newBankAccount, bankBranchAddress: e.target.value })
              }
            />
          </Grid>



        </Grid>
        </Modal.Body>
        <Modal.Footer >

          <Button color="error" onClick={() => setModalBankAccount(false)} id="CustomBtn" >
            <Text size={13} color="#fff">
              ????????
            </Text>
          </Button>

          <Grid item xs={4} className="my-16" style={{ display: "flex", justifyContent: "center" }} >
            <Button onClick={handleSaveBank} css={{ backgroundColor: "#153247" }} id="CustomBtn" >
              {
                loadingBtn &&
                <Loading type="points" color="currentColor" size="sm" />
              }

            { !loadingBtn &&
             <Text size={13} color="#fff">
                ??????????
              </Text>
              }
            </Button>
          </Grid>
        </Modal.Footer>
      </Modal>

      <Row justify="flex-end" className='my-16' >
        <Button
          onClick={() => {
            setModalBankAccount(!modalBankAccount);
          }}
          id="CustomBtn"
        >
          <Text size={14} color="#fff">
            ?????? ???????? ??????????
          </Text>
        </Button>
      </Row>

        <Row justify="center" >
          <FuseScrollbars className="grow overflow-x-auto">
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



      </Container>

      <Modal
        style={{alignItems:"center"}}
        open={modalAlertDelete}
        closeButton
        width="30%"
        height="43%"
        onClose={() => setModalAlertDelete(false)}
      >
        <Modal.Body>
          <h3>?????? ???? ???????????? ?????????????? ???? ?????? ??????????</h3>
        </Modal.Body>
        <Modal.Footer >
          <Button
            color="error"
            onClick={() => {
              dispatch(deleteBankAccount(bankAccountId));
              setModalAlertDelete(!modalAlertDelete);
            }}
          >
            <Text size={12} color="#fff">
              ??????
            </Text>
          </Button>{' '}
          <Button color="warning" onClick={() => setModalAlertDelete(false)}>
            <Text size={12} color="#fff">
              ??????
            </Text>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BankAccountTable;