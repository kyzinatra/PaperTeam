"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var GithubLink_1 = __importDefault(require("../Links/GithubLink/GithubLink"));
var LinkBtn_1 = __importDefault(require("../Links/LinkBtn/LinkBtn"));
var Main_sass_1 = __importDefault(require("./Main.sass"));
var Main = function () {
    return (<div className={Main_sass_1.default.main}>
			<h1 className={Main_sass_1.default.main__title}>Главная</h1>
			<div className={Main_sass_1.default.main__content}>
				<pre>
					{"\n\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0438\u0433\u0440\u043E\u0439: \n\ndifficulty (1|2|3) // \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438\n\nset $AXIS_NAME$ : 10..101 // \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 $AXIS_NAME$ \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0438\u0438 \u0441 \u043F\u0430\u0442\u0442\u0435\u0440\u043D\u043E\u043C \n\nset (width|height) int // \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0448\u0438\u0440\u0438\u043D\u044B-\u0432\u044B\u0441\u043E\u0442\u044B \u043B\u0438\u0441\u0442\u043A\u0430 \u0431\u0443\u043C\u0430\u0433\u0438 (width + height <= 26)\n\nclear // \u041E\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u043E\u043D\u0441\u043E\u043B\u0438\n\njson get // \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u043E\u0432\u043E\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0440\u0430\u0441\u043A\u043B\u0430\u0434\u043A\u0438.\n\n\u041F\u0440\u0438\u043C\u0435\u0440\u044B \u043A\u043E\u043C\u0430\u043D\u0434:\nset A : 11011\nset width 13\ndifficulty 2\n         "}
				</pre>
			</div>
			<div className={Main_sass_1.default.main__link}>
				<LinkBtn_1.default to="/constructor">Перейти в конструктор</LinkBtn_1.default>
			</div>
			<div className={Main_sass_1.default.main__github}>
				<GithubLink_1.default href="https://github.com/kyzinatra/PaperTeam">GitHub</GithubLink_1.default>
				<GithubLink_1.default href="https://github.com/kyzinatra">Kyzinatri</GithubLink_1.default>
				<GithubLink_1.default href="https://github.com/Nekttuman">Nekttuman</GithubLink_1.default>
			</div>
		</div>);
};
exports.default = Main;
