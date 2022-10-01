import React, { useEffect, useState } from "react";
import Question from "../../components/question/question";
import styles from "./divide.module.css";
import Timer from "../../components/timer/timer";
import SuccessBtn from "../../components/buttons/success";
import useQuestionHandler from "../../hooks/useQuestionHandler";
import { renewAnswers } from "../../features/answer/answer-slice";
import { useDispatch, useSelector } from "react-redux";
import QuestionCard from "../../components/cards/question-card";
import SetTimer from "../../components/set-timer/setTimer";
import Box from "@mui/material/Box";
import CircularProgress  from "@mui/material/CircularProgress";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
function Divide() {

    // getting timer value
    let time = useSelector((state)=>{
      return state.timer;
    });
  
    // initializing timer
    const [timer,setTimer] = useState(time);
  
    // setting remaining time
    const [remainingTime, setRemainingTime] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(renewAnswers());
  }, [dispatch]);

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
    errorMessage,

  } = useQuestionHandler("division", remainingTime);

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
