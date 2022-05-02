import React from "react";
import GithubLink from "../Links/GithubLink/GithubLink";
import LinkBtn from "../Links/LinkBtn/LinkBtn";
import style from "./Main.sass";

const Main = () => {
  return (
    <div className={style.main}>
      <h1 className={style.main__title}>Главная</h1>
      <div className={style.main__content}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi aliquid, culpa unde optio
          ipsa delectus dignissimos porro et praesentium? Quod excepturi ea, sequi laudantium
          assumenda reprehenderit, quas ipsa vel quidem quae consequatur. Atque odio corrupti ea
          veritatis libero ut aperiam ullam nostrum ratione? Ipsam aspernatur adipisci voluptatibus
          id blanditiis veritatis deserunt. Quae voluptatibus beatae saepe, quaerat obcaecati
          dolores quas magni quibusdam, perferendis deleniti architecto blanditiis temporibus? Atque
          recusandae sit blanditiis.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi aliquid, culpa unde optio
          ipsa delectus dignissimos porro et praesentium? Quod excepturi ea, sequi laudantium
          assumenda reprehenderit, quas ipsa vel quidem quae consequatur. Atque odio corrupti ea
          veritatis libero ut aperiam ullam nostrum ratione? Ipsam aspernatur adipisci voluptatibus
          id blanditiis veritatis deserunt. Quae voluptatibus beatae saepe, quaerat obcaecati
          dolores quas magni quibusdam, perferendis deleniti architecto blanditiis temporibus? Atque
          recusandae sit blanditiis.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi aliquid, culpa unde optio
          ipsa delectus dignissimos porro et praesentium? Quod excepturi ea, sequi laudantium
          assumenda reprehenderit, quas ipsa vel quidem quae consequatur. Atque odio corrupti ea
          veritatis libero ut aperiam ullam nostrum ratione? Ipsam aspernatur adipisci voluptatibus
          id blanditiis veritatis deserunt. Quae voluptatibus beatae saepe, quaerat obcaecati
          dolores quas magni quibusdam, perferendis deleniti architecto blanditiis temporibus? Atque
          recusandae sit blanditiis.
        </p>
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
