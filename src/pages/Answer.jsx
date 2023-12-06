import React from "react";
import styles from "../css/pages/Answer.module.css";
import Score from "../components/Score";
import clock from "../assets/clock.png";

const Answer = ({ score, timer }) => {
  return (
    <>
      <div className={styles.answerContainer}>
        <h1>Color Quiz Results</h1>
        <Score score={score} />
        <p>Your score is: {score}</p>
        <div className={styles.time}>
          <img src={clock} alt="clock" />
          <span>{timer} seconds</span>
        </div>
      </div>
    </>
  );
};

export default Answer;
