import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

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
          loading:"true"
      };
export const fetchQuestionsAdd = createAsyncThunk('add/fetchQuestions',async(kind)=>{
            try{
                const response = await fetch("http://localhost:9000/multiply",{
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
                throw new Error({
                    error:error
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
                console.log(action.payload);
            })
        }
    });

    export default addSlice.reducer;
