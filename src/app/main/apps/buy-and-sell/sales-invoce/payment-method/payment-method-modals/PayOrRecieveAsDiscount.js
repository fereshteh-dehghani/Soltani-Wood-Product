import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Modal, Button, Text } from "@nextui-org/react";
import Select from "react-select";
import FuseUtils from "@fuse/utils/FuseUtils";
import "../../../../../../../styles/MyStyles.css";
import { Box, Grid, InputLabel, TextField } from "@mui/material";
import {
  addToPaymentMethodsItems,
  findPaymentMethodData,
  updatePaymentMethodsItems,
} from "../../../store/paymentMethodsSlice";
import { handleModals } from "../../../store/handleModalsSlice";

const styleSaveBtn = {
  backgroundColor: "#153247",
  borderRadius: "5px",
  width: "48%",
  padding: "5px",
  paddingLeft: "50px",
  paddingRight: "50px",
};
const styleCancelBtn = {
  borderRadius: "5px",
  fontSize: "1.2rem",
  width: "48%",
  padding: "5px",
  paddingLeft: "50px",
  paddingRight: "50px",
};

const styleDiv = {
  "text-align": "right",
  width: "100%",
};

const defaultValue = {
  amount: "",
  description: "",
};

export default function PayOrReceiveAsDiscount({
  paymentMethodData,
  operationOptions,
  addCommas,
  convertPriceToNumber,
  removeNonNumeric,
}) {
  const { handleMethodDiscount } = useSelector(
    ({ buyAndSell }) => buyAndSell.handleModalsSlice
  );
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(findPaymentMethodData({}));
    dispatch(handleModals({ type: "discount", isOpen: false }));
  };

  const schema = yup.object().shape({
    amount: yup.number().required("لطفا مبلغ را وارد کنید!"),
  });

  const {
    register,
    reset,
    setValue,
    getValues,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const amount = watch("amount");
  const description = watch("description");

  const handleClick = (data) => {
    if (paymentMethodData?.id !== undefined) {
      dispatch(
        updatePaymentMethodsItems({
          ...paymentMethodData,
          ...data,
          description: `مبلغ ${amount} ریال تخفیف داده شد `,
        })
      );
    } else {
      dispatch(
        addToPaymentMethodsItems({
          id: FuseUtils.generateGUID(),
          paymentMethod: "discount",
          paymentMethodPer: "تخفیف",
          ...data,
          description: ` مبلغ ${amount}  ریال تخفیف داده شد`,
        })
      );
    }
    reset(defaultValue);
    dispatch(findPaymentMethodData({}));
  };

  useEffect(() => {
    if (paymentMethodData?.id !== undefined) reset(paymentMethodData);
  }, []);

  return (
    <Modal
      closeButton
      style={{ alignItems: "center", paddingTop: "0px" }}
      aria-labelledby="modal-title"
      width="40%"
      height="37%"
      open={handleMethodDiscount}
      onClose={closeHandler}>
      <Modal.Header
        style={{ backgroundColor: "#1B2330", width: "100%", padding: "2%" }}>
        <Text id="modal-title" size={18} color="#fff">
          پرداخت / دریافت به صورت تخفیف
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Box container component="form">
          <Grid
            style={styleDiv}
            container
            justifyContent="center"
            // marginX="10px"
            row>
            <Grid item xs={12} sm={12} width="400px" className="my-5">
              <InputLabel htmlFor="amount">مبلغ</InputLabel>
              <TextField
                required
                fullWidth
                size="small"
                name="amount"
                error={!!errors?.amount}
                helperText={errors?.amount?.message}
                value={addCommas(removeNonNumeric(amount))}
                onChange={(event) =>
                  setValue("amount", convertPriceToNumber(event.target.value))
                }
              />
            </Grid>
          </Grid>
        </Box>
      </Modal.Body>
      <Modal.Footer>
        <Button
          color="error"
          size={14}
          onPress={() => {
            dispatch(findPaymentMethodData({}));
            closeHandler();
          }}
          css={styleCancelBtn}>
          <Text color="#fff" size={16}>
            بستن
          </Text>
        </Button>
        <Button
          onPress={handleSubmit(handleClick)}
          size={16}
          css={styleSaveBtn}>
          <Text color="#fff" size={14}>
            ثبت
          </Text>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
