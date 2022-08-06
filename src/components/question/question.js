import React from "react";
import styles from "./question.module.css";

const Question = (props)=>{
    // console.log(props);
    return (
        <React.Fragment>
            <div className={styles.firstOperand+" "+styles.elContainer}>
                <h1>{props.firstOperand}</h1>
            </div>
       <div className={styles.operator+" "+styles.elContainer}>
        <h1>{props.operator}</h1>   {/* ADD operator through props*/}
       </div>
       <div className={styles.secondOperand+" "+styles.elContainer}>
            <h1>{props.secondOperand}</h1>
       </div>
       <div className={styles.equalTo+" "+styles.elContainer}>
       <h1>=</h1>
       </div>
       <div className={styles.answer+" "+styles.elContainer}>
       <input 
            type="number"
       />
       </div>
        </React.Fragment>
    )
}
export default Question;