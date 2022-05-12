import React, { useEffect, useState } from "react";
import { clear } from "../../service/slices/consoleSlice";
import { clear as clearsol } from "../../service/slices/solutionSlice";
import { useAppDispatch, useSelector } from "../../service/redux/store";
import ConsoleController from "../../utils/console/console";
import Board from "../Board/Board";
import Console from "../Console/Console";
import Button from "../Links/Button/Button";
import style from "./Constructor.sass";
import { DEFAULT_FILE } from "../../service/API";
import { checkSolution, loadFile, getSolution } from "../../service/slices/solutionSlice";
import { setTask } from "../../service/slices/construcorSlice";

const Constructor = () => {
  const dispatch = useAppDispatch();
  const isError = useSelector(b => b.solution.isError || b.construcor.isError);
  const state = useSelector(b => b.construcor);
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    dispatch(loadFile({ path: DEFAULT_FILE, init: true }));
  }, []);

  useEffect(() => {
    if (isError == true) {
      ConsoleController.log(
        dispatch,
        [
          ["red", "Error: "],
          ["", "Something went wrong, please reload page and try again"],
        ],
        "😨"
      );
    }
  }, [isError]);

  return (
    <div className={style["constructor-page"]}>
      <Board />
      <div className={style.constructor__input}>
        <input type="text" value={answer} onChange={e => setAnswer(e.target.value)} />
      </div>
      <nav className={style.constructor__nav}>
        <Button onClick={e => dispatch(checkSolution([answer, JSON.stringify(state)]))}>
          Проверить решение
        </Button>
        <Button onClick={e => dispatch(setTask(state.difficulty || 1))}>Получить задачу</Button>
        <Button onClick={e => dispatch(getSolution(JSON.stringify(state)))}>
          Расчитать оптимальное решение
        </Button>
      </nav>
      <Console />
      <Button
        className={style.constructor__clear}
        onClick={() => {
          dispatch(clear());
          dispatch(clearsol());
        }}
      >
        Clear
      </Button>
    </div>
  );
};

export default Constructor;
