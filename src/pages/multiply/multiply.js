import React, { useEffect, useState } from "react";
import Question from "../../components/question/question";
import styles from "./multiply.module.css";
import { useSelector, useDispatch } from "react-redux";
import Timer from "../../components/timer/timer";
import { getMultiplicationQuestions } from "../../features/basic-ops/multiply-slice";
import {
  recordedAnswers,
  getResults,
  renewAnswers,
} from "../../features/answer/answer-slice";
import SuccessBtn from "../../components/buttons/success";
import { useNavigate } from "react-router-dom";
import QuestionCard from '../../components/cards/question-card';
import SetTimer from '../../components/set-timer/setTimer';

let questionInterval;

function Multiply() {
  const navigate = useNavigate();

  // initializing dispatch function
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(renewAnswers());
  }, []);

  // state defined for the question object
  const [question, setQuestion] = useState({
    firstOperand: 1,
    secondOperand: 1,
    operator: "×",
    answer: 1,
    level: 1,
    standard: 1,
  });

  // This click starts and stops the timer in Timer Component
  const [clickTimer, setclickTimer] = useState(false);

  // This state records the answer provided by the user
  const [answer, setAnswer] = useState(1);

  // Retrieving the global answer state
  const answerState = useSelector((state) => state.answer);

  // getting Questions from the global state
  const { questions } = useSelector((state) => {
    return state.multiply;
  });

  // function to get a random question
  const getQuestion = (questions) => {
    let index = Math.floor(Math.random() * (49 - 0)) + 0;
    return questions[index];
  };

  // dispatching an async thunk to get questions from api... will not be called as the global state contains all the questions until another query renders

  useEffect(() => {
    dispatch(getMultiplicationQuestions());
  }, [dispatch]);

  // function for questions to appear automatically
  const getQuestionHandler = () => {
    setclickTimer(true);
    questionInterval = setInterval(() => {
      const question = getQuestion(questions);
      setQuestion((prevQuestion) => {
        setAnswer((prevState) => {
          dispatch(
            recordedAnswers({
              question: prevQuestion,
              recordedAnswer: prevState,
            })
          );
          return "";
        });
        return question;
      });
    }, 2000);
  };

  // stopTest
  const stopTestHandler = () => {
    clearInterval(questionInterval);
    setclickTimer(false);
    console.log(answerState);
  };

  // catching input from Question
  const catchInput = (answer) => {
    setAnswer(answer);
  };

  // Get result of the questions
  const getResultHandler = () => {
    let count = 0;
    answerState.questions.forEach((el) => {
      if (el.question.answer === parseInt(el.recordedAnswer)) {
        count++;
      }
    });
    dispatch(
      getResults({
        questions: answerState.questions,
        result: count,
        typeOfOperation: "multiplication",
      })
    );
    navigate("../results");
  };
  // console.log(answerState);

  return (
    <div className={styles.mainContainer}>
      <SetTimer/>
      <div className={styles.timer}>
        <Timer time={300} startTimer={clickTimer} />
      </div>
      <QuestionCard>
          <Question
            firstOperand={question.firstOperand}
            secondOperand={question.secondOperand}
            operator={question.operator}
            answer={question.answer}
            level={question.level}
            standard={question.standard}
            value={answer}
            onGettingInput={catchInput}
          />
        <div className={styles.successBtnContainer}>
          {!clickTimer ? (
            <SuccessBtn
              onClick={getQuestionHandler}
              width="30%"
              backgroundColor="#eeedef"
              cursor="pointer"
              text="START"
            />
          ) : (
            <SuccessBtn
              onClick={stopTestHandler}
              width="30%"
              backgroundColor="#eeedef"
              cursor="pointer"
              text="STOP"
            />
          )}
          <SuccessBtn
            width="30%"
            cursor="pointer"
            text="Results"
            onClick={getResultHandler}
            backgroundColor="#eeedef"
          />
        </div>
      </QuestionCard>
    </div>
  );
}

export default Multiply;
