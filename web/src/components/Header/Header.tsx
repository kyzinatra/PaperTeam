import React, { FC } from "react";
import style from "./Header.sass";

const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.header__logo}>
        <h1>Paper project</h1>
      </div>
      <nav className="header__nav">
        <a href="#">Main</a>
        <a href="#">Add exercise</a>
        <a href="#">Support</a>
      </nav>
    </header>
  );
};

export default Header;
