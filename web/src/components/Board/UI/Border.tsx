import React, { FC } from "react";

const Border: FC<{ width: string | number; height: string | number }> = ({ width, height }) => {
  const props = { stroke: "black", strokeDasharray: "5" };
  return (
    <>
      <line {...props} x1="0" y1={height} x2="0" y2="0" />
      <line {...props} x1="0" y1="0" x2={`${width}`} y2="0" />
      <line {...props} x1="0" y1={height} x2={`${width}`} y2={height} />
      <line {...props} x1={`${width}`} y1={height} x2={`${width}`} y2="0" />
    </>
  );
};

export default Border;
