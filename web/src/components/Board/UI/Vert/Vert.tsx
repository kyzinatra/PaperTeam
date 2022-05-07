import React, { FC } from "react";
import style from "./Vert.sass";
import VertItem from "./VertItem/VertItem";

interface IVert {
  dashPattern: string;
  height?: number;
}

const Vert: FC<IVert> = ({ dashPattern, height = -1 }) => {
  return (
    <div className={style.layer}>
      {dashPattern.split("").map((b, i) => {
        return <VertItem key={i} isDashed={!+b} height={height} />;
      })}
    </div>
  );
};

export default Vert;
