import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';

function PricingTab(props) {
  const methods = useFormContext();
  const { control } = methods;

  return (
    <div>
      <Controller
        name="priceTaxExcl"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="قیمت بدون مالیات"
            id="priceTaxExcl"
            InputProps={{
              startAdornment: <InputAdornment position="end">تومان</InputAdornment>,
            }}
            type="number"
            variant="outlined"
            autoFocus
            fullWidth
          />
        )}
      />

      <Controller
        name="priceTaxIncl"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="قیمت با مالیات"
            id="priceTaxIncl"
            InputProps={{
              startAdornment: <InputAdornment position="end">تومان</InputAdornment>,
            }}
            type="number"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="taxRate"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="نرخ مالیات"
            id="taxRate"
            InputProps={{
              startAdornment: <InputAdornment position="end">تومان</InputAdornment>,
            }}
            type="number"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="comparedPrice"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="قیمت مقایسه ای"
            id="comparedPrice"
            InputProps={{
              startAdornment: <InputAdornment position="end">تومان</InputAdornment>,
            }}
            type="number"
            variant="outlined"
            fullWidth
            helperText="قیمت مقایسه را اضافه کنید تا در کنار قیمت واقعی نشان داده شود"
          />
        )}
      />
    </div>
  );
}

export default PricingTab;
