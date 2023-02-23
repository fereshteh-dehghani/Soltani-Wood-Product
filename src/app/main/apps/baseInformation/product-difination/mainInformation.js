import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { showMessage } from "app/store/fuse/messageSlice";
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
    Avatar,
} from "@mui/material";
import { Badge, Row, Button } from "@nextui-org/react";
import {
    apiUrlAddProduct,
} from "app/services/jwtService/defaultValues";
import clsx from 'clsx';
import FuseUtils from '@fuse/utils';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Box } from "@mui/system";
import AddNewProductGroup from "../product-group-list/addproductGroup";
import SubMeasurementUnit from "../product/subMeasurementUnits";
import AddNewUnit from "../Units/addNewUnit";
import { addNewUnit, fetchUnitsList } from '../store/unitsSlice'
import { fetchParentGroupList } from '../store/productGroupListSlice';


const styleFormCtrl = {
    '& .muirtl-zbf72c-MuiFormControl-root': {
        float: 'right'
    },
}

const styleBadge = {
    marginTop: "2rem",
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

const styleBtn = {
    fontSize: '1.2rem'
}


const MainInformation = (handleSubmitMainInfo) => {
    const dropzone = useRef();
    const [isModalSubMeasureUnit, setIsModalSubMeasureUnit] = useState(false);
    const [newProduct, setNewProduct] = useState({});
    const [unitList, setUnitList] = useState([]);
    const [subUnitList, setSubUnitList] = useState([]);
    const [rowDataSubUnitList, setRowDataSubunitList] = useState([...subUnitList]);
    const [isModalAddNewProductGroup, setIsModalAddNewProductGroup] = useState(false);
    // const [selectedProductGroup] = useState({});
    const [addNewUnitModalOpen, setAddNewUnitModalOpen] = useState(false);
    // const [newUnit1, setNewUnit1] = useState([]);
    // const [newProductGroupList, setNewproductGroupList] = useState();
    const [status, setStatus] = useState('default');
    const [isLoadingSelectProductGroup, setIsLoadingSelectProductGroup] = useState(true);
    const [isLoadingSelectUnit, setIsLoadingSelectUnit] = useState(true);
    const [image, setImage] = useState('');


    const dispatch = useDispatch();
    // const methods = ;



    const convertToBase64 = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result.toString());
        };
    };



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

    const onGridReady = useEffect(() => {
        setRowDataSubunitList([...subUnitList]);
    }, [subUnitList]);

    const handleModal = () => {
        setIsModalSubMeasureUnit(false);
    }

    const addSubMeasureUnit = (newUnit) => {
        if (subUnitList.includes(newUnit)) {
            dispatch(
                showMessage({
                    message: 'اطلاعات تکراری می باشد', // text or html
                    autoHideDuration: 5000, // ms
                    anchorOrigin: {
                        vertical: 'top', //   top bottom
                        horizontal: 'right', //  left center right
                    },
                    variant: 'error', //   success error info warning null
                })
            )

            return;
        }
        setSubUnitList([...subUnitList, newUnit]);
    }

    const onDeleteUnit = (unit) => {
        // item.unitId !== id &&
        console.log(subUnitList);
        const index = subUnitList.indexOf(unit);
        const newSubUnit = rowDataSubUnitList.filter((sub) => sub !== unit);
        setRowDataSubunitList(newSubUnit);

    };

    const { parentGroupList, response: responseproductGroup } = useSelector(({ baseInformation }) => baseInformation.productGroupListSlice);


    useEffect(() => {
        dispatch(fetchParentGroupList());
        setIsLoadingSelectProductGroup(false);
    }, [responseproductGroup]);

    const unitsData = useSelector(({ baseInformation }) => baseInformation.unitsSlice.data);
    const responseUnits = useSelector(({ baseInformation }) => baseInformation.unitsSlice.response);


    useEffect(async () => {
        dispatch(fetchUnitsList());
        const arraynodes = [];
        unitsData.forEach(function (element) {
            arraynodes.push({ value: element.unitId, label: element.title });
        });
        setUnitList(arraynodes);
        if (unitList !== undefined && unitList !== null && unitList !== {}) {
            setIsLoadingSelectUnit(false);
        }

    }, [responseUnits])

    // const {register,handleSubmit} = useForm();

  


    return (
        <>
            <Box component="form" noValidate sx={{ mt: 3 }} >
                <Grid>
                    <Card>
                        <CardContent sx={{ p: 5 }}>
                            <form
                                method="POST"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSubmit();
                                }}
                            // onKeyDown={(e) => EnterToTab(e)}

                            >
                                <Grid container direction="row" spacing={4} >
                                    <Grid item sm={12}>
                                        <FormControl sx={styleFormCtrl}>
                                            <FormLabel id="product-type">نوع کالا</FormLabel>
                                            <RadioGroup
                                                row
                                                aria-labelledby="product-type"
                                                name="product-type"
                                            >
                                                <FormControlLabel
                                                    value={0}
                                                    control={<Radio />} l
                                                    label="کالا"
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setNewProduct({ ...newProduct, type: e.target.value })
                                                        }
                                                    }}
                                                />
                                                <FormControlLabel
                                                    value={1}
                                                    control={<Radio />}
                                                    label="خدمت"
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setNewProduct({ ...newProduct, type: 1 })
                                                        }
                                                    }}
                                                />

                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid  item sm={8} sx={{ m: 3 }} xs={12}>
                                        <InputLabel id="product-title">عنوان</InputLabel>

                                        <TextField
                                            autoComplete="product-title"
                                            name="title"
                                            required
                                            fullWidth
                                            id="product-title"
                                            autoFocus
                                            size="small"
                                            value={newProduct.title}
                                            onChange={(e) => setNewProduct({ ...newProduct, Title: e.target.value })}
                                        />

                                    </Grid>
                                    <Grid item sm={6} mt={2} sx={{ m: 3 }} >

                                        <InputLabel shrink id="productGroup">
                                            گروه کالا
                                        </InputLabel>
                                        <Select
                                            // components={{ Input: CustomSelectInput }}
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            name="form-field-name"
                                            tabindex="0"
                                            onKeyDown={(e) => EnterToTab(e)}
                                            onChange={(e) => {
                                                setNewProduct({ ...newProduct, parentGroupProducts: [e.value] });
                                            }}
                                            options={parentGroupList}
                                            inline
                                            isLoading={isLoadingSelectProductGroup}

                                        />
                                    </Grid>

                                    <Grid
                                        item
                                        sm={1}
                                        xs={12}
                                        sx={{ m: 3 }}
                                    >
                                        <Badge
                                            css={{ 'background-color': '#06CCC9' }}
                                            style={styleBadge}
                                            onClick={() => setIsModalAddNewProductGroup(true)}
                                        >
                                            <Icon className="text-16" color="action">
                                                control_point
                                            </Icon>
                                        </Badge>
                                    </Grid>
                                    <Grid sm={2}>{" "}</Grid>
                                    <Grid item sm={4} sx={{ m: 3 }}>
                                        <InputLabel
                                            id="productUnitOfMeasurment"
                                        >
                                            واحد سنجش
                                        </InputLabel>
                                        <Select
                                            // components={{ Input: CustomSelectInput }}
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            name="form-field-name"
                                            tabindex="0"
                                            onKeyDown={(e) => EnterToTab(e)}
                                            onChange={(e) => {
                                                setNewProduct({ ...newProduct, unitId: e.value });
                                            }}
                                            options={unitList}
                                            isLoading={isLoadingSelectUnit}
                                        />

                                    </Grid>
                                    <Grid
                                        sm={1}
                                        sx={{ m: 3 }}
                                        xs={12}
                                    >
                                        <Badge
                                            css={{ 'background-color': '#06CCC9' }}
                                            style={styleBadge}
                                            onClick={() => setAddNewUnitModalOpen(true)}
                                        >
                                            <Icon className="text-16" color="action">
                                                control_point
                                            </Icon>
                                        </Badge>
                                    </Grid>
                                    <Grid sm={4} xs={12} >
                                        <InputLabel
                                            id="subMeasurementUnits">
                                            {"  "}
                                        </InputLabel>
                                        <Button
                                            color="primary"
                                            // className="default mb-2"
                                            id="subMeasurementUnits"
                                            onClick={() => setIsModalSubMeasureUnit(!isModalSubMeasureUnit)}
                                            style={styleButton}
                                        >
                                            واحدهای سنجش فرعی
                                        </Button>
                                    </Grid>
                                    <Grid xs={12} sm={6} sx={{ m: 3 }}>
                                        <InputLabel shrink htmlFor="productDiscription">
                                            توضیحات
                                        </InputLabel>
                                        <TextField
                                            // type="text"
                                            name="Description"
                                            required
                                            fullWidth
                                            size="small"
                                            id="productDiscription"
                                            value={newProduct.Description}
                                            onChange={(e) => setNewProduct({ ...newProduct, Description: e.target.value })}
                                        />
                                    </Grid>
                                    <Grid sm={2} sx={{ m: 3 }} xs={12}>
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
                                    </Grid>
                                    <Grid sm={2}>{" "}</Grid>
                                    <Grid sm={4} sx={{ m: 3 }}>
                                        <InputLabel shrink id="productTaxPercentage">
                                            درصد مالیات
                                        </InputLabel>
                                        <TextField
                                            required
                                            fullWidth
                                            size="small"
                                            id="productTaxPercentage"
                                            value={newProduct.TaxPercent}
                                            onChange={(e) => setNewProduct({ ...newProduct, TaxPercent: parseFloat(e.target.value) })}
                                        />
                                    </Grid>
                                    <Grid sm={4} sx={{ m: 3 }} xs={12}>
                                        <InputLabel shrink id="complicationsPercentage">
                                            درصد عوارض
                                        </InputLabel>
                                        <TextField
                                            required
                                            fullWidth
                                            size="small"
                                            id="complicationsPercentage"
                                        />
                                    </Grid>
                                    <Grid sm={2} >{" "}</Grid>
                                    <Grid sm={4} sx={{ m: 3 }} xs={12}>
                                        <InputLabel shrink id="productMinimumStock">
                                            حداقل موجودی
                                        </InputLabel>
                                        <TextField
                                            required
                                            fullWidth
                                            size="small"
                                            id="productMinimumStock"
                                            value={newProduct.MinimumAmount}
                                            onChange={(e) => setNewProduct({ ...newProduct, MinimumAmount: e.target.value })}
                                        />
                                    </Grid>

                                    <Grid sm={4} sx={{ m: 3 }} xs={12} >
                                        <InputLabel shrink id="productMaximumStock">
                                            حداکثر موجودی
                                        </InputLabel>
                                        <TextField
                                            required
                                            fullWidth
                                            size="small"
                                            id="productMaximumStock"
                                            value={newProduct.maximumAmount}
                                            onChange={(e) => setNewProduct({ ...newProduct, maximumAmount: e.target.value })}
                                        />

                                    </Grid>
                                    <Grid sm={4}>{" "}</Grid>
                                    <Grid sm={12} sx={{ m: 3 }} xs={12}>
                                        <FormControl component="fieldset" variant="standard">
                                            <FormLabel component="legend">معاف از مالیات و عوارض</FormLabel>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        //   value={newProduct.SalePriceHasTaxAndDuty}
                                                        onChange={(e) => setNewProduct({ ...newProduct, SalePriceHasTaxAndDuty: e.target.checked })}
                                                        checked={newProduct.SalePriceHasTaxAndDuty}
                                                        name="buy" />
                                                }
                                                label="خرید"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={newProduct.SalePriceHasTaxAndDuty}
                                                        onChange={(e) => setNewProduct({ ...newProduct, PurchaseHasTaxAndDuty: e.target.checked })}

                                                        name="sell" />
                                                }
                                                label="فروش"
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid sm={12} xs={12} sx={{ m: 3 }}>
                                        <div>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        id="producIsActive"
                                                        checked={newProduct.producIsActive}
                                                        onChange={(e) => setNewProduct({ ...newProduct, producIsActive: e.target.checked })}
                                                        name="producIsActive" />
                                                }
                                                label='کالا فعال است'
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xs={2} mt={3}>
                                        <Avatar
                                            // mt={8}
                                            alt="تصویر کالا"
                                            src={image}
                                            sx={{ width: 300, height: 200, borderRadius: 5 }}
                                            mb={8}
                                        />
                                    </Grid>
                                    <Grid item xs={12} mt={5}>
                                        <Button component="label" variant="outline">
                                            تصویر کالا
                                            <input
                                                accept="image/*"
                                                type="file"
                                                id="file"
                                                name="file"
                                                placeholder=""
                                                hidden
                                                // {...register('userImage')}
                                                onChange={(e) => {
                                                    if (e.target.files[0]) {
                                                        convertToBase64(e.target.files[0]);
                                                    } else {
                                                        setImage(Image);
                                                    }
                                                }}
                                            />
                                        </Button>
                                    </Grid>
                                    <Grid xs={12} sm={12}>{" "}</Grid>
                                </Grid>
                            </form>
                            <Grid container justifyContent="center" alignItems="center">
                                <Grid item sm={4} sx={{ m: 3 }} xs={12} alignItems="center">
                                    <Button
                                        css={styleBtn}
                                        fullWidth
                                        color="primary"
                                        onClick={(e) => {
                                            setStatus('processing');
                                            handleSubmit();
                                            setStatus('default');
                                        }}
                                    >
                                        ذخیره
                                    </Button>
                                </Grid>
                                <Grid item sm={4} sx={{ m: 3 }}>
                                    <Button
                                        color="error"
                                        css={styleBtn}
                                    >
                                        انصراف
                                    </Button>
                                </Grid>
                            </Grid>


                        </CardContent>
                    </Card>
                </Grid>
            </Box>
            <AddNewProductGroup
                modalOpen={isModalAddNewProductGroup}
                parentGroupList={parentGroupList}
                closeModal={() => setIsModalAddNewProductGroup(false)}
            />
            <SubMeasurementUnit
                modalSubMeasure={isModalSubMeasureUnit}
                handleSubModal={handleModal}
                handleClick={addSubMeasureUnit}
                unitListOptions={unitList}
                subUnitList={subUnitList}
                onGridReady={onGridReady}
                rowDataUnit={rowDataSubUnitList}
                onDeleteSubUnit={onDeleteUnit}
                handleClose={() => setIsModalSubMeasureUnit(false)} />

            <AddNewUnit
                modalOpen={addNewUnitModalOpen}
                handleClose={() => setAddNewUnitModalOpen(false)}
            //   handleSubmit={submitNewUnit}
            />

        </>

    )
}

export default MainInformation;