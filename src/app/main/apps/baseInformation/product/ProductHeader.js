import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { showMessage } from 'app/store/fuse/messageSlice';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import _ from '@lodash';
import { saveProduct, updateProduct } from '../store/productSlice';

function ProductHeader(props) {
  const dispatch = useDispatch();
  const methods = useFormContext();
  const { formState, watch, getValues, reset } = methods;

  const { isValid, dirtyFields } = formState;
  const featuredImageId = watch('featuredImageId');
  const images = watch('images');
  const name = watch('name');
  const theme = useTheme();
  const navigate = useNavigate();
  const product = useSelector(({ baseInformation }) => baseInformation.product);
  const subUnits = useSelector(({ baseInformation }) => baseInformation.productListSlice.subUnits);
  const routeParams = useParams();
  const { productId } = routeParams;
  const convertPriceToNumber = (price) => {
    if (price !== 0) {
      const numberArray = price.split(',')
      price = +numberArray.join('');
    }
    return price;
  };



  function handleSaveProduct(e) {
    e.preventDefault();
    const dataForm = {
      ...getValues(),
      salePrice: convertPriceToNumber(getValues().salePrice),
      purchaseLastPrice: convertPriceToNumber(getValues().purchaseLastPrice)
    };
    if (productId === "new") {
      dispatch(saveProduct({ ...dataForm, productSubUnits: [...subUnits] }))
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

    } else {
      dispatch(updateProduct({ ...dataForm, productSubUnits: [...subUnits] }))
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

    // .unwrap()
    // .then((res)=>{
    //   reset(product);
    // });
  }


  return (
    <div className="flex flex-1 w-full items-center justify-between">
      <div className="flex flex-col items-start max-w-full min-w-0">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          <Typography
            className="flex items-center sm:mb-12"
            component={Link}
            role="button"
            to="/apps/e-commerce/products"
            color="inherit"
          >
            <Icon className="text-20">
              {theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
            </Icon>
            <span className="hidden sm:flex mx-4 font-medium">محصولات</span>
          </Typography>
        </motion.div>

        <div className="flex items-center max-w-full">
          <motion.div
            className="hidden sm:flex"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 0.3 } }}
          >
            {images.length > 0 && featuredImageId ? (
              <img
                className="w-32 sm:w-48 rounded"
                src={_.find(images, { id: featuredImageId }).url}
                alt={name}
              />
            ) : (
              <img
                className="w-32 sm:w-48 rounded"
                src="assets/images/ecommerce/product-image-placeholder.png"
                alt={name}
              />
            )}
          </motion.div>
          <div className="flex flex-col min-w-0 mx-8 sm:mc-16">
            <motion.div initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.3 } }}>
              <Typography className="text-16 sm:text-20 truncate font-semibold">
                {name || 'محصول جدید'}
              </Typography>
              <Typography variant="caption" className="font-medium">
                جزئیات محصول
              </Typography>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="flex"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
      >
        <Button
          className="whitespace-nowrap mx-4"
          variant="contained"
          color="secondary"
          // onClick={handleRemoveProduct}
          startIcon={<Icon className="hidden sm:flex">delete</Icon>}
        >
          حذف
        </Button>
        <Button
          className="whitespace-nowrap mx-4"
          variant="contained"
          color="secondary"
          // disabled={_.isEmpty(dirtyFields) || !isValid}
          onClick={handleSaveProduct}
        >
          ذخیره
        </Button>
      </motion.div>
    </div>
  );
}

export default ProductHeader;
