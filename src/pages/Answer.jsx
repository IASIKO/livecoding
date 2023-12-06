import React from "react";
import styles from "../css/pages/Answer.module.css";
import Score from "../components/Score";

const Answer = ({ score, timer }) => {
  return (
    <>
      <div className={styles.answerContainer}>
        <h1>Color Quiz Results</h1>
        <Score score={score} />
        <p>Your score is: {score}</p>
        <p>Time: {timer} seconds</p>
      </div>
    </>
  );
};

export default Answer;
