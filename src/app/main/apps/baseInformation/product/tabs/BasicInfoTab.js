import { useRef, useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { useFormContext, Controller, useForm } from 'react-hook-form';
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
  Container,
} from '@mui/material';
import { showMessage } from 'app/store/fuse/messageSlice';
import { Badge, Row, Button, Text } from '@nextui-org/react';
import Select from 'react-select';
import AddNewProductGroup from '../../product-group-list/addproductGroup';
import SubMeasurementUnit from '../subMeasurementUnits';
import AddNewUnit from '../../Units/addNewUnit';
import { addNewUnit, fetchUnitsList } from '../../store/unitsSlice';
import { fetchChildProductGroupList } from '../../store/productGroupListSlice';
import { addSubUnits, deleteSubUnits } from '../../store/productListSlice'

const styleDatePicker = {
  'z-index': '0'
};
const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    // const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isFocused ? '#FFF' : '#D9D9D9',
      color: '#222',
      // cursor: isFocused ? 'not-allowed' : 'default',
      opacity: '1',
    };
  },
};

const styleFormCtrl = {
  '& .muirtl-zbf72c-MuiFormControl-root': {
    float: 'right',
  },
};

const styleButton = {
  marginTop: '2rem',
  marginRight: '0px',
};

const styleBtn = {
  fontSize: '1.2rem',
};

