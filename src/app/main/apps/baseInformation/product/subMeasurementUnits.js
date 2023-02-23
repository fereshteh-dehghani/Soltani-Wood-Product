import React, { useState, useMemo, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Button, Modal, Spacer, Text } from '@nextui-org/react';
import { Card, CardContent, FormGroup, Grid, InputLabel, TextField } from '@mui/material';

const fontStyleBtn = {
  'font-size': '14px',
};
const styleButton = {
  'font-size': '14px',
  margin: 'auto',
  'z-index': '0',
};
const styleDatePicker = {
  'z-index': '0',
};

const SubMeasurementUnit = ({
  onDeleteSubUnit,
  onGridReady,
  rowDataUnit,
  modalSubMeasure,
  handleSubModal,
  handleClick,
  unitListOptions,
  handleClose,
}) => {
  const [newSubUnit, setNewSubUnit] = useState({ unitId: '', title: '', unitRatio: '' });
  const [modalAlertDelete, setModalAlertDelete] = useState(false);
  const [status, setStatus] = useState(false);
  const [selectItem, setSelectItem] = useState();
  const gridRef = useRef();

  const deleteRecord = (e) => {
    setSelectItem(e.data);
    setModalAlertDelete(true);
  };

  function deleteUnit(e) {
    const tagItem = (
      <div>
        <Spacer y={0.2} />
        <Button color="error" outline css={fontStyleBtn} onClick={() => deleteRecord(e)}>
          حذف
        </Button>
      </div>
    );
    return tagItem;
  }
  const [columnDefs] = useState([
    {
      headerName: 'عنوان',
      field: 'title',
    },
    {
      headerName: 'ضریب تبدبل',
      field: 'unitRatio',
    },
    {
      field: 'delete',
      headerName: 'حذف',
      cellRenderer: deleteUnit,
      minWidth: 50,
    },
  ]);
  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
  }));
  const cellClickedListener = useCallback((e) => console.log('cellClicked', e));
  const gridOptions = {
    columnDefs: defaultColDef,
    rowData: null,
    enableRtl: true,
    defaultColDef: {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
      cellStyle: { border: 'solid 0.1px gray' },
    },
  };
  return (
    <>
      <Modal style={{paddingTop:"0px"}} closeButton onClose={handleClose} open={modalSubMeasure} width="40%" height="70%">
        <Modal.Header className='Modal-Header' >
          <Text size={18}>واحد های سنجش فرعی</Text>
        </Modal.Header>
        <Modal.Body css={{ '&.nextui-c-iDzHRq': { 'text-align': 'right' }, color: '#111' }}>
          <Card>
            <CardContent>
              <form>
                <Grid conatainer rowSpacing={2} columnSpacing={5}>
                  <Grid item xs={12}>
                    <FormGroup>
                      <InputLabel htmlFor="productUnitOfMeasurment" sx={{ 'font-size': '13px' }}>
                        واحد اندازه گیری
                      </InputLabel>
                      <Select
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        value={{ value: newSubUnit.unitId, label: newSubUnit.title }}
                        onChange={(e) => {
                          setNewSubUnit({ ...newSubUnit, unitId: e.value, title: e.label });
                        }}
                        options={unitListOptions}
                      />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={12} sx={{ 'font-size': '13px' }}>
                    <Spacer y={1} />
                    <FormGroup>
                      <InputLabel style={styleDatePicker}  shrink htmlFor="ConversionFactor">
                        ضریب تبدیل
                      </InputLabel>
                      <TextField
                        id="ConversionFactor"
                        size="small"
                        value={newSubUnit.unitRatio}
                        onChange={(e) =>
                          setNewSubUnit({ ...newSubUnit, unitRatio: parseFloat(e.target.value) })
                        }
                      />
                    </FormGroup>
                  </Grid>{' '}
                  <Grid item xs={12} sx={{ mr: 6 }}>
                    <Spacer y={2} />
                    <Button
                      color="success"
                      css={styleButton}
                      onClick={() => {
                        handleClick(newSubUnit);
                        setNewSubUnit({ title: '', unitId: '', unitRatio: '' });
                      }}
                    >
                      ذخیره
                    </Button>
                  </Grid>
                </Grid>
              </form>
              <Grid item xs={12}>
                <Spacer y={2} />
                <div
                  className="ag-theme-alpine"
                  style={{ height: 200, width: '100%', alignItems: 'center' }}
                >
                  <AgGridReact
                    ref={gridRef}
                    rowData={rowDataUnit}
                    columnDefs={columnDefs}
                    gridOptions={gridOptions}
                    onGridReady={onGridReady}
                    onClicked={cellClickedListener}
                  />
                </div>
              </Grid>
            </CardContent>
          </Card>
        </Modal.Body>
        <Spacer y={1} />
        <Modal.Footer>
          <Button color="secondary" css={styleButton} onClick={handleSubModal}>
            انصراف
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal open={modalAlertDelete} closeButton onClose={() => setModalAlertDelete(false)}>
        <Modal.Body>
          <h3>آیا می خواهید اطلاعات را حذف کنید؟</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="error"
            css={fontStyleBtn}
            onClick={() => {
              onDeleteSubUnit(selectItem);
              setModalAlertDelete(false);
            }}
          >
            بلی
          </Button>{' '}
          <Button css={fontStyleBtn} color="warning" onClick={() => setModalAlertDelete(false)}>
            خیر
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SubMeasurementUnit;
