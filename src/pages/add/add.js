import React,{useEffect, useState} from "react";
import Question from "../../components/question/question";
import styles from "./add.module.css";
import Timer from "../../components/timer/timer";
import SetTimer from "../../components/set-timer/setTimer";
import SuccessBtn from "../../components/buttons/success";
import useQuestionHandler from "../../hooks/useQuestionHandler";
import { renewAnswers } from "../../features/answer/answer-slice";
import {useDispatch, useSelector} from "react-redux";
import QuestionCard from "../../components/cards/question-card";

function Add(){
  // getting timer value
  let time = useSelector((state)=>{
    return state.timer;
  });
  // initializing dispatch function  
  const [timer,setTimer] = useState(time);

  const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(renewAnswers());
        setTimer(time);
    },[setTimer, dispatch,time]);

// retrieving functions from custom hook
    const {
    clickTimer,
    getQuestionHandler,
    answer,
    getResultHandler, 
    stopTestHandler,
    catchInput,
    question
    } = useQuestionHandler("addition");

    return (
    <div className={styles.mainContainer}>
          <SetTimer/>
        <div className={styles.timer}>
        <Timer
        time={timer}
        startTimer = {clickTimer}
        />
        </div>
        
      <QuestionCard>
        <Question
          firstOperand={question.firstOperand}
          secondOperand={question.secondOperand}
          operator={question.operator}
          answer={question.answer}
          level={question.level}
          standard={question.standard}
          value = {answer}
          onGettingInput={catchInput}
        /> 
        <div className={styles.successBtnContainer}>
          {!clickTimer?<SuccessBtn
         onClick={getQuestionHandler}
         width="30%"
         backgroundColor="#eeedef"
         cursor="pointer"
         text="START"
         margin="0"
         />:
          <SuccessBtn 
          onClick = {stopTestHandler}
          width="30%"
          backgroundColor="#eeedef"
          cursor="pointer"
          text="STOP"
          margin="0"
          />
          }
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

export default Add;