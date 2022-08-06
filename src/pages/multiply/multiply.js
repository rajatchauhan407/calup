import React, { useEffect } from "react";
import Question from "../../components/question/question";
import styles from "./multiply.module.css";
import {useSelector, useDispatch} from "react-redux";
import {getMultiplicationQuestions} from '../../features/basic-ops/multiply-slice';

function Multiply(){
    const question = useSelector(state => state.multiply);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getMultiplicationQuestions());
    },[dispatch]);
    console.log(question);
    
    return (<div className={styles.addBody}>
                <Question
                    firstOperand = {question.firstOperand}
                    secondOperand = {question.secondOperand}
                    operator = {question.operator}
                    answer = {question.answer}
                    level = {question.level}
                    standard = {question.standard}
                />
    </div>);
}

export default Multiply;