import React, { FC } from "react";
import style from "./Horiz.sass";
interface IHoriz {
  isDashed?: boolean;
}

const Horiz: FC<IHoriz> = ({ isDashed }) => {
  const dashClass = " " + (isDashed ? style["board_dash"] : "");
  return (
    <div className={style["board__horiz-wrapper"]}>
      <span className={style.board__horiz + dashClass} />
    </div>
  );
};

export default Horiz;
