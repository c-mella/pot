import React, { useState } from "react";
import styles from "./Example.module.scss";
import { ProjectWrapper } from "~components/project-wrapper";

export default function Blue() {

  return (
    <ProjectWrapper>
        <div className={styles.cont}>
          <img src="https://archives.bulbagarden.net/media/upload/thumb/0/0a/0009Blastoise.png/800px-0009Blastoise.png" />
        </div>
    </ProjectWrapper>);
};