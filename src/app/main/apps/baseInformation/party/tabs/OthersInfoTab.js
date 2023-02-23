import { AccountCircle, CheckBox } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  FormGroup,
  Checkbox,
  Container,
  MenuItem,
  Divider,
  Typography,
} from '@mui/material';
import { Button, Row, Spacer, Text, Textarea } from '@nextui-org/react';
import { useMemo, useRef, useState, useEffect } from 'react';
import { useFormContext, Controller, useForm, useFieldArray } from 'react-hook-form';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persianFa from 'react-date-object/locales/persian_fa';
import InputIcon from 'react-multi-date-picker/components/input_icon';
import Select from 'react-select';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { fetchCityList, fetchProvinceList } from '../../store/locationSlice';
import "../../../../../../styles/MyStyles.css"

const styleDatePicker = {
  'text-align': 'right',
  padding: '4px 12px',
  'background-color': 'white',
  height: '36px',
  width: '266px',
};

const options = [
  { value: 0, label: 'تهران' },
  { value: 1, label: 'شیراز' },
  { value: 2, label: 'اصفهان' },
  { value: 3, label: 'مشهد' },
];

const propertyNameOptions = [
  { value: 'phoneNumber', label: 'شماره همراه' },
  { value: 'email', label: 'ایمیل' },
  { value: 'bankAccountNumber', label: 'شماره حساب' },
  { value: 'socialMedia', label: 'حساب شبکه های اجتماعی' },
];

