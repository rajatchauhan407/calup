import {createSlice} from "@reduxjs/toolkit";
import multiplySlice from "../basic-ops/multiply-slice";

const initialAnswerState= {
    questions:[],
    result:null,
    typeOfOperation:''
};

const answerSlice = createSlice({
    name:"answers",
    initialState:initialAnswerState,
    reducers:{
        recordedAnswers(state, action){
           state.questions.push(action.payload);
           return state;
        },
        getResults(state, action){
            return state = action.payload;
        },
        renewAnswers(state, action){
            state = initialAnswerState;
            return state;
        }
    }
});

export const {recordedAnswers,getResults, renewAnswers} = answerSlice.actions;
export default answerSlice.reducer;