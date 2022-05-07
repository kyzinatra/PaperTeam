import React, { FC } from "react";
import style from "./VertItem.sass";
interface IVertItem {
  isDashed?: boolean;
  height?: number;
}
const VertItem: FC<IVertItem> = ({ isDashed, height }) => {
  const dashClass = " " + (isDashed ? style["vert_dash"] : "");
  const styleHeight = height == -1 ? "100px" : height + "px";
  return (
    <div style={{ height: styleHeight }} className={style["vert-wrapper"]}>
      <span className={style.vert + dashClass} />
    </div>
  );
};

export default VertItem;
