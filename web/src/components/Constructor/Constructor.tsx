import React, { useEffect, useState } from "react";
import { clear } from "../../service/slices/consoleSlice";
import { useAppDispatch, useSelector } from "../../service/redux/store";
import ConsoleController from "../../utils/console/console";
import Board from "../Board/Board";
import Console from "../Console/Console";
import Button from "../Links/Button/Button";
import style from "./Constructor.sass";
import { checkSolution, loadFile } from "../../service/slices/construcorSlice";
import { DEFAULT_FILE } from "../../service/API";

const Constructor = () => {
  const dispatch = useAppDispatch();
  const { isError } = useSelector(b => b.construcor);
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    dispatch(loadFile({ path: DEFAULT_FILE, init: true }));
  }, []);

  useEffect(() => {
    if (isError == true) {
      ConsoleController.log(dispatch, [
        ["red", "Error: "],
        ["", "Something went wrong, please reload page and try again"],
      ]);
    }
  }, [isError]);

  return (
    <div className={style["constructor-page"]}>
      <Board />
      <div className={style.constructor__input}>
        <input type="text" value={answer} onChange={e => setAnswer(e.target.value)} />
      </div>
      <nav className={style.constructor__nav}>
        <Button onClick={e => dispatch(checkSolution(answer))}>Проверить решение</Button>
        <Button>Создать задачу</Button>
        <Button>Расчитать оптимальное решение</Button>
      </nav>
      <Console />
      <Button onClick={() => dispatch(clear())}>Clear</Button>
    </div>
  );
};

export default Constructor;
