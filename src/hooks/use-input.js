import {React, useState} from 'react';
const useInput = (validate)=>{
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validate(enteredValue);

    const enteredValueHandler = (event) => {
        setEnteredValue(event.target.value);
      };

    const enteredValueBlurHandler = () => {
        setIsTouched(true);
      };

    
    const reset = ()=>{
        setEnteredValue("");
        setIsTouched("");
    }
    return {
        value: enteredValue,
        isTouched: isTouched,
        reset: reset,
        inputBlurHandler: enteredValueBlurHandler,
        inputHandler: enteredValueHandler, 
        isValid: isValid
    }
}
export default useInput;