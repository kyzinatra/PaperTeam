import React, { useEffect, useRef, useState } from "react";
import style from "./Board.sass";
import Border from "./UI/Border";

const SVG_Y_PADDING = 20;

const Board = () => {
  // const ref = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState<number>(document.body.clientWidth);
  const height = 700;
  const horiz = { A: "1010101", B: "0011100", C: "0101010" };
  const vert = { D: "0011", E: "1111", F: "1100", G: "1100", H: "1111", I: "0011" };

  // flex width
  useEffect(() => {
    function resize() {
      setWidth(document.body.clientWidth);
    }
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <svg
      onClick={e => {
        const el = e.target;
        if (el instanceof Element) console.log(e.clientX / el.clientWidth);
      }}
      // ref={ref}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className={style.board}
    >
      {Object.entries(vert).map((axis, i, { length: l }) => {
        const CenterWidthFactor = width / (2 * l);
        const CenterHeightFactor = height / (2 * l);

        return (
          <>
            <text x={(i / l) * width + CenterWidthFactor} y={SVG_Y_PADDING} fontSize="20px">
              {axis[0]}
            </text>
            {axis[1].split("").map((data, j, { length: l2 }) => {
              console.log(l2);
              const y1 = ((j - 1) / (l2 - 1)) * height + CenterHeightFactor + SVG_Y_PADDING;
              return (
                <line
                  x1={(i / l) * width + CenterWidthFactor}
                  y1={y1}
                  x2={(i / l) * width + CenterWidthFactor + 10}
                  y2={y1}
                  strokeWidth={3}
                  stroke="black"
                ></line>
              );
            })}
          </>
        );
      })}

      {Object.entries(horiz).map((axis, i, { length: l }) => {
        const CenterHeightFactor = height / (2 * l);
        return (
          <text x={0} y={(i / l) * height + CenterHeightFactor} fontSize="1.2rem">
            {axis[0]}
          </text>
        );
      })}
      <Border width={width} height={height} />
    </svg>
  );
};

export default Board;
