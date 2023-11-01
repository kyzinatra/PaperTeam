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
Команды для управления игрой: 

difficulty (1|2|3) // Установка сложности

set $AXIS_NAME$ : 10..101 // Установка $AXIS_NAME$ в соответстии с паттерном 

set (width|height) int // Установка ширины-высоты листка бумаги (width + height <= 26)

clear // Очистка консоли

json get // Получить строковое представление раскладки.

Примеры команд:
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
