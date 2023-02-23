import InputAdornment from '@mui/material/InputAdornment';
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
  MenuItem,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

import { Controller, useFormContext } from 'react-hook-form';

function PricingTab(props) {

  const methods = useFormContext();
  const { control } = methods;

  const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Controller
            name="salePrice"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                className="mt-8 mb-16"
                label="قیمت فروش"
                id="salePrice"
                type="text"
                value={field.value}
                variant="outlined"
                onChange={(event) => {
                  const newValue = addCommas(removeNonNumeric(event.target.value))
                  field.onChange(newValue);
                }}
                autoFocus
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="purchaseLastPrice"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                className="mt-8 mb-16"
                label="آخرین قیمت خرید"
                id="purchaseLastPrice"
                variant="outlined"
                value={field.value}
                type="text"
                autoFocus
                fullWidth
                onChange={(event) => {
                  const newValue = addCommas(removeNonNumeric(event.target.value))
                  field.onChange(newValue);
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="barCode"
            // defaultValue=""
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                className="mt-8 mb-16"
                label="بارکد کالا"
                id="barCode"
                type="text"
                variant="outlined"
                autoFocus
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="dimension"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                className="mt-8 mb-16"
                label="ابعاد"
                id="dimension"
                type="text"
                // value={field.value}
                // onChange={(event) => field.onChange(+event.target.value)}
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Grid>


        <Grid item xs={6}>
        <Controller
                name="productOpeningCount"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mt-8 mb-16"
                    label="مقدار موجودی اولیه "
                    id="amountProduct"
                    type="text"
                    variant="outlined"
                    autoFocus
                    fullWidth
                    onChange={(e) => field.onChange(+e.target.value)}
                  />
                )}
              />
        </Grid>

        <Grid item xs={6}>
        <Controller
                name="productOpeningCount"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mt-8 mb-16"
                    label=" ارزش ریالی واحد "
                    id=""
                    type="text"
                    variant="outlined"
                    autoFocus
                    fullWidth
                    onChange={(e) => field.onChange(+e.target.value)}
                  />
                )}
              />
        </Grid>

      </Grid>




      {/* <Controller
        name="type"
        control={control}
        render={({ field: { value, onChange } }) => (
          <TextField
            required
            select
            fullWidth
            notched
            size="small"
            id="type"
            label="نوع کالا"
            onChange={(event, newValue) => {
              onChange(newValue.props.value);
            }}
          >
            <MenuItem value="دارو">دارو</MenuItem>
            <MenuItem value="دخانیات">دخانبات</MenuItem>
            <MenuItem value="موبایل">موبایل</MenuItem>
            <MenuItem value="لوازم خانگی برقی">لوازم خانگی برقی</MenuItem>
            <MenuItem value="قطعات مصرفی و یدکی وسایل نقلیه">قطعات مصرفی و یدکی وسایل نقلیه</MenuItem>
            <MenuItem value="فرآورده ها و مشتقات گازی و شیمیایی">فرآورده ها و مشتقات نفتی و گازی و شیمیایی</MenuItem>
            <MenuItem value="طلا اعم از شمش و مشکوکات و مصنوعات زینتی">طلا اعم از شمش,مشکوکات و مصنوعات زینتی</MenuItem>
            <MenuItem value="اسباب بازی">اسباب بازی</MenuItem>
            <MenuItem value="دام زنده,گوشت سفید و قرمز">دام زنده, گوشت سفید و قرمز</MenuItem>
            <MenuItem value="محصولات اساسی کشاورزی">محصولات اسای کشاورزی</MenuItem>
            <MenuItem value="سایر کالاها">سایر کالاها</MenuItem>
          </TextField>

        )}
      /> */}






    </div>
  );
}

export default PricingTab;
