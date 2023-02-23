import { useRef, useState, useEffect } from "react";
import axios from "axios";

import {

    InputLabel,
    FormControl,
    FormLabel,
    RadioGroup,
    Input,
    Checkbox,
    FormControlLabel,
    Radio,
    TextField,
    Icon,
    Grid,
    Card,
    CardContent,
} from "@mui/material";
import { Badge, Row, Button } from "@nextui-org/react";
import {
    apiUrlGetProductGroupSubGroupList,
    apiUrlGetUnitList,
    apiUrlAddProduct,
    apiUrlAddUnit,
    apiUrlAddProductGroup
} from "app/services/jwtService/defaultValues";
// const { default: Select } = require("react-select/dist/declarations/src/Select");
import Select from 'react-select';
import { Box } from "@mui/system";


const styleBadge = {
    marginTop: "4rem",
    marginRight: "0px",
    fontSize: '1.2rem',
    height: '30',
    width: '30',
}

const styleButton = {
    width: "50%",
    marginTop: "5rem",
    textAlign: 'center',
    fontSize: '1rem'
}


const SubInformation = () => {
    const [newProduct, setNewProduct] = useState({});
    const [status, setStatus] = useState('default');
    const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");


    const handleSubmit = async () => {
        //  e.preventDefault();
        setNewProduct({ ...newProduct })
        axios
            .post(apiUrlAddProductGroup, { ...newProduct })
            .then((response) => {
                if (response !== null && response.status === 200) {
                    const resData = response.data;
                    if (resData !== null && resData.status === 0) {
                        // NotificationManager.success(
                        //     "عملیات شما با موفقیت انجام شد",
                        //     " انجام شد",
                        //     4000,
                        //     null,
                        //     null,
                        //     ""
                        // );
                        console.log('err')
                        setNewProduct({});
                    } else if (resData === null) {
                        console.log('err')
                        // NotificationManager.error(
                        //     "عملیات با خطا انجام شد",
                        //     "خطا ",
                        //     3000,
                        //     null,
                        //     null,
                        //     ""
                        // )

                    } else {

                        console.log('err')
                    }
                } else {
                    console.log('err')
                    // NotificationManager.error(
                    //     "خطایی در فرایند عملیات رخ داده است",
                    //     "خطا ",
                    //     3000,
                    //     null,
                    //     null,
                    //     ""
                    // )

                }
            })
            .catch((erroere) => {
                console.log('err')
                // NotificationManager.error(
                //     erroere.message,
                //     "خطا ",
                //     3000,
                //     null,
                //     null,
                //     ""
                // );
            });
        //  await submitForm(apiUrlAddProduct, { ...newProduct });
    }


    function EnterToTab(event) {
        console.log(event.key)
        const key = event.which || event.key
        if (key === 13 || key === "Enter") {
            const { form } = event.target;
            console.log(event.target)
            const index = [...form].indexOf(event.target);
            console.log(index)
            form[index + 1].focus();
            event.preventDefault();
        }
    }










    return (
        <>
            <Box component="form" noValidate sx={{ mt: 3 }} >
                <Grid xs={12}>
                    <Card>
                        <CardContent>
                            <form
                                method="POST"
                                style={{ marginRight: 10 }}
                            // onKeyDown={(e) => EnterToTab(e)}
                            >
                                <Grid container direction="row" >
                                    <Grid item sm={12} sx={{ m: 3 }}>
                                        <FormControl component="fieldset" variant="standard">
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        //   value={newProduct.SalePriceHasTaxAndDuty}
                                                        value={newProduct.TracingOnPurchasePrice}
                                                        onChange={(e) => setNewProduct({ ...newProduct, TracingOnPurchasePrice: e.target.checked })}
                                                        name="buy"
                                                    />
                                                }
                                                label="موجودی کالا در سطح قیمت خرید نگه داری شود"
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item sm={4} sx={{ m: 3 }}>
                                        <InputLabel id="producBarcode">
                                            بارکد کالا
                                        </InputLabel>

                                        <TextField
                                            autoComplete="product-title"
                                            name="title"
                                            required
                                            fullWidth
                                            autoFocus
                                            size="small"
                                            id="producBarcode"
                                            value={newProduct.BarCode}
                                            onChange={(e) => setNewProduct({ ...newProduct, BarCode: e.target.value })}
                                        />

                                    </Grid>


                                    {/* <Grid sm={4}>{" "}</Grid> */}



                                    {/* <Grid sm={6} >
                                        <InputLabel shrink htmlFor="productIranCode">
                                            توضیحات
                                        </InputLabel>
                                        <TextField
                                            name="productIranCode"
                                            required
                                            fullWidth
                                            size="small"
                                            id="productIranCode"
                                            value={newProduct.IranCode}
                                            onChange={(e) => setNewProduct({ ...newProduct, IranCode: e.target.value })}

                                        />
                                    </Grid>
                                    <Grid sx={2} >
                                        <InputLabel shrink id="productCode">
                                            کدکالا
                                        </InputLabel>
                                        <TextField
                                            name="Code"
                                            required
                                            fullWidth
                                            size="small"
                                            id="productCode"
                                            value={newProduct.Code}
                                            onChange={(e) => setNewProduct({ ...newProduct, Code: e.target.value })}
                                        />
                                    </Grid> */}
                                    {/* <Grid sm={4}>{" "}</Grid> */}
                                    <Grid sm={4} sx={{ m: 3 }} mt={2}>
                                        <InputLabel shrink id="BarCode2d">
                                            بارکد 2بعدی
                                        </InputLabel>
                                        <TextField
                                            required
                                            fullWidth
                                            size="small"
                                            id="productBarcode2d"
                                            name="BarCode2d"
                                            value={newProduct.BarCode2d}
                                            onChange={(e) => setNewProduct({ ...newProduct, BarCode2d: e.target.value })}
                                        />
                                    </Grid>
                                    <Grid sm={6} sx={{ m: 3 }}>
                                        <InputLabel htmlFor="productTypes" shrink>
                                            نوع کالا
                                        </InputLabel>
                                        <TextField
                                            required
                                            select
                                            fullWidth
                                            notched
                                            size="small"
                                            id="productTypes"
                                            // inputProps={{
                                            //     id: "productTypes"
                                            // }}
                                            // value={valueBranch.id}

                                            value={newProduct.productType}
                                            onChange={(e) => setNewProduct({ ...newProduct, productType: e.value })}
                                        >
                                            <option>دارو</option>
                                            <option>دخانبات</option>
                                            <option>موبایل</option>
                                            <option>لوازم خانگی برقی</option>
                                            <option>قطعات مصرفی و یدکی وسایل نقلیه</option>
                                            <option>فرآورده ها و مشتقات نفتی و گازی و شیمیایی</option>
                                            <option>طلا اعم از شمش,مشکوکات و مصنوعات زینتی</option>
                                            <option>اسباب بازی</option>
                                            <option>دام زنده, گوشت سفید و قرمز</option>
                                            <option>محصولات اسای کشاورزی</option>
                                            <option>سایر کالاها</option>
                                        </TextField>
                                    </Grid>
                                    <Grid sm={4}>{" "}</Grid>
                                    <Grid sm={4} sx={{ m: 3 }}>

                                        <InputLabel shrink id="amountProduct">
                                            مقدار موجودی اول دوره
                                        </InputLabel>
                                        <TextField
                                            required
                                            fullWidth
                                            size="small"
                                            id="amountProduct"
                                            value={newProduct.amountStockOfFirstPeriod}
                                            onChange={(e) => setNewProduct({ ...newProduct, amountStockOfFirstPeriod: e.value })}
                                        />
                                    </Grid>

                                    <Grid sm={4} sx={{ m: 3 }}>
                                        <InputLabel shrink id="productMaximumStock">
                                            قیمت فروش
                                        </InputLabel>
                                        <TextField
                                            required
                                            fullWidth
                                            size="small"
                                            id="productSellPrice"
                                            value={newProduct.purchaseLastPrice}

                                            onChange={(event) => {
                                                const val = addCommas(removeNonNumeric(event.target.value));
                                                setNewProduct({ ...newProduct, purchaseLastPrice: val })
                                            }
                                            }
                                        />

                                    </Grid>

                                    {/* <Grid sm={4}>{" "}</Grid> */}
                                    <Grid sm={4} sx={{ m: 3 }} >
                                        <InputLabel shrink id="productLastOfPriceBuy">
                                            قیمت خرید
                                        </InputLabel>
                                        <TextField
                                            required
                                            fullWidth
                                            size="small"
                                            id="productLastOfPriceBuy"
                                            value={newProduct.saleLastPrice}
                                            onChange={(event) => {
                                                const val = addCommas(removeNonNumeric(event.target.value));
                                                setNewProduct({ ...newProduct, saleLastPrice: val })
                                            }
                                            }
                                        />

                                    </Grid>

                                </Grid>

                            </form>
                            <Grid container>
                                <Grid item sm={4} sx={{ m: 4 }} alignItems="center">
                                    <Button
                                        width="70%"
                                        color="primary"
                                        onClick={async (e) => {
                                            setStatus('processing');
                                            e.preventDefault();
                                            await handleSubmit();;

                                            setStatus('default');
                                        }}
                                    >
                                        ذخیره
                                    </Button>
                                </Grid>
                                <Grid item sm={4} sx={{ m: 4 }}>
                                    <Button
                                        color="error"
                                        width="30%"
                                    >
                                        انصراف
                                    </Button>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Box>

        </>

    )
}

export default SubInformation;