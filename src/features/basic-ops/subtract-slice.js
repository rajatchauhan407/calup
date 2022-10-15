import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { BACKEND_DEV_URL } from '../../config/api';

let initialState = {
    questions: 
          [{
            firstOperand: 1,
            secondOperand: 1,
            operator: "-",
            answer: 0,
            level: 1,
            standard: 1,
          }],
          loading:false, 
          error:false,
          errorMessage:""
}

export const fetchQuestionsSubtract = createAsyncThunk('subtract/fetchQuestions',async (kind)=>{
    try{
        const response = await fetch(BACKEND_DEV_URL+"/multiply",{
                method:"POST",
                mode:"cors",
                credentials: "include",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    kind:kind
                })
        }); 
        return response.json();
        }catch(error){
            throw new Error(JSON.stringify({
            message:"Server Not Connected"
        }));
    }
});
 
const subtractSlice = createSlice({
    name:"subtraction",
    initialState:initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchQuestionsSubtract.fulfilled,(state,action)=>{
            state.loading = false;
            state.questions = action.payload.questions;
        });
        builder.addCase(fetchQuestionsSubtract.pending, (state, action)=>{
            state.loading = true;
        });
        builder.addCase(fetchQuestionsSubtract.rejected,(state, action)=>{
            const {error} = action;
            state.loading = false;
            state.error = true;
            state.errorMessage = JSON.parse(error.message).message;
        });
    }
});

export default subtractSlice.reducer;