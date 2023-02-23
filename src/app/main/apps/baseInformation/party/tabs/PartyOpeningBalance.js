import { AccountCircle, CheckBox } from "@mui/icons-material";
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, FormGroup, Checkbox, Container, MenuItem } from "@mui/material";
import { useState } from "react";
import { useFormContext, Controller, useForm } from 'react-hook-form';




const PartyOpeningBalance = () => {


    // handle for legal customer 

    const methods = useFormContext();
    const { control, formState, setValue, getValue } = methods;

    const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");


    return (
        <div>
            <Grid container className="mb-16 mt-4" sm={12} spacing={1} sx={{ margin: "auto" }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid container item xs={12} justifyContent="flex-start" alignItems="center" spacing={1}>

                <Grid item sx={12} sm={3}>
                        <Controller
                            name="partyOpeningBalance.openingBalanceType"
                            defaultValue={0}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    select
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                    label="نوع مانده حساب"
                                >
                                    <MenuItem key="0" value={0}>
                                        بدهکار
                                    </MenuItem>
                                    <MenuItem key="1" value={1}>
                                        بستانکار
                                    </MenuItem>
                                </TextField>
                            )}
                        />
                    </Grid>

                    <Grid container item xs={12} sm={3}>
                        <Controller
                            name="partyOpeningBalance.openingBalance"
                            defaultValue={0}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    className="mt-8 mb-8"
                                    required
                                    fullWidth
                                    type="text"
                                    size="small"
                                    label="مانده حساب"
                                    variant="outlined"
                                    onChange={(event) => {
                                        const newValue = addCommas(removeNonNumeric(event.target.value));
                                        field.onChange(newValue)
                                    }}

                                />
                            )}
                        />
                    </Grid>

                </Grid>

            </Grid>



        </div >
    )
}


export default PartyOpeningBalance;