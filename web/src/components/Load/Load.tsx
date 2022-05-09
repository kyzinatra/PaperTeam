import React, { FC } from "react";
import style from "./Load.sass";
interface ILoad {
  isLoading: boolean;
}
const Load: FC<ILoad> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className={style.load}>
          <h1>Loading...</h1>
        </div>
      )}
    </>
  );
};

export default Load;