function BasicInfoTab(props) {
  const methods = useFormContext();
  const { control, formState, setValue, getValue } = methods;
  const { errors } = formState;
  const { register, handleSubmit } = useForm();
  const [unitList, setUnitList] = useState([]);
  const { childGroupList, response: responseproductGroup } = useSelector(
    ({ baseInformation }) => baseInformation.productGroupListSlice
  );
  const [status, setStatus] = useState('default');
  const [isLoadingSelectProductGroup, setIsLoadingSelectProductGroup] = useState(true);
  const [isLoadingSelectUnit, setIsLoadingSelectUnit] = useState(true);
  const [isModalAddNewProductGroup, setIsModalAddNewProductGroup] = useState(false);
  const [addNewUnitModalOpen, setAddNewUnitModalOpen] = useState(false);
  const [isModalSubMeasureUnit, setIsModalSubMeasureUnit] = useState(false);
  const [subUnitList, setSubUnitList] = useState([...props.subMeasureUnit]);
  const [rowDataSubUnitList, setRowDataSubunitList] = useState([...subUnitList]);

  const [image, setImage] = useState('');
  const unitsData = useSelector(({ baseInformation }) => baseInformation.unitsSlice.data);
  const responseUnits = useSelector(({ baseInformation }) => baseInformation.unitsSlice.response);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChildProductGroupList());
    setIsLoadingSelectProductGroup(false);
  }, [responseproductGroup]);

  useEffect(async () => {
    dispatch(fetchUnitsList())
      .unwrap()
      .then((res) => {
        const arraynodes = [];
        res.forEach(function (element) {
          arraynodes.push({ value: element.unitId, label: element.title });
        });
        setUnitList(arraynodes);
        if (unitList !== undefined && unitList !== null && unitList !== {}) {
          setIsLoadingSelectUnit(false);
        }
      });
  }, [responseUnits]);

  const onGridReady = useEffect(() => {
    setRowDataSubunitList([...subUnitList]);
    dispatch(addSubUnits(subUnitList));
  }, [subUnitList]);

  const handleModal = () => {
    setIsModalSubMeasureUnit(false);
  };

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
      );

      return;
    }
    setSubUnitList([...subUnitList, newUnit]);
  };

  const onDeleteUnit = (unit) => {
    // item.unitId !== id &&
    console.log(subUnitList);
    const index = subUnitList.indexOf(unit);
    const newSubUnit = subUnitList.filter((sub) => sub !== unit);
    setSubUnitList(newSubUnit);
  };


  return (
    <Container>
      <Grid container className="mb-16 mt-4">
        {/* Add New ProductGroup */}
        <Grid item xs={2}>
          <Button
            css={{ 'background-color': '#06CCC9' }}
            style={styleButton}
            onClick={() => setIsModalAddNewProductGroup(true)}
          >
            <Text size={12}>گروه کالای جدید</Text>
          </Button>
        </Grid>
        {/* Add New Unit */}
        <Grid item xs={2}>
          <Button
            css={{ 'background-color': '#06CCC9' }}
            style={styleButton}
            width="100%"
            onClick={() => setAddNewUnitModalOpen(true)}
          >
            <Icon className="text-16" color="action">
              control_point
            </Icon>
            <Text size={12}>واحد جدید</Text>
          </Button>
        </Grid>
        {/* Add New SubMesurementUnit */}
        <Grid item xs={2}>
          <Button
            color="primary"
            id="subMeasurementUnits"
            onClick={() => setIsModalSubMeasureUnit(!isModalSubMeasureUnit)}
            style={styleButton}
          >
            <Text size={12}>واحدهای سنجش فرعی</Text>
          </Button>
        </Grid>
      </Grid>





      <Grid container justifyContent="start" mr="3" spacing={1}>
        <Grid item xs={3}>
          <Controller
            name="type"
            defaultValue={0}
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <FormLabel component="legend">نوع کالا</FormLabel>
                <RadioGroup
                  {...field}
                  className="mt-10"
                  row
                  name="type"
                  error={!!errors.type}
                  helperText={errors?.type?.message}
                  onChange={(event, value) => field.onChange(+value)}
                  value={field.value === '' ? 0 : field.value}
                >
                  <FormControlLabel control={<Radio />} label="کالا" value={0} />
                  <FormControlLabel control={<Radio />} label="خدمت" value={1} />
                </RadioGroup>
              </FormControl>
            )}
          />
        </Grid>

        <Grid xs={6} item className='mt-20'>
          <div>
            <Controller
              name="isActive"
              control={control}
              defaultValue={false}
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  className="mt-8 mb-16"
                  checked={value}
                  onChange={(event, newValue) => {
                    onChange(newValue);
                  }}
                  control={<Checkbox id="isActive" width="100%" />}
                  label="کالا فعال است"
                />
              )}
            />
          </div>
        </Grid>

        <Grid item xs={8}>
          <Controller
            name="title"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                className="mt-8 mb-16"
                error={!!errors.title}
                required
                helperText={errors?.title?.message}
                label="عنوان"
                autoFocus
                id="title"
                variant="outlined"
                fullWidth
                size='small'
                
              />
            )}
          />
        </Grid>

        <Grid item xs={2} className="" style={styleDatePicker}>
          <Controller
            name="code"
            defaultValue=""
            error={!!errors.type}
            helperText={errors?.type?.message}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                className="mt-8 mb-16"
                name="code"
                required
                fullWidth
                size="small"
                id="productCode"
                label="کد کالا"
                
              />
            )}
          />
        </Grid>



        <Grid item xs={3}>
          <InputLabel id="demo-simple-select-label">گروه کالا</InputLabel>
          <Controller
            name="productGroupProducts"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                labelId="demo-simple-select-label"
                //  label="گروه کالا"
                // components={{ Input: CustomSelectInput }}
                className="react-select mt-8 mb-16"
                classNamePrefix="react-select"
                tabindex="0"
                value={childGroupList.filter((c) => c.value === value[0])}
                onChange={(event) => {
                  onChange([event.value]);
                }}
                options={childGroupList}
                inline
                isLoading={isLoadingSelectProductGroup}
                
              // styles={colourStyles}
              />
            )}
          />
        </Grid>

        <Grid item xs={3}>
          <InputLabel id="demo-simple-select-label">واحد سنجش</InputLabel>
          <Controller
            name="unitId"
            control={control}
            defaultValue=""
            error={!!errors.type}
            helperText={errors?.type?.message}
            render={({ field: { onChange, value } }) => (
              <Select
                // components={{ Input: CustomSelectInput }}
                // {...field}
                label="واحد سنجش"
                className="react-select mt-8 mb-16"
                classNamePrefix="react-select"
                name="form-field-name"
                tabindex="0"
                value={unitList.find((unit) => unit.value === value)}
                options={unitList}
                //  styles={colourStyles}
                isLoading={isLoadingSelectUnit}
                onChange={(event) => {
                  onChange(event.value);
                }}
              />
            )}
          />
        </Grid>
                
        <Grid item xs={2} className="mt-20" style={styleDatePicker}>
          <Controller
            name="minimumAmount"
            defaultValue={0}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                className="mt-8 mb-16"
                name="minimumAmount"
                required
                fullWidth
                size="small"
                id="minimumAmount"
                label="حداقل موجودی"
                type="number"
                onChange={(event) => field.onChange(+event.target.value)}
               
              />
            )}
          />
        </Grid>

        <Grid item xs={2} className="mt-20" style={styleDatePicker}>
          <Controller
            name="maximumAmount"
            defaultValue={0}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                className="mt-8 mb-16"
                name="maximumAmount"
                required
                fullWidth
                size="small"
                width="70%"
                id="maximumAmount"
                label="حداکثر موجودی"
                type="number"
                onChange={(event) => field.onChange(+event.target.value)}
               
              />
            )}
          />
        </Grid>




        <Grid item xs={3} style={styleDatePicker}>
          <Controller
            name="taxPercent"
            defaultValue={0}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                className="mt-8 mb-16"
                name="taxPercent"
                required
                fullWidth
                size="small"
                id="taxPercent"
                label="درصد مالیات"
                onChange={(event) => field.onChange(+event.target.value)}
                
              />
            )}
          />
        </Grid>

        <Grid item xs={3} style={styleDatePicker}>
          <Controller
            name="dutyPercent"
            defaultValue={0}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                className="mt-8 mb-16"
                name="dutyPercent"
                required
                fullWidth
                type="number"
                size="small"
                id="dutyPercent"
                label="درصد عوارض"
                onChange={(event) => field.onChange(+event.target.value)}
                
              />
            )}
          />
        </Grid>


        <Grid item xs={12} style={styleDatePicker}>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">معاف از مالیات و عوارض</FormLabel>
            <FormControlLabel
              label="خرید"
              control={
                <Controller
                  control={control}
                  name="salePriceHasTaxAndDuty"
                  // defaultValue={false}
                  // defaultValue={[]}
                  render={({ field: { onChange, value } }) => (
                    <Checkbox
                      checked={value}
                      onChange={(event, newValue) => {
                        onChange(newValue);
                      }}
                    />
                    // }
                  )}
                />
              }
            />
            <FormControlLabel
              label="فروش"
              control={
                <Controller
                  control={control}
                  name="purchaseHasTaxAndDuty"
                  defaultValue={false}
                  render={({ field: { onChange, value } }) => (
                    <Checkbox
                      checked={value}
                      onChange={(event, newValue) => {
                        onChange(newValue);
                      }}
                    />
                  )}
                />
              }
            />
          </FormControl>
        </Grid>


        <Grid item xs={10}>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                className="mt-8 mb-16"
                id="description"
                label="توضیحات"
                type="text"
                multiline
                rows={5}
                variant="outlined"
                fullWidth
                
              />
            )}
          />
        </Grid>



      </Grid>

      {/* Modals */}
      <AddNewProductGroup
        modalOpen={isModalAddNewProductGroup}
        parentGroupList={childGroupList}
        closeModal={() => setIsModalAddNewProductGroup(false)}
      />
      <AddNewUnit
        modalOpen={addNewUnitModalOpen}
        handleClose={() => setAddNewUnitModalOpen(false)}
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
        handleClose={() => setIsModalSubMeasureUnit(false)}
      />
    </Container>
  );
}

export default BasicInfoTab;
