import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {recordedAnswers, getResults} from '../features/answer/answer-slice';
import {fetchQuestionsSubtract} from "../features/basic-ops/subtract-slice";
import {fetchQuestionsAdd} from "../features/basic-ops/add-slice";
import { fetchQuestionsDivide } from '../features/basic-ops/divide-slice';
import { useNavigate } from 'react-router-dom';

let questionInterval;
const useQuestionHandler = (typeOfOperation)=>{
//   state defined for the question object
const [question, setQuestion] = useState({
    firstOperand: 0,
    secondOperand: 0,
    operator: "+",
    answer: 0,
    level: 1,
    standard: 1,
  });

// This click starts and stops the timer in Timer Component 
 const [clickTimer, setclickTimer] = useState(false);

 // This state records the answer provided by the user 
 const [answer, setAnswer] = useState(0);

 

 // getting Questions from the global state 
 const {questions} = useSelector(state => {
  if(typeOfOperation === "subtraction"){
    return state.subtract
  }else if(typeOfOperation === "addition"){
    return state.add
  }else if(typeOfOperation === "division"){
    return state.divide
  }
 });

 
// function to get a random question 
const getQuestion = (questions) => {
    let index = Math.floor(Math.random() * (49 - 0)) + 0;
    return questions[index];
  };
  const dispatch = useDispatch();
  useEffect(()=>{
      if(typeOfOperation === "subtraction"){
        dispatch(fetchQuestionsSubtract(typeOfOperation));
      }else if(typeOfOperation === "addition"){
        dispatch(fetchQuestionsAdd(typeOfOperation));
      }else if(typeOfOperation === "division"){
        dispatch(fetchQuestionsDivide(typeOfOperation));
      }
      
  },[dispatch, typeOfOperation]); 


// Retrieving the global answer state
const answerState = useSelector(state => state.answer);

    const getQuestionHandler = ()=>{
        setclickTimer(true);
        let count = 0;
          questionInterval = setInterval(()=>{  
            count = count + 1;
            console.log(count);
            const question = getQuestion(questions);
              setQuestion((prevQuestion)=>{
                setAnswer((prevState)=>{
                  dispatch(recordedAnswers({
                    question:prevQuestion,
                    recordedAnswer:prevState
                  }));
                  return '';
                });
                return question;
              });
          },2000);         
  }
  
// catching input from Question
const catchInput = (answer)=>{
  setAnswer(answer);
}
// getting navigate object

let navigate = useNavigate();

// Get result of the questions
const getResultHandler = ()=>{
  let count=0;
  answerState.questions.forEach((el)=>{
        if(el.question.answer === parseInt(el.recordedAnswer)){
          count++;
        }
  });
  dispatch(getResults({
    typeOfOperation:typeOfOperation,
    questions:answerState.questions,
    result:count
  }));
  navigate('../results');

}

  // stopTest
  const stopTestHandler = ()=>{
    clearInterval(questionInterval); 
    setclickTimer(false);
    console.log(answerState);
  }

  return {
    clickTimer,
    setclickTimer,
    getQuestionHandler,
    setAnswer,
    questionInterval,
    getResultHandler, 
    stopTestHandler,
    catchInput,
    answer,
    question
  }
}

export default useQuestionHandler;