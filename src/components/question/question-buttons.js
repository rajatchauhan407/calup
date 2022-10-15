import React from 'react';
import SuccessBtn from '../buttons/success';
import styles from './question-buttons.module.css';
const QuestionButton = (props)=>{
    return (
        <div className={styles.successBtnContainer}>
          {!props.clickTimer?<SuccessBtn
         onClick={props.getQuestionHandler}
         width="30%"
         backgroundColor="#eeedef"
         cursor="pointer"
         text="START"
         margin="0"
         />:
          <SuccessBtn 
          onClick = {props.stopTestHandler}
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
        onClick={props.getResultHandler}  
        margin="0" 
        backgroundColor="#eeedef"   
        disabled={props.clickTimer}
        />

      </div>
    )
}

export default QuestionButton;