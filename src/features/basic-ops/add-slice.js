import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {BACKEND_DEV_URL} from '../../config/api';

    const initialState = {
        questions: 
          [{
            firstOperand: 1,
            secondOperand: 1,
            operator: "+",
            answer: 1,
            level: 1,
            standard: 1,
          }],
          loading:false, 
          error:false,
          errorMessage:""
      };
export const fetchQuestionsAdd = createAsyncThunk('add/fetchQuestions',async(kind)=>{
            try{
                const response = await fetch(BACKEND_DEV_URL+'/multiply',{
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
            //    return {
            //     error:"Server Not Connected"
            //    }
                throw new Error({
                    message:"Server Not Connected"
                });
            }
    });


    const addSlice = createSlice({
        name:"addition",
        initialState,
        reducers:{
            // getQuestions(){

            // }
        },
        extraReducers: (builder)=>{
            builder.addCase(fetchQuestionsAdd.fulfilled,(state,action)=>{
                state.loading = false;
                state.questions = action.payload.questions;
            });
            builder.addCase(fetchQuestionsAdd.pending,(state,action)=>{
                state.loading = true;
            });
            builder.addCase(fetchQuestionsAdd.rejected,(state, action)=>{
                state.loading = false;
                state.error = true;
                state.errorMessage = "Server Not Connected";
            })
        }
    });

    export default addSlice.reducer;
