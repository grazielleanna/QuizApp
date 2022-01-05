import { useEffect, useState } from "react";
import { FaRegTimesCircle, FaRegCheckCircle } from "react-icons/fa";
import ReactLoading from "react-loading";
import logoImg from "../../assets/logo.svg";
import { useQuiz } from "../../hooks/useQuiz";
import { api } from "../../services/api";
import { Answer, Answers, Question, QuizContent, Button } from "./style";

interface QuestionsProps {
  answers: Array<any>;
  category: string;
  correct_answer: string;
  question: string;
}

interface IndexAndLyrics {
  [key: number]: string;
}

interface LyricsAndIndex {
  [key: string]: string;
}

export const QuizQuestions = () => {
  const { updateScore, updateEndQuiz } = useQuiz();
  const [questions, setQuestions] = useState<QuestionsProps[]>([]);
  const [isChecked, setIsChecked] = useState([]);
  const [nextQuestion, setNextQuestion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line
  }, []);

  const getQuestions = async () => {
    const { data: response } = await api.get(
      `questions?apiKey=${process.env.REACT_APP_APIKEY}`
    );
    handleData(
      response.filter(
        (f: any) =>
          f.correct_answer !== null && f.multiple_correct_answers === "false"
      )
    );
  };

  const handleData = (response: Array<QuestionsProps>) => {
    const newArray = [] as any;

    response.forEach((element: any) => {
      const object = {
        answers: Object.values(element.answers).filter(
          (answer) => answer !== null
        ),
        category: element.category,
        correct_answer: element.correct_answer,
        question: element.question,
      };
      newArray.push(object);
    });

    setQuestions(newArray);
  };

  const handleClickQuestion = (index: number) => {
    const questionCorrect = questions[currentQuestion].correct_answer;
    const isQuestionCorrect =
      questionCorrect === `answer_${indexAndLyrics[index].toLocaleLowerCase()}`;

    const questionHTML = document.querySelector(`.question-${index}`);
    const questionCorrectHTML = document.querySelector(
      `.question-${
        lyricsAndIndex[questionCorrect.split("_")[1].toLocaleUpperCase()]
      }`
    );

    const indexQuestionCorrect =
      lyricsAndIndex[questionCorrect.split("_")[1].toLocaleUpperCase()];

    if (isQuestionCorrect) {
      updateScore(false);
      questionHTML?.classList.add("correct");
      setIsChecked((f) => ({ ...f, [String(index)]: true }));
    } else {
      setIsChecked((f) => ({
        ...f,
        [String(index)]: false,
        [indexQuestionCorrect]: true,
      }));
      questionHTML?.classList.add("incorrect");
      questionCorrectHTML?.classList.add("correct");
    }

    setNextQuestion(true);
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;

    const htmlCorrect = document.querySelector(".correct");
    const htmlIncorrect = document.querySelector(".incorrect");

    htmlCorrect?.classList.remove("correct");

    if (htmlCorrect) {
      htmlIncorrect?.classList.remove("incorrect");
    }

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setIsChecked([]);
      setNextQuestion(false);
    } else {
      updateEndQuiz(true);
    }
  };

  const indexAndLyrics: IndexAndLyrics = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
    5: "F",
  };

  const lyricsAndIndex: LyricsAndIndex = {
    A: "0",
    B: "1",
    C: "2",
    D: "3",
    E: "4",
    F: "5",
  };
  
  return (
    <>
      <QuizContent>
        <img src={logoImg} alt="Logo Quiz" />
        {questions.length > 0 ? (
          <Question>
            <p>Question {(currentQuestion+1)} of {(questions.length+1)}</p>
            <h3>{questions[currentQuestion]?.question}</h3>
            <Answers>
              {questions[currentQuestion]?.answers.map((item: any, index) => (
                <>
                  <Answer
                    key={index}
                    onClick={() => handleClickQuestion(index)}
                    className={`question-${index}`}
                    disabled={nextQuestion}
                  >
                    <div>
                      <span>{indexAndLyrics[index]}</span>
                      <p>{item}</p>
                    </div>

                    {isChecked[index] && (
                      <FaRegCheckCircle fontSize={20} color="#FFF" />
                    )}

                    {isChecked[index] === false && (
                      <FaRegTimesCircle fontSize={20} color="#FFF" />
                    )}
                  </Answer>
                </>
              ))}
              {nextQuestion && (
                <Button onClick={handleNextQuestion}>Next</Button>
              )}
            </Answers>
          </Question>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ReactLoading type="spin" color="#5256A1" />
          </div>
        )}
      </QuizContent>
    </>
  );
};
