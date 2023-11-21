import React, { useEffect, useState } from "react";
import styles from "../css/pages/Questions.module.css";
import Score from "../components/Score";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const [colorsData, setColorsData] = useState([]);
  const [pageCounter, setPageCounter] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState("#156D63");
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(200);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await fetch("https://random-colors-lovat.vercel.app/");
        const data = await response.json();

        console.log(data[pageCounter - 1].answers);
        setColorsData(data);
        setAnswers(data[pageCounter - 1].answers);
      } catch (error) {
        console.log("error");
      }
    };

    fetchColors();
  }, [pageCounter]);

  const onButtonClickHandler = () => {
    setPageCounter(pageCounter + 1);
    if (pageCounter === 10) {
      navigate("/answer");
    }
    setBackgroundColor(colorsData[pageCounter - 1].color);
  };

  const compareAnswerHandler = (index) => {
    if (answers[index] == colorsData[pageCounter - 1].color) {
      setPageCounter(pageCounter + 1);
    } else {
      setScore(score - 20);
    }
  };

  return (
    <div>
      <div className={styles.head}>
        <Score score={score} />
        <h4>Color Quiz</h4>
        <div className={styles.pages}>
          <span>{`${pageCounter}/10`}</span>
        </div>
      </div>

      <div className={styles.testContainer}>
        <h4>color":</h4>
        <div
          className={styles.color}
          style={{ backgroundColor: `${backgroundColor}` }}
        ></div>

        <div className={styles.answers}>
          {answers.map((ans, index) => (
            <div
              className={styles.asnw}
              key={ans[index]}
              onClick={compareAnswerHandler}
            >
              <h3>A</h3>
              <p>{ans}</p>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.button} onClick={onButtonClickHandler}>
        Continue
      </button>
    </div>
  );
};

export default Questions;
