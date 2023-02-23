import { useEffect, useState } from 'react';
import { FormGroup, Grid, InputLabel, TextField } from '@mui/material';
import { Button, Modal, Spacer, Text } from '@nextui-org/react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'app/store/fuse/messageSlice';
import { addProductGroup } from '../store/productGroupListSlice';
import { addPartyGroup, fetchPartyGroupJustChildList, fetchPartyGroupList } from '../store/partyGroupSlice';
import "../../../../../styles/MyStyles.css"
// import {} from 

const styleInput = {
    '&.muirtl-1sf6gop-MuiFormLabel-root-MuiInputLabel-root': {
        direction: 'rtl',
        float: 'right',
        fontSize: '15px',
        color: 'black',
        zIndex: '0',
        
    },
};

const styleInputBorder = {
    '&.muirtl-10vdeej-MuiInputBase-input-MuiOutlinedInput-input': {
        color: 'black',
        border: '1px solid grey',
        'border-radius': '5px',
    },
};
const styleBtn = {
    'font-size': '14px',
};

const AddPartyGroup = ({ modalOpen, parentGroupList, closeModal }) => {
    const [newPartyGroup, setNewPartyGroup] = useState({title:'',code:'',parentGroupId:0});
    const [selectedOption, setSelectedOption] = useState({ value: '', label: '' });
    const [parentPartyList, setParentPartyList] = useState([]);

    const dispatch = useDispatch();
    const { response, data, partyGroupChildList } = useSelector(({ baseInformation }) => baseInformation.partyGroupSlice);

    useEffect(() => {
        dispatch(fetchPartyGroupList())
        .unwrap()
        .then((res)=>{
            const options = [];
            res.forEach((item) => {
              options.push({ label: item.title, value: item.partyGroupId })
            })
          
            setParentPartyList([...options]);
            
        })
    }, [response])


    const addPartyGroupHandle = () => {
        dispatch(
            addPartyGroup({
                title: newPartyGroup.title,
                hierarchyTitle: '',
                parentGroupId: newPartyGroup.parentGroupId,
                version: 1,
                code: newPartyGroup.code,
                childCodeLength: 0,
                hierarchyCode: 'string',
                hasChild: true,
            })
        )
            .unwrap()
            .then((res) => {
                if (res !== undefined && res.result && res.errors.length === 0) {
                    dispatch(
                        showMessage({
                            message: 'عملیات با موفقیت انجام شد', // text or html
                            autoHideDuration: 6000, // ms
                            anchorOrigin: {
                                vertical: 'top', //   top bottom
                                horizontal: 'right', //  left center right
                            },
                            variant: 'success', //   success error info warning null
                        })
                    );
                    closeModal();
                } else {
                    dispatch(
                        showMessage({
                            message: 'عملیات با خطا انجام شد', // text or html
                            autoHideDuration: 6000, // ms
                            anchorOrigin: {
                                vertical: 'top', //   top bottom
                                horizontal: 'right', //  left center right
                            },
                            variant: 'error', //   success error info warning null
                        })
                    );
                }
            })
            .catch((err) => {
                dispatch(
                    showMessage({
                        message: 'عملیات با خطا انجام شد', // text or html
                        autoHideDuration: 6000, // ms
                        anchorOrigin: {
                            vertical: 'top', //   top bottom
                            horizontal: 'right', //  left center right
                        },
                        variant: 'error', //   success error info warning null
                    })
                );
            });
    };

    return (
        <Modal
            style={{paddingTop:"0px"}}
            closeButton
            preventClose
            aria-labelledby="modal-title"
            open={modalOpen}
            onClose={closeModal}
            width="35%"
            heigth="65%"
        >
            <Modal.Header className='Modal-Header' >
                <Text size={18}>اضافه کردن گروه طرف حساب جدید</Text>
            </Modal.Header>
            <Modal.Body css={{ '&.nextui-c-iDzHRq': { 'text-align': 'right' }, color: '#111' }}>
                <form>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
                            <FormGroup>
                                <InputLabel style={{color:"black" , fontWeight:"bold"}} >گروه طرف حساب والد</InputLabel>
                                <Select
                                    className="react-select input-style"
                                    classNamePrefix="react-select"
                                    name="partyGroupId"
                                    onChange={(e) => {
                                        setNewPartyGroup({ ...newPartyGroup, parentGroupId: e.value });
                                    }}
                                    options={parentPartyList}
                                />
                            </FormGroup>
                        </Grid>
                        <Spacer y={1} />
                        <Grid item xs={12}>
                            <FormGroup>
                                <InputLabel style={{color:"black" , fontWeight:"bold"}} htmlFor="code" sx={styleInput}>
                                    کد
                                </InputLabel>
                                <TextField
                                    className='input-style'
                                    style={{color:"black" ,border:"1px solid black" , borderRadius:"5px" }}
                                    fullWidth
                                    required
                                    sx={styleInputBorder}
                                    id="code"
                                    value={newPartyGroup.code}
                                    onChange={(e) => setNewPartyGroup({ ...newPartyGroup, code: e.target.value })}
                                />
                            </FormGroup>
                        </Grid>
                        <Spacer y={1} />
                        <Grid item xs={12}>
                            <FormGroup>
                                <InputLabel style={{color:"black" , fontWeight:"bold"}} htmlFor="label" sx={styleInput}>
                                    عنوان
                                </InputLabel>
                                <TextField
                                    className='input-style'
                                    style={{color:"black" ,border:"1px solid black" , borderRadius:"5px" , textDecorationColor:"black" }}
                                    sx={styleInputBorder}
                                    type="text"
                                    id="title"
                                    defaultValue={newPartyGroup.title}
                                    onChange={(e) =>
                                        setNewPartyGroup({ ...newPartyGroup, title: e.target.value })
                                    }
                                />
                            </FormGroup>
                        </Grid>
                    </Grid>
                </form>
            </Modal.Body>
            <Spacer y={1} />

            <Modal.Footer item justify='flex-end'>
                <Grid container justifyContent='flex-end' >
                    <Grid item >
                        <Button css={styleBtn} color="secondary" outline onClick={() => closeModal()}>
                            انصراف
                        </Button>
                    </Grid>
                    <Grid item >
                        <Button
                            css={styleBtn}
                            color="primary"
                            onClick={() => {
                                addPartyGroupHandle();
                            }}
                        >
                            ذخیره
                        </Button>
                    </Grid>
                </Grid>
            </Modal.Footer>
        </Modal>
    );
};
export default AddPartyGroup;
