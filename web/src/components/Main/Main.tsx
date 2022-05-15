import React from "react";
import GithubLink from "../Links/GithubLink/GithubLink";
import LinkBtn from "../Links/LinkBtn/LinkBtn";
import style from "./Main.sass";

const Main = () => {
  return (
    <div className={style.main}>
      <h1 className={style.main__title}>Главная</h1>
      <div className={style.main__content}>
       <pre>
         {`
difficulty (1|2|3) // set difficulty

set $AXIS_NAME$ : 10..101 // Sets the $AXIS_NAME$ axis according to the pattern

set (width|height) int // Sets the height or width (width + height <= 26)

clear // Clear console

json get // get json from the constructor

Examples:
set A : 11011
set width 13
difficulty 2
         `}
       </pre>
      </div>
      <div className={style.main__link}>
        <LinkBtn to="/constructor">Перейти в конструктор</LinkBtn>
      </div>
      <div className={style.main__github}>
        <GithubLink href="https://github.com/kyzinatra/PaperTeam">GitHub</GithubLink>
        <GithubLink href="https://github.com/kyzinatra">Kyzinatri</GithubLink>
        <GithubLink href="https://github.com/Nekttuman">Nekttuman</GithubLink>
      </div>
    </div>
  );
};

export default Main;
