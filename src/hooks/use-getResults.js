import {React} from "react";
import { useSelector } from "react-redux";

const useGetResults = ()=>{
    const results = useSelector(state => state.answer);
    return {
        results
    }
};

export default useGetResults;