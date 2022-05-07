import React, { FC } from "react";
import style from "./HorizItem.sass";
interface HorizItem {
  isDashed?: boolean;
}

const HorizItem: FC<HorizItem> = ({ isDashed }) => {
  const dashClass = " " + (isDashed ? style["horiz_dash"] : "");
  return (
    <div className={style["horiz__wrapper"]}>
      <span className={style.horiz + dashClass} />
    </div>
  );
};

export default HorizItem;
