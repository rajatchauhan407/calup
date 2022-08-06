import React, { useEffect } from "react";
import styles from "./divide.module.css";
import Question from '../../components/question/question'
import {useDispatch, useSelector} from "react-redux";
import {fetchQuestions} from "../../features/basic-ops/divide-slice";
function Divide(){

    const questions = useSelector(state => state.divide);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchQuestions());
    },[dispatch]);
    console.log(questions);
    return (<div className={styles.addBody}>
                    <Question />
    </div>);
}

export default Divide;