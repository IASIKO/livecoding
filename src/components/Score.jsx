import React from "react";
import styles from "../css/Score.module.css";

const Score = ({ score }) => {
  return (
    <div className={styles.container}>
      <span>{score}</span>
    </div>
  );
};

export default Score;
