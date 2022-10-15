import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BACKEND_DEV_URL} from '../../config/api';

const initialState = {
    questions:[{
      firstOperand: 1,
      secondOperand: 1,
      operator: "/",
      answer: 1,
      level: 1,
      standard: 1,
    }],
    loading:false, 
    error:false,
    errorMessage:""
}

export const fetchQuestionsDivide = createAsyncThunk('divide/fetchQuestions',async (kind)=>{
    try{const response = await fetch(BACKEND_DEV_URL+"/multiply", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kind: kind,
        }),
      });
      return await response.json();
    }catch(error){
      throw new Error(JSON.stringify({
        message:"Serve Not Connected"
      }));
      }
});
const divideSlice = createSlice({
    name:"divide",
    initialState:initialState,
    reducers:{

    },
    extraReducers: (builder)=>{
        builder.addCase(fetchQuestionsDivide.fulfilled,(state,action)=>{
          const {questions} = action.payload;
          state.loading = false;
          state.questions = questions;
            // state.questions.push(action.payload.questions);
        });
        builder.addCase(fetchQuestionsDivide.pending,(state, action)=>{
          state.loading = true;
        });
        builder.addCase(fetchQuestionsDivide.rejected, (state, action)=>{
          const {error} = action;
          state.loading = false;
          state.error = true;
          state.errorMessage = JSON.parse(error.message).message;
          // console.log(JSON.parse(error.message).message);
        });
    }
});

export default divideSlice.reducer;