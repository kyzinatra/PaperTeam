import React, { useEffect, useRef, useState } from "react";
import { uid } from "uid";
import { useAppDispatch, useSelector } from "../../service/redux/store";
import { add } from "../../service/slices/consoleSlice";
import { clearOverflow } from "../../service/slices/construcorSlice";
import style from "./Board.sass";
import Horiz from "./UI/Horiz/Horiz";
import Vert from "./UI/Vert/Vert";

const Board = () => {
  const { vert, horiz } = useSelector(store => store.construcor);
  const isOverflow = useSelector(a => a.construcor.isOverflow);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isOverflow) {
      dispatch(
        add({
          data: [
            ["red", "Error: "],
            ["", "max size has been exceeded or query doesn't make sense "],
          ],
          id: uid(),
        })
      );
      dispatch(clearOverflow());
    }
  }, [isOverflow]);
  const bottomPadVertLine =
    Object.values(vert).reduce((l, item) => l + item[item.length - 1], "") || "";
  return (
    <div className={style.board}>
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
