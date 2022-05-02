import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./HeaderTab.sass";

interface IHeaderTab {
  active?: boolean;
  to: string;
}
const HeaderTab: FC<IHeaderTab> = ({ children, active, to }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(to)}
      className={style.header__tab + (active ? ` ${style.header__tab_active}` : "")}
    >
      <div className={style["header__tab-content"]}>{children}</div>
    </div>
  );
};

export default HeaderTab;
