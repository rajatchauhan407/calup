import React,{useState} from 'react';

const useTimer = (time)=>{
    let timerInterval;
    const [total,setTotal] = useState(time);
    // const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    
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
                return total;
            }
            }); 
            // console.log(total); // strange behaviour !!! Value of total here doesn't change while inside the component scope it is changing and in jsx as well it can be received but within set interval scope it remains the same..........
          },1000);
        }
        
return {
    minutes,
    seconds,
    timerInterval,
    startTimerHandler,
    total
    }
}

export default useTimer;