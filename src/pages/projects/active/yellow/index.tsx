import React, { useState } from "react";
import styles from "./Example.module.scss";
import { ProjectWrapper } from "~components/project-wrapper";

export default function Yellow() {

  return (
    <ProjectWrapper>
        <div className={styles.cont}>
          <img src="https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png" />
        </div>
    </ProjectWrapper>);
};