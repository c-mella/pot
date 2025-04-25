import React, { useState } from "react";
import styles from "./Example.module.scss";
import { ProjectWrapper } from "~components/project-wrapper";

export default function Red() {

  return (
    <ProjectWrapper>
        <div className={styles.cont}>
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//006.png" />
        </div>
    </ProjectWrapper>);
};