import React, { FC } from "react";
import style from "./Vert.sass";

interface IVert {
  isDashed?: boolean;
}

const Vert: FC<IVert> = ({ isDashed }) => {
  const dashClass = " " + (isDashed ? style["board_dash"] : "");
  return (
    <div className={style["board__vert-wrapper"]} onClick={() => console.log("CLICK1")}>
      <span className={style.board__vert + dashClass} />
    </div>
  );
};

export default Vert;
