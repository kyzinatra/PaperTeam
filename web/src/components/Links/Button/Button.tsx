import React, { FC, MouseEvent } from "react";
import style from "./Button.sass";

interface IButton {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;

  children?: JSX.Element | string;
}

const Button: FC<IButton> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
