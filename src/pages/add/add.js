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

  // initializing timer
  const [timer,setTimer] = useState(time);

  // setting remaining time
  const [remainingTime, setRemainingTime] = useState(0);

  // initializing dispatch function  
  const dispatch = useDispatch();
  // using useEffect for setTime 
  useEffect(()=>{   
        setTimer(time);
    },[setTimer,time]);
  // using useEffect for dispatch
  useEffect(()=>{
    dispatch(renewAnswers());
  },[dispatch])

  // retrieving functions from custom hook
    const {
    clickTimer,
    getQuestionHandler,
    answer,
    getResultHandler, 
    stopTestHandler,
    catchInput,
    question
    } = useQuestionHandler("addition",remainingTime);

    const onGettingNewTime = (remainingTimeData)=>{
          setRemainingTime(remainingTimeData);
    }

    return (
    <div className={styles.mainContainer}>
          <SetTimer/>
        <div className={styles.timer}>
        <Timer
        time={timer}
        startTimer = {clickTimer}
        newTime = {onGettingNewTime}
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