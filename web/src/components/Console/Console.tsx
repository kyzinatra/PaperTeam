import React, { FC, useEffect } from "react";
import style from "./Console.sass";
import ConsoleLine from "./ConsoleLine/ConsoleLine";
import { useSelector, useAppDispatch } from "../../service/types/redux/store";
import ConsoleController from "../../utils/console";
import css from "../../sass/global.sass";

const Console: FC = () => {
  const log = useSelector(store => store.console);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!log.length) ConsoleController.runConsole(dispatch);
  }, [log]);

  useEffect(() => {
    ConsoleController.log(dispatch, [["green", "Success!"]], true);
    ConsoleController.log(
      dispatch,
      [
        ["blue", "Success!"],
        ["", " try smth else! :D"],
      ],
      true
    );
  }, []);

  return (
    <div className={style.console}>
      {log.map(a => (
        <ConsoleLine prefix={a.prefix} key={a.id}>
          {a.data.map((b, i) => {
            return (
              <span key={i} className={css[b[0]]}>
                {b[1]}
              </span>
            );
          })}
        </ConsoleLine>
      ))}
    </div>
  );
};

export default Console;
