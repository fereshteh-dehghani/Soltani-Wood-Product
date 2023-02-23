import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';

function ShippingTab(props) {
  const methods = useFormContext();
  const { control } = methods;

  return (
    <div>
      <div className="flex -mx-4">
        <Controller
          name="width"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mt-8 mb-16 mx-4"
              label="عرض"
              autoFocus
              id="width"
              variant="outlined"
              fullWidth
            />
          )}
        />

        <Controller
          name="height"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mt-8 mb-16 mx-4"
              label="ارتفاع"
              id="height"
              variant="outlined"
              fullWidth
            />
          )}
        />

        <Controller
          name="depth"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mt-8 mb-16 mx-4"
              label="عمق"
              id="depth"
              variant="outlined"
              fullWidth
            />
          )}
        />
      </div>

      <Controller
        name="weight"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="وزن"
            id="weight"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="extraShippingFee"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="هزینه ارسال اضافی"
            id="extraShippingFee"
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="end">تومان</InputAdornment>,
            }}
            fullWidth
          />
        )}
      />
    </div>
  );
}

export default ShippingTab;
