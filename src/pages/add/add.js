import React from "react";
import Question from "../../components/question/question";
import styles from "./add.module.css";
function Add(){
    return (<div className={styles.addBody}>
       <Question/>
    </div>);
}

export default Add;