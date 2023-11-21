import React from "react";
import styles from '../css/pages/Answer.module.css'
import Score from "../components/Score";

const Answer = () => {
  return (
    <div>
      <Score />
      <h4>Color Quiz</h4>

      <p>your score is:</p>
      <p>Time: seconds</p>
    </div>
  );
};

export default Answer;
