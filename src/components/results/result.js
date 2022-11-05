import React from "react";
import styles from "./result.module.css";
import useGetResults from "../../hooks/use-getResults";
const Result = (props) => {
  const { results } = useGetResults();
  console.log(results);

  return (
    <div className={styles.result_card_wrapper}>
      <div className={styles.resultCard}>
        <div className={styles.resultCardTitle}> Type of Questions</div>
        <div className={styles.resultCardResult}>
          {(results.typeOfOperation.toUpperCase()) || "Nil"}
        </div>
      </div>
      <div className={styles.resultCard}>
        <div className={styles.resultCardTitle}>Total No of Questions</div>
        <div className={styles.resultCardResult}>
          {results.questions.length || "Nil"}
        </div>
      </div>
      <div className={styles.resultCard}>
        <div className={styles.resultCardTitle}> Wrong </div>
        <div className={styles.resultCardResult}>
          {(results.questions.length - results.result)}
        </div>
      </div>
      <div className={styles.resultCard}>
        <div className={styles.resultCardTitle}> Total Marks</div>
        <div className={styles.resultCardResult}>{(results.result) || "Nil"}</div>
      </div>
    </div>
  );
};

export default Result;
