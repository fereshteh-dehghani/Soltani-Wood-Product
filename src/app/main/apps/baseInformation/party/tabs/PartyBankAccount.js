import { AccountCircle, CheckBox } from "@mui/icons-material";
import axios from 'axios';
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, FormGroup, Checkbox, Container, MenuItem, Divider, Typography } from "@mui/material";
import { Button, Row, Spacer, Text } from '@nextui-org/react'
import { useMemo, useRef, useState, useEffect } from "react";
import { useFormContext, Controller, useForm, useFieldArray } from 'react-hook-form';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import FuseScrollbars from "@fuse/core/FuseScrollbars";
import Select from 'react-select';



const PartyBankAccount = () => {

    const methods = useFormContext();
    const { control, formState, setValue, getValue, watch } = methods;
    const partyBankAccount = watch('partyBankAccount');
    const gridRef = useRef();
    const gridStyleR = useMemo(() => ({ height: 400 }), []);
    const [visible, setVisible] = useState(false);
    const [rowData, setRowData] = useState();
    const [newAccountBank, setNewAccountBank] = useState({});
    const [accountBankList, setAccountBankList] = useState([...partyBankAccount]);
    const [isUpdateGrid, setIsUpdateGrid] = useState("0");
    const [optionSelectBank, setOptionSelectBank] = useState([]);
    const [isLoadingSelectBankList, setIsLoadingSelectBankList] = useState(true);
    const [indexSelectedItem, setIndexSelectedItem] = useState(null);
    const [txtButton, setTxtButton] = useState("ذخیره");
    const [isValidateCardNo, setIsValidateCardNo] = useState(false);
    const [isValidateShabaNo, setIsValidateShabaNo] = useState(false);

    



    const handleSaveAccountBank = () => {

        const cardNumber = newAccountBank.cardNo;
        const shabaNo = newAccountBank.shabaNumber;

        if (cardNumber.length !== 16) {
            setIsValidateCardNo(true);
            newAccountBank.cardNo = "";
        } else {
            setIsValidateCardNo(false);
        }


        if (shabaNo.length !== 16) {
            setIsValidateShabaNo(true);
            newAccountBank.ShabaNumber = "";
        } else {
            setIsValidateShabaNo(false);
        }

        if (indexSelectedItem === null) {
            setAccountBankList([...accountBankList, newAccountBank]);

        } else {
            handleEditBankAccount();
        }

        setNewAccountBank({
            bankId: null,
            bankTitle: '',
            branchCode: '',
            branchName: '',
            owner: '',
            shabaNumber: '',
            accountNo: '',
            cardNo: '',
        });

    };

    // Get Bank List
    const handleEditBankAccount = () => {
        const updateAccount = accountBankList.map((item, index) => {
            if (index === indexSelectedItem) {
                item = { ...newAccountBank };
            }
            return item;
        })

        setAccountBankList([...updateAccount]);
        setIndexSelectedItem(null);
    }


    const handleDeleteAccount = (valIndex) => {

        setAccountBankList((current) => {
            const newList = current.filter((item, index) => index !== valIndex);
            return newList;
        })

    }

    useEffect(() => {
        axios
            .get(`/api/Bank/GetBankList`)
            .then((resp) => {
                console.log(resp.data.result)
                const result = [...resp.data.result];
                const optionsArray = [];
                result.forEach((item) => {
                    optionsArray.push({ value: item.bankId, label: item.title });
                })
                setOptionSelectBank([...optionsArray]);
                setIsLoadingSelectBankList(false);
            })
            .catch((err) => {
                console.log('Error in Get bank', err);
            });
    }, []);


    function editAccount(e) {
        const tagItem = (
            <div>
                <Spacer y={0.5} />
                <Button
                    color="success"
                    size="sm"
                    onClick={() => {
                        setNewAccountBank(e.data);
                        setIndexSelectedItem(e.rowIndex);
                        setTxtButton("ویرایش حساب");
                    }}
                >
                    <Text size={12} color="white">ویرایش</Text>
                </Button>
            </div>
        );
        return tagItem;
    }



    function deleteAccount(e) {
        const tagItem = (
            <div>
                <Spacer y={0.5} />
                <Button
                    color="error"
                    size="sm"
                    onClick={() => handleDeleteAccount(e.rowIndex)}
                >
                    <Text size={12} color="white">حذف</Text>
                </Button>
            </div>
        );
        return tagItem;
    }

    const onGridReady = useEffect(() => {
        setRowData([...accountBankList]);
        setValue('partyBankAccount', accountBankList)
    }, [accountBankList])

    // Grid Options
    const [columnDefs] = useState([
        { field: 'bankTitle', headerName: 'عنوان بانک', minWidth: 250 },
        { field: 'branchCode', headerName: 'کد شعبه', minWidth: 250 },
        { field: 'branchName', headerName: 'نام شعبه', minWidth: 250 },
        { field: 'accountNo', headerName: 'شماره حساب', minWidth: 120 },
        { field: 'owner', headerName: 'صاحب حساب', minWidth: 130 },
        { field: 'cardNo', headerName: 'شماره کارت', minWidth: 120 },
        { field: 'shabaNumber', headerName: 'شماره شبا', minWidth: 120 },
        {
            field: 'edit',
            headerName: 'ویرایش حساب',
            cellRenderer: editAccount,
            minWidth: 120,
        },
        {
            field: 'delete',
            headerName: 'حذف حساب',
            cellRenderer: deleteAccount,
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


    return (
        <div>
            <Container>
                <Grid container className="mb-16" justifyContent="flex-start" sm={9} spacing={1} >

                    <Grid container item row sm={12} justifyContent="flex-start" alignItems="center" spacing={1}>
                        <Grid item xs={12} sm={4} className="mt-5">
                            <Select
                                
                                labelId="demo-simple-select-label "
                                className="react-select mt-8 mb-16 z-50"
                                classNamePrefix="react-select"
                                tabindex="0"
                                fullWidth
                                width="100%"
                                value={{ label: newAccountBank.bankTitle, value: newAccountBank.bankId }}
                                options={optionSelectBank}
                                inline
                                isLoading={isLoadingSelectBankList}
                                placeholder="بانک"
                                onChange={(e) => setNewAccountBank({ ...newAccountBank, bankId: e.value, bankTitle: e.label })}
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
                                label="صاحب حساب"
                                variant="outlined"
                                value={newAccountBank.owner}
                                onChange={(e) => setNewAccountBank({ ...newAccountBank, owner: e.target.value })}

                            />

                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <TextField
                                className="mt-8 mb-8"
                                required
                                fullWidth
                                id="branchCode"
                                type="text"
                                size="small"
                                label="کد شعبه"
                                variant="outlined"
                                value={newAccountBank.branchCode}
                                onChange={(e) => setNewAccountBank({ ...newAccountBank, branchCode: e.target.value })}
                            />

                        </Grid>

                        <Grid item xs={12} sm={4}>

                            <TextField

                                className="mt-8 mb-8"
                                required
                                fullWidth

                                id="branchName"
                                type="text"
                                size="small"
                                label="نام شعبه"
                                variant="outlined"
                                value={newAccountBank.branchName}
                                onChange={(e) => setNewAccountBank({ ...newAccountBank, branchName: e.target.value })}

                            />

                        </Grid>
                        <Grid item xs={4}>

                            <TextField
                                className="mt-8 mb-8"
                                required
                                fullWidth
                                id="accountNo"
                                type="text"
                                size="small"
                                label="شماره حساب"
                                variant="outlined"
                                value={newAccountBank.accountNo}
                                onChange={(e) => setNewAccountBank({ ...newAccountBank, accountNo: e.target.value })}

                            />

                        </Grid>
                        <Grid item xs={4}>

                            <TextField
                                className="mt-8 mb-8"
                                required
                                fullWidth
                                id="accountNo"
                                type="text"
                                size="small"
                                label="شماره کارت"
                                variant="outlined"
                                error={isValidateCardNo}
                                helperText={isValidateCardNo && "شماره  وارد شده اشتباه می باشد"}
                                value={newAccountBank.cardNo}
                                onChange={(e) => {
                                    const newValue = e.target.value;
                                    setNewAccountBank({ ...newAccountBank, cardNo: newValue })

                                }

                                }


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
                                label="شماره شبا"
                                variant="outlined"
                                error={isValidateShabaNo}
                                helperText={isValidateShabaNo && "شماره  وارد شده اشتباه می باشد"}
                                value={newAccountBank.shabaNumber}
                                onChange={(e) => {
                                    const newValue = e.target.value;
                                    setNewAccountBank({ ...newAccountBank, shabaNumber: newValue })
                                }
                            }

                            />
                        </Grid>
                    </Grid>
                    <Spacer y={1} />
                    <Grid item xs={10}>{" "}</Grid>
                    <Grid item xs={2}>
                        <Button
                            onClick={handleSaveAccountBank}
                            color="success"
                        >
                            <Text size={14} color="white">
                                {txtButton}
                            </Text>

                        </Button>
                    </Grid>
                </Grid>
                <Row justify="space-between" mt={5}>
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
            </Container >

        </div >
    )
}


export default PartyBankAccount;