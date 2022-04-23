import React from "react";
import { useDispatch } from "react-redux";
import { uid } from "uid";
import { add } from "../../service/slices/toastSlice";

const Main = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() =>
          dispatch(add({ id: uid(), type: "error", text: uid(32) }))
        }
      >
        add toast
      </button>
    </div>
  );
};

export default Main;
