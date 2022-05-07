import Alert from "@mui/material/Alert/Alert";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { IAddTodoPayload, remove } from "../../service/slices/toastSlice";
import { useSelector } from "../../service/redux/store";

interface IToast {}

const Toast: FC<IToast> = () => {
  const toasts = useSelector(a => a.toasts);
  const dispatch = useDispatch();

  const removeHandler = useCallback(() => dispatch(remove({ id: toasts[0].id })), [toasts]);
  return toasts.length ? (
    <Snackbar open={true} autoHideDuration={toasts[0].timeout || 60000} onClose={removeHandler}>
      <Alert onClose={removeHandler} severity={toasts[0].type || "info"} sx={{ width: "100%" }}>
        {toasts[0].text}
      </Alert>
    </Snackbar>
  ) : null;
};

export default Toast;
