"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var github_svg_1 = __importDefault(require("../../../static/github.svg"));
var GithubLink_sass_1 = __importDefault(require("./GithubLink.sass"));
var GithubLink = function (_a) {
    var href = _a.href, children = _a.children;
    return (<a className={GithubLink_sass_1.default["github-link"]} href={href}>
      {children} <img src={"".concat(github_svg_1.default)} alt="github icon"/>
    </a>);
};
exports.default = GithubLink;
