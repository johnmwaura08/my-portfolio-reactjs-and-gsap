import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.homeContainer}>
      <div className={styles.htmlContainer}>
        <div className={styles.homeHtmlSpan}>
          <span>{"<html>"}</span>
          <span className={styles.homeBodySpan}>{"<body>"}</span>
        </div>
      </div>
    </main>
  );
}

export default Home;
