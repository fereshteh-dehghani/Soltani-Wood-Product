import { useEffect, useState } from 'react';
import { FormGroup, Grid, InputLabel, TextField } from '@mui/material';
import { Button, Modal, Spacer, Text } from '@nextui-org/react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'app/store/fuse/messageSlice';
import { fetchPartyGroup, fetchPartyGroupList, updatePartyGroup } from '../store/partyGroupSlice';

const styleInput = {
    '&.muirtl-1sf6gop-MuiFormLabel-root-MuiInputLabel-root': {
        direction: 'rtl',
        float: 'right',
        fontSize: '15px',
        color: '#222',
    },
};

const styleInputBorder = {
    '&.muirtl-10vdeej-MuiInputBase-input-MuiOutlinedInput-input': {
        color: '#000',
        border: '1px solid grey',
        'border-radius': '5px',
    },
};
const styleBtn = {
    'font-size': '14px',
};

const UpdatePartyGroup = ({ modalOpen, partyGroupId, closeModal }) => {
    const [newPartyGroup, setNewPartyGroup] = useState({});
    const [selectedOption, setSelectedOption] = useState({ value: null, label: '' });
    const { response, data, partyGroupChildList } = useSelector(({ baseInformation }) => baseInformation.partyGroupSlice);
    const [parentPartyList, setParentPartyList] = useState([]);

    const dispatch = useDispatch();
    /* Get Party Group */
    useEffect(() => {
        dispatch(fetchPartyGroup(partyGroupId))
            .unwrap()
            .then((res) => {
                setNewPartyGroup({ ...res })
            })
            .catch((err) => {
                dispatch(
                    showMessage({
                        message: 'خطا در گرفتن اطلاعات', // text or html
                        autoHideDuration: 6000, // ms
                        anchorOrigin: {
                            vertical: 'top', //   top bottom
                            horizontal: 'right', //  left center right
                        },
                        variant: 'error', //   success error info warning null
                    })
                );
            });
    }, [partyGroupId])
    /* Get Party Group List */
    useEffect(() => {
        dispatch(fetchPartyGroupList())
            .unwrap()
            .then((res) => {
                const options = [];
                res.forEach((item) => {
                    options.push({ label: item.title, value: item.partyGroupId })
                })

                setParentPartyList([...options]);
                const findParty = options.find((item) => item.value === newPartyGroup.parentGroupId);
                if (findParty !== undefined) {
                    setSelectedOption({ ...findParty })
                }

            })
    }, [newPartyGroup])

    const updatePartyGroupHandle = () => {
        dispatch(
            updatePartyGroup({
                ...newPartyGroup
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
                <Text size={18}>ویرایش گروه طرف حساب </Text>
            </Modal.Header>
            <Modal.Body css={{ '&.nextui-c-iDzHRq': { 'text-align': 'right' }, color: '#111' }}>
                <form>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
                            <FormGroup>
                                <InputLabel style={{color:"black" , fontWeight:"500" }}>گروه طرف حساب والد</InputLabel>
                                <Select
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    name="partyGroupId"
                                    value={selectedOption}
                                    onChange={(e) => {
                                        setSelectedOption({ ...e });
                                        setNewPartyGroup({ ...newPartyGroup, parentGroupId: e.value });
                                    }}
                                    options={parentPartyList}
                                />
                            </FormGroup>
                        </Grid>
                        <Spacer y={1} />
                        <Grid item xs={12}>
                            <FormGroup>
                                <InputLabel style={{color:"black" , fontWeight:"500" }} htmlFor="code" sx={styleInput}>
                                    کد
                                </InputLabel>
                                <TextField
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
                                <InputLabel style={{color:"black"  , fontWeight:"500"}} htmlFor="label" sx={styleInput}>
                                    عنوان
                                </InputLabel>
                                <TextField
                                    sx={styleInputBorder}
                                    type="text"
                                    id="title"
                                    value={newPartyGroup.title}
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

            <Modal.Footer>
                <Grid container justifyContent='flex-end' sx={{ margin: 'auto' }}>
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
                                updatePartyGroupHandle();
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
export default UpdatePartyGroup;
