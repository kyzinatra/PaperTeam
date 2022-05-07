import React, { FC } from "react";
import { useAppDispatch, useSelector } from "../../../../../service/redux/store";
import { setAxis } from "../../../../../service/slices/construcorSlice";
import style from "./HorizItem.sass";
interface HorizItem {
  isDashed?: boolean;
  axis: string;
  index: number;
}

const HorizItem: FC<HorizItem> = ({ isDashed, axis, index }) => {
  const dashClass = " " + (isDashed ? style["horiz_dash"] : "");
  const dispatch = useAppDispatch();
  const horiz = useSelector(a => a.construcor.horiz);
  return (
    <div
      className={style["horiz__wrapper"]}
      onClick={e => {
        e.stopPropagation();
        console.log("CLICK");
        dispatch(
          setAxis({
            axisName: axis,
            value: horiz[axis]
              .split("")
              .reduce((l, el, i) => (i == index ? l + +!+el : l + el), ""),
          })
        );
      }}
    >
      <span className={style.horiz + dashClass} />
    </div>
  );
};

export default HorizItem;
