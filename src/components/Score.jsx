import React from "react";
import styles from "../css/components/Score.module.css";

const Score = ({ score }) => {
  return (
    <div className={styles.container}>
      <span>{score}</span>
    </div>
  );
};

export default Score;
