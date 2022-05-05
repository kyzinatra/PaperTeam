import React, { useEffect, useRef, useState } from "react";
import style from "./Board.sass";
import Horiz from "./UI/Horiz/Horiz";
import Vert from "./UI/Vert/Vert";

const Board = () => {
  const horiz = { A: "1010101", B: "0011100", C: "0101010" };
  const vert = { D: "0011", E: "1111", F: "1100", G: "1100", H: "1111", I: "0011" };

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
        return (
          <>
            <div className={style.board__layer}>
              {Object.entries(vert).map(b => {
                return <Vert isDashed={!+b[1].split("")[i]} />;
              })}
            </div>
            <div className={style.board__relative}>
              <h3 className={style["board__horiz-title"]}>{a[0]}</h3>
              <div className={style["board__layer-horiz"]}>
                {a[1].split("").map(lineSegment => {
                  console.log(a[1], lineSegment);
                  return <Horiz isDashed={!+lineSegment} />;
                })}
              </div>
            </div>
          </>
        );
      })}
      <div className={style.board__layer}>
        {Object.entries(vert).map((b, i) => {
          return <Vert isDashed={!+b[1].split("")[b[1].length - 1]} />;
        })}
      </div>
    </div>
  );
};

export default Board;
