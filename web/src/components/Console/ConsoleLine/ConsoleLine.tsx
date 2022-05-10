import React, { FC } from "react";
import style from "./ConsoleLine.sass";

interface IConsoleLine {
  prefix?: boolean | string;
  className?: string;
  children?: JSX.Element | string | JSX.Element[];
}

const ConsoleLine: FC<IConsoleLine> = ({ prefix, children, className }) => {
  let toAdd: string | null | JSX.Element = null;
  if (typeof prefix == "boolean" && prefix)
    toAdd = <span className={style.line__prefix}>{">"}</span>;
  else toAdd = prefix ? <span className={style.line__prefix}>{prefix}</span> : "";

  return (
    <div className={style.line} onClick={e => e.stopPropagation()}>
      <span className={className}>
        <span>{toAdd}</span>
        {children}
      </span>
    </div>
  );
};

export default ConsoleLine;
