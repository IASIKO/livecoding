import styles from "../css/pages/Questions.module.css";
import Score from "../components/Score";
import { useState } from "react";

const Questions = ({
  colorsData,
  answersData,
  pageCounter,
  setPageCounter,
  setShowResult,
  backgroundColor,
  setBackgroundColor,
  score,
  setScore,
}) => {
  const [answerIsCorrect, setAnswerIsCorrect] = useState(null);
  const [checkedAnswer, setCheckedAnswer] = useState("");

  const alphabet = "ABC";

  const chooseAnswerHandler = (answer) => {
    if (answer == colorsData[pageCounter].color) {
      setAnswerIsCorrect(true);
    } else {
      setAnswerIsCorrect(false);
    }
    setCheckedAnswer(answer);
  };

  const chosenAnswerHandler = (index) => {
    return checkedAnswer === answersData[index] ? "#5cb85c" : "";
  };

  const onButtonClickHandler = () => {
    setPageCounter(pageCounter + 1);
    if (pageCounter === colorsData.length - 1) {
      setShowResult(true);
    }
    setPageCounter(pageCounter + 1);
    setBackgroundColor(colorsData[pageCounter].color);
    setAnswerIsCorrect(null);
    if (!answerIsCorrect) {
      setScore(score - 20);
    }
  };

  return (
    <div>
      <div className={styles.head}>
        <div className={styles.pages}>
          <span>{`${pageCounter + 1}/10`}</span>
        </div>
      </div>

      <div className={styles.testContainer}>
        <h1>Color Quiz</h1>
        <Score score={score} />
        <h4>Color:</h4>
        <div
          className={styles.color}
          style={{ backgroundColor: `${backgroundColor}` }}
        ></div>

        <div className={styles.answers}>
          {answersData.length > 0 &&
            answersData.map((ans, index) => {
              return (
                <div
                  className={styles.answ}
                  key={index}
                  onClick={() => {
                    chooseAnswerHandler(ans);
                  }}
                  style={{ backgroundColor: chosenAnswerHandler(index) }}
                >
                  <h3>{alphabet[index]}</h3>
                  <p>{ans}</p>
                </div>
              );
            })}
          <button
            disabled={answerIsCorrect !== null ? false : true}
            style={{
              backgroundColor: answerIsCorrect !== null ? "#EEC721" : "grey",
              color: answerIsCorrect !== null ? "white" : "#babab6",
            }}
            className={styles.button}
            onClick={onButtonClickHandler}
          >
            {pageCounter + 1 !== 10 ? "Next" : "Finish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