const UserInformation = () => {

  const methods = useFormContext();
  const { control, formState, setValue, getValue, watch } = methods;
  const userInformation = watch('userInformation');
  const [userInfo, setUserInfo] = useState({});
  const [visible, setVisible] = useState(false);
  const gridRef = useRef();
  const gridStyleR = useMemo(() => ({ height: 200 }), []);
  const [rowData, setRowData] = useState([]);
  const [isUpdateDataGrid, setIsUpdateDataGrid] = useState(0);
  const [userInfoList, setUserInfoList] = useState([...userInformation]);
  const [isRtlSelect, setIsRtlSelect] = useState(true);
  const [responseUpdate, setResponseUpdate] = useState({});
 
  const handleSaveUserInfo = () => {
    setUserInfoList([...userInfoList, { ...userInfo }]);
    setIsUpdateDataGrid(isUpdateDataGrid + 1);
    setUserInfo({ propertyName: '', propertyValue: '' });
  };

  const handleDeleteUserInfo = (val) => {
    setUserInfoList((current) => {
      const newList = current.filter((item, index) => index !== val);
      return newList;
    });
  };

  function deleteUserInfo(e) {
    const tagItem = (
      <div>
        <Button size="md" onClick={() => handleDeleteUserInfo(e.rowIndex)} color="error" style={{marginTop:"8px"}}>
          <Text size={10}>حذف</Text>
        </Button>
      </div>
    );
    return tagItem;
  }

  const onGridReady = useEffect(() => {
    setValue('userInformation', userInfoList);
    setRowData([...userInfoList]);
  }, [userInfoList]);

  const [columnDefs] = useState([
    { field: 'propertyName', headerName: 'نوع اطلاعات', minWidth: 100 },
    { field: 'propertyValue', headerName: 'مقدار اطلاعات', minWidth: 180 },

    {
      Spacer:"1",
      field: 'delete',
      headerName: 'حذف',
      cellRenderer: deleteUserInfo,
      minWidth: 50,
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
    <Grid container flexWrap='nowrap' spacing={2} marginY="1rem" margin="auto">
      <Grid container item flexDirection='row'  sm={8}  className="ml-5" alignItems="flex-start" spacing={1} style={{paddingRight:"20px"}}>
        <Grid item xs={4} marginY="2px">
          <Select
            label="نام اطلاعات"
            inputId="propertyName"
            aria-labelledby="aria-label"
            className="basic-single"
            classNamePrefix="select"
            isRtl={isRtlSelect}
            options={propertyNameOptions}
            // value={propertyNameOptions.find((item) => item.value === userInfo.propertyName)}
            onChange={(e) => {
              setUserInfo({
                ...userInfo,
                propertyName: e.value,
              });
            }}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            className="mt-4 mb-4"
            required
            size="small"
            autoFocus
            name="propertyValue"
            id="propertyValue"
            variant="outlined"
            fullWidth
            label="مقدار اطلاعات"
            value={userInfo.propertyValue}
            onChange={(e) => {
              setUserInfo({
                ...userInfo,
                propertyValue: e.target.value,
              });
            }}
          />
        </Grid>

        <Grid item xs={4} marginY="10px" >
          <Button onClick={handleSaveUserInfo}>
            <Text className='ButtonZindex' size={14} color="black">
              ذخیره اطلاعات
            </Text>
          </Button>
        </Grid>


      </Grid>


        
      <Grid item sm={6} className="mr-4 mt-4" alignItems="center" spacing={1}>
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
      </Grid>
    </Grid>
  );
};

const OthersInfoTab = () => {
  const [cityValue, setCityValue] = useState({ value: 0, label: 'شهر' });
  const [provinceValue, setProvinceValue] = useState({ value: 0, label: 'استان' });

  const [isLegalTrue, setIsLegalTrue] = useState(false);
  const [isRtlSelect, setIsRtlSelect] = useState(true);
  const [newAddress, setNewAddress] = useState({});
  const [isUpdateGrid, setIsUpdateGrid] = useState('0');
  const gridRef = useRef();
  const gridStyleR = useMemo(() => ({ height: 400 }), []);
  const [visible, setVisible] = useState(false);
  const [rowData, setRowData] = useState();
  const [indexItem, setIndexItem] = useState(null);
  const [textButton, setTextButton] = useState('ذخیره آدرس');
  const methods = useFormContext();
  const { control, formState, setValue, getValue, watch } = methods;
  const userAddress = watch('userAddress')
  const [addressList, setAddressList] = useState([...userAddress]);
  const [cityList, setCityList] = useState([]);
  const [provinceList, setProvinceList] = useState([])
  const { loadingCity } = useSelector(({ baseInformation }) => baseInformation.locationSlice)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCityList())
      .unwrap()
      .then((res) => {
        setCityList([...res])
      })
  }, []);

  useEffect(() => {
    dispatch(fetchProvinceList())
      .unwrap()
      .then((res) => {
        setProvinceList([...res])
      })
  }, [])

  const handleDeleteAddress = (val) => {
    setAddressList((current) => {
      const newList = current.filter((item, index) => index !== val);
      return newList;
    });
    setIsUpdateGrid('updateGrid');
  };

  //  handle save Adress button
  const handleSaveAddress = () => {
    if (indexItem === null) {
      setAddressList([...addressList, newAddress]);
    } else {
      const updateAddressList = addressList.map((item, index) => {
        if (index === indexItem) {
          item = { ...newAddress };
        }
        return item;
      });
      setAddressList([...updateAddressList]);

      setIndexItem(null);
      setTextButton('ذخیره');
    }

    setNewAddress({ address: '', phone: '', phone2: '', postalCode: '', isMain: false });
  };

  function editAddress(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button
          color="success"
          size="sm"
          onClick={() => {
            setNewAddress(e.data);
            setIndexItem(e.rowIndex);
            setTextButton('ویرایش آدرس');
          }}
        >
          <Text size={12} color="white">
            ویرایش
          </Text>
        </Button>
      </div>
    );
    return tagItem;
  }

  function deleteAddress(e) {
    const tagItem = (
      <div>
        <Spacer y={0.5} />
        <Button color="error" size="sm" onClick={() => handleDeleteAddress(e.rowIndex)}>
          <Text size={12} color="white">
            حذف
          </Text>
        </Button>
      </div>
    );
    return tagItem;
  }

  const onGridReady = useEffect(() => {
    setRowData([...addressList]);
    setValue('userAddress', addressList);
  }, [addressList]);

  // Grid Options
  const [columnDefs] = useState([
    { field: 'province', headerName: 'استان', minWidth: 250 },
    { field: 'city', headerName: 'شهر', minWidth: 250 },
    { field: 'address', headerName: 'آدرس', minWidth: 250 },
    { field: 'phone', headerName: 'شماره تلفن', minWidth: 120 },
    { field: 'phone2', headerName: 'شماره تلفن 2', minWidth: 130 },
    { field: 'postalCode', headerName: 'کدپستی', minWidth: 120 },
    { field: 'isMain', headerName: 'آدرس اصلی', minWidth: 120 },
    {
      field: 'edit',
      headerName: 'ویرایش آدرس',
      cellRenderer: editAddress,
      minWidth: 120,
    },
    {
      field: 'delete',
      headerName: 'حذف آدرس',
      cellRenderer: deleteAddress,
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

  // end grid options

  return (
    <div>
      <Container>
        <Grid
          container
          className="mb-16 mt-4"
          sm={12}
          spacing={1}
          sx={{ margin: 'auto' }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid container item sm={12} justifyContent="left" alignItems="center" spacing={2}>

            {/* <Grid item xs={12} sm={3}>
              <Controller
                name="identitySerialNumber"
                defaultValue=""
                // error={!!errors.type}
                // helperText={errors?.type?.message}
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mt-8 mb-8"
                    required
                    size="small"
                    autoFocus
                    name="identitySerialNumber"
                    id="identitySerialNumber"
                    variant="outlined"
                    fullWidth
                    label="شماره شناسنامه"
                  />
                )}
              />
            </Grid> */}

            <Grid item xs={12} md={3}>
              <Controller
                name="gender"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    fullWidth
                    size="small"
                    variant="outlined"
                    label="جنسیت"
                  >
                    <MenuItem key="Male" value={0}>
                      آقا
                    </MenuItem>
                    <MenuItem key="Female" value={1}>
                      خانم
                    </MenuItem>
                  </TextField>
                )}
              />
            </Grid>

            <Spacer y={1.5} />
          </Grid>
          <hr />
          <Spacer y={1} />
          <Grid item xs={12}>
            <Divider
              variant="fullWidth"
              textAlign="left"
              component="li"
              sx={{ borderBottomWidth: 8, color: 'black', fontWeight: "600" }}
            >
              <Text size={18}> اطلاعات جانبی</Text>
            </Divider>
          </Grid>
          <Spacer y={0} />
          <UserInformation />
          <Spacer y={0} />
          <Grid item xs={12}>
            <Divider
              variant="fullWidth"
              textAlign="left"
              component="li"
              sx={{ borderBottomWidth: 8, color: 'black', fontWeight: "600" }}
            >
              <Text size={18}> اطلاعات آدرس</Text>
            </Divider>
          </Grid>

          <Spacer y={1} />


          <Grid container item row sm={12} justifyContent="left" alignItems="center" spacing={1}>
            <Grid item xs={12} sm={4}>
              <Select
                placeholder="استان"
                inputId="placeOfIssueRef"
                aria-labelledby="aria-label"
                className="basic-single rtl"
                classNamePrefix="select"
                style={{ width: '300px', direction: "rtl" }}
                isRtl={isRtlSelect}
                options={provinceList}
                value={provinceValue}
                onChange={(e) => {
                  setProvinceValue(e)
                  
                }
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                
                placeholder="شهر"
                inputId="placeOfIssueRef"
                aria-labelledby="aria-label"
                className="basic-single rtl"
                classNamePrefix="select"
                style={{ width: '300px', direction: "rtl"}}
                isRtl={isRtlSelect}
                options={cityList}
                value={cityValue}
                onChange={(e) => {
                  setCityValue(e)
                  setNewAddress({
                    ...newAddress,
                    locationId: e.target.value,
                    // city: e.target.label

                  });
                }
                }
              />

            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                className="mt-8 mb-8"
                required
                fullWidth
                name="phone"
                id="phone"
                type="text"
                size="small"
                label="تلفن"
                variant="outlined"
                value={newAddress.phone}
                onChange={(e) => {
                  setNewAddress({
                    ...newAddress,
                    phone: e.target.value,
                  });
                }}
              />
              {/* )}
                            /> */}
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                className="mt-8 mb-8"
                required
                fullWidth
                name="Phone2"
                id="phone2"
                type="text"
                size="small"
                label=" 2 تلفن"
                variant="outlined"
                value={newAddress.phone2}
                onChange={(e) => {
                  setNewAddress({
                    ...newAddress,
                    phone2: e.target.value,
                  });
                }}
              />
              {/* )}
                         /> */}
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                className="mt-8 mb-8"
                required
                fullWidth
                id="postalCode"
                type="text"
                size="small"
                label="کدپستی"
                variant="outlined"
                value={newAddress.postalCode}
                onChange={(e) => {
                  setNewAddress({
                    ...newAddress,
                    postalCode: e.target.value,
                  });
                }}
              />
            </Grid>
          </Grid>
          <Grid container item row sm={12} justifyContent="left" alignItems="center" spacing={1}>
            <Grid item xs={12} sm={8}>
              <TextField
                className="mt-8 mb-8"
                required
                fullWidth
                id="address"
                type="text"
                size="small"
                label="آدرس"
                variant="outlined"
                value={newAddress.address}
                onChange={(e) => {
                  setNewAddress({
                    ...newAddress,
                    address: e.target.value,
                  });
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              label="آدرس اصلی"
              control={
                <Checkbox
                  checked={newAddress.isMain}
                  onChange={(e) =>
                    setNewAddress({
                      ...newAddress,
                      isMain: e.target.checked,
                    })
                  }
                />
              }
            />
          </Grid>

          <Grid item xs={4}>
            <Button onClick={handleSaveAddress}>
              <Text size={14}  >ذخیره آدرس</Text>
              {/* {textButton}
              </Text> */}
            </Button>
          </Grid>
        </Grid>
        <Row justify="space-between" mt={5}>
          <FuseScrollbars className="grow overflow-x-auto">
            <div style={gridStyleR} className="ag-theme-alpine">
              <AgGridReact
                ref={gridRef}
                rowData={addressList}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                gridOptions={gridOptions}
                rowSelection="single"
                onGridReady={onGridReady}
              />
            </div>
          </FuseScrollbars>
        </Row>
      </Container>
    </div>
  );
};

export default OthersInfoTab;
