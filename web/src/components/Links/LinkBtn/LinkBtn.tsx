import React, { FC } from "react";
import { Link } from "react-router-dom";
import style from "./LinkBtn.sass";

interface ILinkBtn {
  to: string;
}

const LinkBtn: FC<ILinkBtn> = ({ children, to }) => {
  return (
    <Link to={to} className={style.linkBtn}>
      {children}
    </Link>
  );
};

export default LinkBtn;
