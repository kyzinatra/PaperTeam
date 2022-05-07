import React, { FC } from "react";
import style from "./Horiz.sass";
import HorizItem from "./HorizItem/HorizItem";
interface IHoriz {
  dashPattern: string;
  title: string;
}

const Horiz: FC<IHoriz> = ({ dashPattern, title }) => {
  return (
    <div className={style.horiz__relative}>
      <h3 className={style["horiz__title"]}>{title}</h3>
      <div
        className={style["horiz__layer"]}
        style={{ gridTemplateColumns: `0.5fr repeat(${dashPattern.length - 2}, 1fr) 0.5fr` }}
      >
        {dashPattern.split("").map((a, i) => {
          return <HorizItem key={i} isDashed={!+a} />;
        })}
      </div>
    </div>
  );
};

export default Horiz;
