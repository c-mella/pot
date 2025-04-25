import styles from "~shared/styles/Home.module.scss";
import React from "react";

export default function Home() {
  return (
    <div
      className={styles.home}>
        <div className={styles.center}>
            <h1>Welcome to your site, dummy</h1>
            <p>Use this to get started and make cool shit!</p>
        </div>
    </div>
  );
}