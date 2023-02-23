// import Label from '@mui/icons-material/Label';
// import { Button } from '@mui/material';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { CssBaseline, css, Modal, Button, Text, Input, Row } from '@nextui-org/react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseLoading from '@fuse/core/FuseLoading';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import { apiUrlDeleteRole, apiUrlGetRoleItems } from 'app/services/jwtService/defaultValues';
import TextField from '@mui/material/TextField';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
];
const options = ['گزینه 1', 'گزینه 2'];

const SwpModal = () => {
  const [showModalSwp, setShowModalSwp] = useState(false);
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const [rowDataR, setRowDataR] = useState([]);
  const [loadingR, setLoadingr] = useState(true);
  const [roleId, setRoleId] = useState(0);
  const [responseRo, setResponseRo] = useState([]);

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  const onGridReadyd = useEffect(() => {
    axios
      .get(apiUrlGetRoleItems)
      .then((resp) => {
        setRowDataR([...resp.data.result]);
        setLoadingr(false);
      })
      .catch((err) => {
        console.log('Error in Get Userslist', err);
      });
  }, [responseRo]);
  const gridRefr = useRef();
  const gridStyleR = useMemo(() => ({ height: 400 }), []);
  const defaultColDefR = useMemo(() => {
    return {
      // flex: 1,
      minWidth: 70,
      sortable: true,
      filter: true,
    };
  }, []);
  const gridOptionsR = {
    columnDefs: defaultColDefR,
    rowData: null,
    enableRtl: true,
    scroll: true,
    defaultColDef: {
      editable: true,
      sortable: true,
      //  flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
    },
  };
  function manageRole(e) {
    const tagItem = (
      <div>
        <Button size="lg">ویرایش</Button>
      </div>
    );
    return tagItem;
  }
  function UsersInRole(e) {
    const tagItem = (
      <div>
        {/* <NavLink to={`swpUsersInRole/${e.value}`}> */}
        {/* <Button
          // component={Link}
          //   to=
          color="info"
        >
          مشاهده و تغییر لیست اعضاء
        </Button> */}
        <Button auto flat color="succes">
          مشاهده و تغییر لیست اعضاء
        </Button>
        {/* </NavLink> */}
      </div>
    );
    return tagItem;
  }
  const [columnDefs] = useState([
    {
      field: 'name',
      headerName: 'نام نقش',
      maxWidth: 100,
    },
    {
      field: 'usersCount',
      headerName: 'تعداد اعضا',
      maxWidth: 111,
    },
    {
      field: 'id',
      headerName: 'مدیریت نقش',
      cellRenderer: manageRole,
      minWidth: 200,
    },
    {
      field: 'id',
      headerName: 'مدیریت اعضای نقش',
      cellRenderer: UsersInRole,
      minWidth: 200,
    },
    {
      field: 'id',
      headerName: 'مدیریت دسترسی پویای نقش',
      // cellRenderer: DynamicAccessToRole,
      minWidth: 200,
    },
  ]);

  return (
    <>
      <Button auto shadow onClick={handler} size="lg">
        Open modal
      </Button>
      <Modal
        scroll
        closeButton
        aria-labelledby="اضافه کردن نقش"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            خوش آمدید
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
            <div>{`inputValue: '${inputValue}'`}</div>
            <br />
          
          </div>

          <Input clearable bordered fullWidth color="primary" size="lg" placeholder="Email" />
          <Input clearable bordered fullWidth color="primary" size="lg" placeholder="Password" />
          <Row justify="space-between">
            <FuseScrollbars className="grow overflow-x-auto">
              <div style={gridStyleR} className="ag-theme-alpine">
                <AgGridReact
                  ref={gridRefr}
                  rowData={rowDataR}
                  columnDefs={columnDefs}
                  defaultColDef={defaultColDefR}
                  gridOptions={gridOptionsR}
                  rowSelection="single"
                  onGridReady={onGridReadyd}
                />
              </div>
            </FuseScrollbars>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler} size="xl">
            بستن
          </Button>
          <Button auto onClick={closeHandler} size="lg">
            ذخیره
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <Button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModalSwp(true)}
      >
        Fill Details
      </Button> */}
      {/* <Button
        onClick={() => {
          setShowModalSwp(true);
        }}
        className="normal-case"
        variant="contained"
        color="secondary"
        role="button"
      >
        <span className="mx-4"> Fill Details</span>
      </Button>
      {showModalSwp ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="flex w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">General Info</h3>
                  <Button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModalSwp(false)}
                  >
                    انصراف
                  </Button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <Label className="block text-black text-sm font-bold mb-1">First Name</Label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <Label className="block text-black text-sm font-bold mb-1">Last Name</Label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <Label className="block text-black text-sm font-bold mb-1">Address</Label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <Label className="block text-black text-sm font-bold mb-1">City</Label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModalSwp(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModalSwp(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null} */}
    </>
  );
};

export default SwpModal;
