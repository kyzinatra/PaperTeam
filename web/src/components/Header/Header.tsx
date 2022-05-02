import React, { FC } from "react";
import style from "./Header.sass";
import HeaderTab from "./HeaderTab/HeaderTab";
import { useMatch } from "react-router-dom";

const Header: FC = () => {
  const isMain = useMatch("/");
  const isConstructor = useMatch("/constructor");
  const isContact = useMatch("/contact");
  return (
    <header className={style.header}>
      <HeaderTab active={!!isMain} to="/">
        Главная
      </HeaderTab>
      <HeaderTab active={!!isConstructor} to="/constructor">
        Конструктор
      </HeaderTab>
      <HeaderTab active={!!isContact} to="/contact">
        Помощь
      </HeaderTab>
    </header>
  );
};

export default Header;
