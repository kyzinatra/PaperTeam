import React, { FC, MouseEvent } from "react";
import style from "./Button.sass";

interface IButton {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children?: JSX.Element | string;
}

const Button: FC<IButton> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={style.button + " " + className}>
      {children}
    </button>
  );
};

export default Button;
