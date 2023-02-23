
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import withReducer from 'app/store/withReducer';
import reducer from '../store';
import MainInformation from './mainInformation';
import SubInformation from './subInformation';
import ProductImagesTab from './ProductImagesTab'
import ProductDifinationHeader from './productDifinationHeader';





function ProductDifinationForm(newProduct) {

    const [value, setValue] = React.useState('1');
    const [newproduct, setNewProduct] = useState();

    // setNewProduct({ ...newProduct, productSubUnits: [...subUnitList] })
    const handleSubmitForm = (data) => {
        setNewProduct(...data)
    }

    const handleSubmit = async () => {
        axios
            .post(apiUrlAddProduct, { ...newProduct })
            .then((respons) => {
                if (respons !== null && respons.status === 200) {
                    const resData = respons.data;
                    if (resData !== null && resData.status === 0) {
                        console.log('success')

                        setNewProduct({});
                    } else if (resData === null) {
                        console.log('success')

                        dispatch(showMessage({
                            message: 'فرایند ثبت کالا با موفقیت انجام شد', // text or html
                            autoHideDuration: 6000, // ms
                            anchorOrigin: {
                                vertical: 'top', //   top bottom
                                horizontal: 'right' //  left center right
                            },
                            variant: 'success' //   success error info warning null
                        }))

                    } else {
                        console.log('success')

                        dispatch(showMessage({
                            message: 'خطایی در فرایند ثبت کالا رخ داده است', // text or html
                            autoHideDuration: 6000, // ms
                            anchorOrigin: {
                                vertical: 'top', //   top bottom
                                horizontal: 'right' //  left center right
                            },
                            variant: 'error' //   success error info warning null
                        }))
                    }
                } else {

                    dispatch(showMessage({
                        message: 'خطایی در فرایند ثبت کالا رخ داده است', // text or html
                        autoHideDuration: 6000, // ms
                        anchorOrigin: {
                            vertical: 'top', //   top bottom
                            horizontal: 'right' //  left center right
                        },
                        variant: 'error' //   success error info warning null
                    }))

                }
            })
            .catch((erroere) => {
                console.log('success')
                dispatch(showMessage({
                    message: 'خطایی در فرایند ثبت کالا رخ داده است', // text or html
                    autoHideDuration: 6000, // ms
                    anchorOrigin: {
                        vertical: 'top', //   top bottom
                        horizontal: 'right' //  left center right
                    },
                    variant: 'error' //   success error info warning null
                }))
            });
        //  await submitForm(apiUrlAddProduct, { ...newProduct });
    }


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="اطلاعات اصلی" value="1" />
                        {/* <Tab label="تصاویر کالا" value="2" /> */}
                        <Tab label="اطلاعات فرعی" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1"><MainInformation handleSubmitForm={handleSubmitForm} /></TabPanel>
                {/* <TabPanel value="2"><ProductImagesTab/></TabPanel> */}
                <TabPanel value="2"><SubInformation /></TabPanel>
            </TabContext>
        </Box>
    );
}





const Root = styled(FusePageCarded)(({ theme }) => ({
    '& .FusePageCarded-header': {
        minHeight: 72,
        height: 72,
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            minHeight: 136,
            height: 136,
        },
    },
    '& .FusePageCarded-content': {
        display: 'flex',
    },
}));

// function ProductDifination() {

//     return <Root header={<ProductDifinationHeader />} content={<ProductDifinationForm />} innerScroll />;
// }



// export default withReducer('baseInformation', reducer)(ProductDifination);






