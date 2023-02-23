import React, { useState } from "react";
import { Modal, Button, Text } from "@nextui-org/react";
import Select from "react-select";
import '../../../../../../../styles/MyStyles.css'
import { Grid, MenuItem, TextField } from "@mui/material";

const styleSaveBtn = {
    backgroundColor: '#00d084',
    borderRadius: '5px',
    fontSize: '1.2rem',
    width: '20%',
    padding: '5px',
}
const styleCancelBtn = {
    borderRadius: '5px',
    fontSize: '1.2rem',
    width: '15%',
    padding: '5px',
}


export default function PayAndReceiveDirectlyFromBank(closeHandler, openModal) {

    return (
        <div>
            <Modal
                closeButton
                aria-labelledby="modal-title"
                width="40%"
                height="40%"
                open={openModal}
                onClose={() => closeHandler()}
            >
                <Modal.Header className="modal-header-style">
                    <Text id="modal-title" size={18}>
                        دریافت/پرداخت مستقیم از بانک
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Grid container justifyContent="center" marginX="10px" row>
                        <Grid item xs={12} sm={9} className="mx-24 mt-16 mb-5">
                            <TextField
                                select
                                fullWidth
                                size="small"
                                name="type"
                                label="نوع عملیات"
                            >
                                <MenuItem key="1" value={1}>
                                    دریافت
                                </MenuItem>
                                <MenuItem key="2" value={2}>
                                    پرداخت
                                </MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={9} className="mx-24 my-5">
                            <TextField
                                required
                                fullWidth
                                name="price"
                                id="price"
                                size="small"
                                label="مبلغ"
                            />
                        </Grid>
                        <Grid item xs={12} sm={9} className="mx-24 mt-16 mb-5">
                            <TextField
                                select
                                fullWidth
                                size="small"
                                name="type"
                                label="بانک"
                            >
                                <MenuItem key="1" value={1}>
                                    ملی
                                </MenuItem>
                                <MenuItem key="2" value={2}>
                                    ملت
                                </MenuItem>
                                <MenuItem key="1" value={1}>
                                    آینده
                                </MenuItem>
                                <MenuItem key="2" value={2}>
                                    شهر
                                </MenuItem>
                            </TextField>
                        </Grid>
                        {/* <Grid item xs={12} sm={9} className="mx-24 my-5">
                        <TextField
                                required
                                fullWidth
                                name="price"
                                id="price"
                                size="small"
                                label="مبلغ"
                            />
                        </Grid> */}
                        <Grid item xs={12} sm={9} className="mx-24 my-5">
                            <TextField
                                id="serialNumber"
                                type="text"
                                multiline
                                rows={2}
                                variant="outlined"
                                fullWidth
                                label="شماره رسید"
                            />
                        </Grid>
                        <Grid item xs={12} sm={9} className="mx-24 my-5">
                            <TextField
                                id="description"
                                label="توضیحات"
                                type="text"
                                multiline
                                rows={2}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                    </Grid>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="error" onPress={() => closeHandler()} css={styleCancelBtn}>
                        کنسل
                    </Button>
                    <Button onPress={() => closeHandler()} css={styleSaveBtn}>
                        ثبت
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
