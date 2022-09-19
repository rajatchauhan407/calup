import React, { useEffect } from "react";
import Question from "../../components/question/question";
import styles from "./divide.module.css";
import Timer from "../../components/timer/timer";
import SuccessBtn from "../../components/buttons/success";
import useQuestionHandler from "../../hooks/useQuestionHandler";
import { renewAnswers } from "../../features/answer/answer-slice";
import { useDispatch } from "react-redux";
import QuestionCard from "../../components/cards/question-card";
import SetTimer from "../../components/set-timer/setTimer";
function Divide() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(renewAnswers());
  }, []);

  const {
    clickTimer,
    setclickTimer,
    getQuestionHandler,
    setAnswer,
    answer,
    questionInterval,
    getResultHandler,
    stopTestHandler,
    catchInput,
    question,
  } = useQuestionHandler("division");

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
              margin="0"
            />
          ) : (
            <SuccessBtn
              onClick={stopTestHandler}
              width="30%"
              backgroundColor="#eeedef"
              cursor="pointer"
              text="STOP"
              margin="0"
            />
          )}
          <SuccessBtn
            width="30%"
            cursor="pointer"
            text="Results"
            onClick={getResultHandler}
            margin="0"
            backgroundColor="#eeedef"
          />
        </div>
      </QuestionCard>
    </div>
  );
}

export default Divide;
