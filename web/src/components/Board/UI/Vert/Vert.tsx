import React, { FC, useEffect, useRef, useState, MouseEvent } from "react";
import { useAppDispatch, useSelector } from "../../../../service/redux/store";
import { setAxis } from "../../../../service/slices/construcorSlice";
import style from "./Vert.sass";
import VertItem from "./VertItem/VertItem";

interface IVert {
  dashPattern: string;
  height?: number;
  lineIndex: number;
}

const Vert: FC<IVert> = ({ dashPattern, height = -1, lineIndex }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [fRwidth, setFrWidth] = useState<number>(0);
  const styleHeight = height == -1 ? 100 : height;
  const { vert, horiz } = useSelector(s => s.construcor);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (ref.current) {
      setFrWidth(ref.current.clientWidth / (dashPattern.length * 2));
    }
  }, [ref]);

  function onClickHandler(e: MouseEvent) {
    const clickCoordX = e.clientX - (ref.current?.offsetLeft || 0);
    const clickCordY = e.clientY - (ref.current?.offsetTop || 0);
    const fractionX = clickCoordX / fRwidth;
    let percentToClosestX = 1 - Math.abs(+!(~~fractionX % 2) - (fractionX % 1));
    let percentToClosestY = Math.abs(clickCordY / styleHeight - 0.5) * 2;

    if (percentToClosestX > percentToClosestY) {
      const axisNameV = Object.keys(vert)[~~(fractionX / 2)];
      dispatch(
        setAxis({
          axisName: axisNameV,
          value: vert[axisNameV]
            .split("")
            .reduce((l, el, i) => (i == lineIndex ? l + +!+el : l + el), ""),
        })
      );
    } else {
      const sectionIndex = ~~((fractionX + 1) / 2);
      let LineInexCoef = clickCordY / styleHeight < 0.5 ? 1 : 0;
      const axisNameH = Object.keys(horiz)[lineIndex - LineInexCoef];
      if (!axisNameH) return;
      dispatch(
        setAxis({
          axisName: axisNameH,
          value: horiz[axisNameH]
            .split("")
            .reduce((l, el, i) => (i == sectionIndex ? l + +!+el : l + el), ""),
        })
      );
    }
  }

  return (
    <div ref={ref} className={style.layer} onClick={onClickHandler}>
      {dashPattern.split("").map((b, i) => {
        return <VertItem key={i} isDashed={!+b} height={height} />;
      })}
    </div>
  );
};

export default Vert;
