import { AccountCircle, CheckBox } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  TextField,
  Checkbox,
  Container,
  MenuItem,
  Divider,
  Typography,
} from '@mui/material';
import { Button, Row, Spacer, Text, Textarea } from '@nextui-org/react';
import { useMemo, useRef, useState, useEffect, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Select from 'react-select';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { fetchCityList, fetchProvinceList } from '../../store/locationSlice';
import '../../../../../../styles/MyStyles.css';

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

//   // Paginaton--------------------
//   const onFirstDataRendered = useCallback(() => {
//     gridRef.current.api.paginationGoToPage(1);
//   }, []);

//   const paginationNumberFormatter = useCallback((params) => {
//     return `${params.value.toLocaleString()}`;
//   }, []);
//   // -------------------------------------

const AddressInfo = () => {
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
  const userAddress = watch('userAddress');
  const [addressList, setAddressList] = useState([...userAddress]);
  const [cityList, setCityList] = useState([]);
  const [provinceList, setProvinceList] = useState([]);
  const { loadingCity } = useSelector(({ baseInformation }) => baseInformation.locationSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCityList())
      .unwrap()
      .then((res) => {
        setCityList([...res]);
      });
  }, []);

  useEffect(() => {
    dispatch(fetchProvinceList())
      .unwrap()
      .then((res) => {
        setProvinceList([...res]);
      });
  }, []);

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
          <Grid container item sm={12} justifyContent="left" alignItems="center" spacing={2}>
          <Spacer y={0.5} />
          <Grid item xs={12}>
            <Divider
              variant="fullWidth"
              textAlign="left"
              component="li"
              sx={{ borderBottomWidth: 8, color: 'black', fontWeight: '600' }}
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
                style={{ width: '300px', direction: 'rtl' }}
                isRtl={isRtlSelect}
                options={provinceList}
                value={provinceValue}
                onChange={(e) => {
                  setProvinceValue(e);
                  // setNewAddress({
                  //   ...newAddress,
                  //   province: e.target.label,

                  // });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                placeholder="شهر"
                inputId="placeOfIssueRef"
                aria-labelledby="aria-label"
                className="basic-single rtl"
                classNamePrefix="select"
                style={{ width: '300px', direction: 'rtl' }}
                isRtl={isRtlSelect}
                options={cityList}
                value={cityValue}
                onChange={(e) => {
                  setCityValue(e);
                  setNewAddress({
                    ...newAddress,
                    locationId: e.target.value,
                    // city: e.target.label
                  });
                }}
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
                label="تلفن 2"
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
              <Text size={14}>ذخیره آدرس</Text>
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

export default AddressInfo;
