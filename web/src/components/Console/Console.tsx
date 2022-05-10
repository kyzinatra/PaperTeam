import React, {
  FC,
  FocusEvent,
  useEffect,
  useRef,
  MouseEvent,
  useState,
  KeyboardEvent,
} from "react";
import style from "./Console.sass";
import ConsoleLine from "./ConsoleLine/ConsoleLine";
import { useSelector, useAppDispatch } from "../../service/redux/store";
import ConsoleController from "../../utils/console/console";
import css from "../../sass/global.sass";
import { shift } from "../../service/slices/solutionSlice";

const Console: FC = () => {
  const log = useSelector(store => store.console);
  const dispatch = useAppDispatch();
  const [isFocus, setFocus] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [historyBack, setHistory] = useState<number>(0);

  const history = useSelector(s => s.history);
  const { padding, horiz, vert } = useSelector(s => s.construcor);
  const json = JSON.stringify({ horiz, vert, padding });
  const solution = useSelector(s => s.solution.solution);
  useEffect(() => {
    if (historyBack > 0 && historyBack <= history.length) {
      setInput(history[historyBack - 1]);
    } else setInput("");
  }, [historyBack]);

  function focusHandler(e: MouseEvent | FocusEvent) {
    setFocus(true);
  }
  function blurHander(e: FocusEvent) {
    setFocus(false);
  }

  function subbmitCommand(e: KeyboardEvent) {
    if (isFocus && e.key == "Enter") {
      if (input == "") return;
      ConsoleController.run(dispatch, input, json);
      setInput("");
      setHistory(0);
      return;
    }
    if (isFocus && e.key == "ArrowUp") {
      setHistory(a => (++a > history.length ? history.length : a));
    }
    if (isFocus && e.key == "ArrowDown") {
      setHistory(a => (--a < 0 ? 0 : a));
    }
  }

  function nextClick(e: MouseEvent) {
    e.stopPropagation();
    dispatch(shift());
  }

  return (
    <div
      className={style.console}
      onClick={focusHandler}
      onBlur={blurHander}
      onKeyDown={subbmitCommand}
    >
      {log.map(a => {
        return (
          <ConsoleLine prefix={a.prefix} key={a.id}>
            {a.data.map((b, i) => {
              return (
                <span key={i} className={css[b[0]]}>
                  {b[1]}
                </span>
              );
            })}
          </ConsoleLine>
        );
      })}
      {!!solution.length && (
        <ConsoleLine prefix={"📒"} className={style["console__input-wrapper"]}>
          <span>
            <span>{solution[0]}</span>
            <button className={style.console__next} onClick={nextClick}>
              ⏩
            </button>
          </span>
        </ConsoleLine>
      )}
      {isFocus && (
        <ConsoleLine prefix={"👉"} className={style["console__input-wrapper"]}>
          <input
            type="text"
            onChange={e => setInput(e.target.value)}
            value={input}
            className={style.console__input}
            autoFocus
          />
        </ConsoleLine>
      )}
    </div>
  );
};

export default Console;
