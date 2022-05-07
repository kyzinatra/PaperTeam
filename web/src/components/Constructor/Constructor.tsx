import React from "react";
import { clear } from "../../service/slices/consoleSlice";
import { useAppDispatch } from "../../service/redux/store";
import ConsoleController from "../../utils/console/console";
import Board from "../Board/Board";
import Console from "../Console/Console";
import Button from "../Links/Button/Button";
import style from "./Constructor.sass";

const Constructor = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={style["constructor-page"]}>
      <Board />
      <Console />
      <Button onClick={() => dispatch(clear())}>Clear</Button>
    </div>
  );
};

export default Constructor;
