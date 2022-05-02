import React, { FC } from "react";

import githubIcon from "../../../static/github.svg";
import style from "./GithubLink.sass";
interface IGithubLink {
  href: string;
}

const GithubLink: FC<IGithubLink> = ({ href, children }) => {
  return (
    <a className={style["github-link"]} href={href}>
      {children} <img src={`${githubIcon}`} alt="github icon" />
    </a>
  );
};

export default GithubLink;
