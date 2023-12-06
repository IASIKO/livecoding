import Questions from "./pages/Questions";
import Answer from "./pages/Answer";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [colorsData, setColorsData] = useState([]);
  const [answersData, setAnswersData] = useState([]);
  const [pageCounter, setPageCounter] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState();
  const [score, setScore] = useState(200);
  const [timer, setTimer] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await fetch("https://random-colors-lovat.vercel.app/");
        const data = await response.json();

        setColorsData(data);
        setLoading(false);
      } catch (error) {
        console.log("error");
      }
    };

    fetchColors();
  }, []);

  useEffect(() => {
    if (colorsData.length && colorsData[pageCounter]) {
      setAnswersData(colorsData[pageCounter].answers);
      setBackgroundColor(colorsData[pageCounter].color);
    }
  }, [colorsData, pageCounter]);

  useEffect(() => {
    if (!showResult) {
      const timeOutId = setInterval(() => {
        setTimer((prevSec) => prevSec + 1);
      }, 1000);
      return () => clearInterval(timeOutId);
    }
  }, [showResult, setTimer]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {!showResult && (
            <Questions
              colorsData={colorsData}
              answersData={answersData}
              pageCounter={pageCounter}
              setPageCounter={setPageCounter}
              setShowResult={setShowResult}
              backgroundColor={backgroundColor}
              setBackgroundColor={setBackgroundColor}
              score={score}
              setScore={setScore}
            />
          )}
        </>
      )}
      {showResult && <Answer score={score} timer={timer} />}
    </>
  );
}

export default App;
