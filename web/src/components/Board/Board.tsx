import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "../../service/redux/store";
import style from "./Board.sass";
import Horiz from "./UI/Horiz/Horiz";
import Vert from "./UI/Vert/Vert";

const Board = () => {
  const { vert, horiz } = useSelector(store => store.construcor);

  const bottomPadVertLine = Object.values(vert).reduce((l, item) => l + item[item.length - 1], "");
  return (
    <div className={style.board}>
      {/* Names */}
      <div className={style.board__layer}>
        {Object.entries(vert).map((a, i) => {
          return (
            <h3 key={i} className={style.board__center}>
              {a[0]}
            </h3>
          );
        })}
      </div>
      {Object.entries(horiz).map((a, i) => {
        const vertLine = Object.values(vert).reduce((last, vertLine) => last + vertLine[i], "");
        const horizLine = Object.values(horiz)[i];
        const horizTitle = Object.keys(horiz)[i];
        return (
          <React.Fragment key={i}>
            <Vert dashPattern={vertLine} lineIndex={i} />
            <Horiz title={horizTitle} dashPattern={horizLine} />
          </React.Fragment>
        );
      })}
      <div className={style.board__layer}>
        <Vert dashPattern={bottomPadVertLine} lineIndex={Object.keys(horiz).length} />
      </div>
    </div>
  );
};

export default Board;
