"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var GithubLink_1 = __importDefault(require("../Links/GithubLink/GithubLink"));
var Contact_sass_1 = __importDefault(require("./Contact.sass"));
var Contact = function () {
    return (<div className={Contact_sass_1.default.contact}>
      <p>Если вы нашли что-то важное, то напишите нам, а для инструкций вот github{":)"} </p>
      <GithubLink_1.default href="https://github.com/kyzinatra/PaperTeam">GitHub</GithubLink_1.default>
    </div>);
};
exports.default = Contact;
