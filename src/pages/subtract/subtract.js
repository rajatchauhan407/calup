import React, { useEffect,useState } from "react";
import Question from "../../components/question/question";
import styles from "./subtract.module.css";
import Timer from "../../components/timer/timer";
import SuccessBtn from "../../components/buttons/success";
import useQuestionHandler from "../../hooks/useQuestionHandler";
import { useDispatch, useSelector } from "react-redux";
import { renewAnswers } from "../../features/answer/answer-slice";
import QuestionCard from "../../components/cards/question-card";
import SetTimer from "../../components/set-timer/setTimer";
import Box from "@mui/material/Box";
import CircularProgress  from "@mui/material/CircularProgress";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import QuestionButton from "../../components/question/question-buttons";

function Subtract() {

  // getting timer value
  let time = useSelector((state)=>{
    return state.timer;
  });

  // initializing timer
  const [timer,setTimer] = useState(time);

  // setting remaining time
  const [remainingTime, setRemainingTime] = useState(0);
  // dispatch function for
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(renewAnswers());
  }, []); // only dispatch when component mounts

  // using useEffect for setTime 
  useEffect(()=>{   
    setTimer(time);
},[setTimer,time]);

  const {
    clickTimer,
    getQuestionHandler,
    setAnswer,
    answer,
    questionInterval,
    getResultHandler,
    stopTestHandler,
    catchInput,
    question,
    loading,
    error,
    errorMessage
  } = useQuestionHandler("subtraction", remainingTime);

  const onGettingNewTime = (remainingTimeData)=>{
    setRemainingTime(remainingTimeData);
}


if(loading){
  return (
    <Box sx={{display: 'flex', justifyContent:'center' }}>
        <CircularProgress sx={{ color:"#9370DB"}} />
    </Box>
  )
}else if(error){
  return <Box sx={{display: 'flex', justifyContent:'center'}}>
      <Alert severity="error" sx={{width:"100%"}}>
        <AlertTitle>Error</AlertTitle>
        Error Message — <strong>{errorMessage}</strong>
      </Alert>
  </Box>
  
}else
  return (
    <div className={styles.mainContainer}>
    <SetTimer/>
      <div className={styles.timer}>
        <Timer time={timer} startTimer={clickTimer} newTime = {onGettingNewTime}/>
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
            disabled={clickTimer}
          />
        </div>
        <QuestionButton 
        clickTimer = {clickTimer}
        getQuestionHandler = {getQuestionHandler}
        stopTestHandler = {stopTestHandler}
        getResultHandler = {getResultHandler}
      />
      </QuestionCard>
    </div>
  );
}

export default Subtract;
