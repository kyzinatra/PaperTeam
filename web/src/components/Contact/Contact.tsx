import React from "react";
import GithubLink from "../Links/GithubLink/GithubLink";
import styles from "./Contact.sass";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <p>Если вы нашли что-то важное, то напишите нам, а для инструкций вот github{":)"} </p>
      <GithubLink href="https://github.com/kyzinatra/PaperTeam">GitHub</GithubLink>
    </div>
  );
};

export default Contact;
