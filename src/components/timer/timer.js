import React,{useEffect, useState} from 'react';
import useQuestionHandler from '../../hooks/useQuestionHandler';
import styles from "./timer.module.css";
let timerInterval;
const Timer = (props)=>{
    const [total,setTotal] = useState(props.time);
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    
    // retrieving function to stop test
    const {stopTestAfterTimerCompletion} = useQuestionHandler();

    //function for countdown 
    const startTimerHandler = () => {
     timerInterval  = setInterval(()=>{
            setTotal((total)=>{
                total = total -1;
                if(total > 0){
                const seconds = Math.floor((total)%60);
                const minutes = Math.floor((total/60))
                setSeconds(seconds>9?seconds:'0'+seconds);
                setMinutes(minutes>9?minutes: '0' + minutes);
                props.newTime(total);
                return total;
            }else if(total === 0){
                clearInterval(timerInterval);
                stopTestAfterTimerCompletion();
            }
            }); 
            // console.log(total); // strange behaviour !!! Value of total here doesn't change while inside the component scope it is changing and in jsx as well it can be received but within set interval scope it remains the same..........
          },1000);
        }
    // used to start the timer in parent by lifting the state up
    useEffect(()=>{
                if(props.startTimer){
                    setTotal(props.time);
                    startTimerHandler();
                }else{
                    clearInterval(timerInterval);
                }
    },[props.startTimer, props.time]); 
        
    return (
        <>
        <div className={styles.container}>
            <div className={styles.hours}>
                    Timer
            </div>
            <div className={styles.hours}>
            {minutes  || '00'}
            </div>
            <div className={styles.hours}>
                {seconds || '00'}
            </div>
        </div>
        </>
    )
}

export default Timer;