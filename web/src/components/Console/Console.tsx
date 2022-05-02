import React, { FC, useEffect } from "react";
import style from "./Console.sass";
import css from "../../sass/global.sass";
import ConsoleLine from "./ConsoleLine/ConsoleLine";
import { useSelector, useAppDispatch } from "../../service/types/redux/store";
import ConsoleController from "../../utils/console";

const Console: FC = () => {
  const log = useSelector(store => store.console);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!log.length) ConsoleController.runConsole(dispatch);
  }, [log]);
  return (
    <div className={style.console}>
      {log.map(a => (
        <ConsoleLine prefix={a.prefix} key={a.id}>
          {a.data}
        </ConsoleLine>
      ))}
    </div>
  );
};

export default Console;
