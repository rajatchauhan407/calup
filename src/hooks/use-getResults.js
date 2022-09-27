import React from "react";
import { useSelector } from "react-redux";

const useGetResults = ()=>{
    const results = useSelector(state => {
        console.log(state.answer)
        return state.answer
    }
        );
    return {
        results
    }
};

export default useGetResults;