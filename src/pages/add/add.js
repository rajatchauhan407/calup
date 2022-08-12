import React,{useEffect} from "react";
import Question from "../../components/question/question";
import styles from "./add.module.css";
import Timer from "../../components/timer/timer";
import SuccessBtn from "../../components/buttons/success";
import useQuestionHandler from "../../hooks/useQuestionHandler";
import { renewAnswers } from "../../features/answer/answer-slice";
import {useDispatch} from "react-redux";

function Add(){
  // initializing dispatch function  
  const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(renewAnswers());
    },[]);


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
    question
    } = useQuestionHandler("addition");

    return (<div classname={styles.mainContainer}>
        <Timer
        time={300}
        startTimer = {clickTimer}
        />
      <div className={styles.addBody}>
        <div className={styles.question}>
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
        </div>
        <div className={styles.successBtn}>
          {!clickTimer?<SuccessBtn
         onClick={getQuestionHandler}
         width="30%"
         backgroundColor="#9370DB"
         cursor="pointer"
         text="START"
         />:
          <SuccessBtn 
          onClick = {stopTestHandler}
          width="30%"
          backgroundColor="red"
          cursor="pointer"
          text="STOP"
          />
        }
        <SuccessBtn 
        width="30%"
        cursor="pointer"
        text="Get Result"
        onClick={getResultHandler}      
        />
      </div>
  
      </div>
      </div>);
}

export default Add;