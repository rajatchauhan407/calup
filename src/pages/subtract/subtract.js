import React, { useEffect } from "react";
import Question from "../../components/question/question";
import styles from "./subtract.module.css";
import Timer from "../../components/timer/timer";
import SuccessBtn from "../../components/buttons/success";
import useQuestionHandler from "../../hooks/useQuestionHandler";
import { useDispatch } from "react-redux";
import { renewAnswers } from "../../features/answer/answer-slice";
function Subtract() {
  // dispatch function for
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
  } = useQuestionHandler("subtraction");

  return (
    <div className={styles.mainContainer}>
      <div className={styles.timer}>
        <Timer time={300} startTimer={clickTimer} />
      </div>
      <div className={styles.addBody}>
        <div className={styles.question}>
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
        </div>
        <div className={styles.successBtnContainer}>
          {!clickTimer ? (
            <SuccessBtn
              onClick={getQuestionHandler}
              width="30%"
              backgroundColor="#9370DB"
              cursor="pointer"
              text="START"
            />
          ) : (
            <SuccessBtn
              onClick={stopTestHandler}
              width="30%"
              backgroundColor="red"
              cursor="pointer"
              text="STOP"
            />
          )}
          <SuccessBtn
            width="30%"
            cursor="pointer"
            text="Results"
            onClick={getResultHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default Subtract;
