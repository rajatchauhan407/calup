import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

let initialState = {
    questions:[],
    loading:true,
    result:null,
    errorMessage:null
}

export const fetchQuestionsSubtract = createAsyncThunk('subtract/fetchQuestions',async (kind)=>{
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
        builder.addCase(fetchQuestionsSubtract.rejected,(state, action)=>{
            state.loading = false;
            state.errorMessage = action.payload.error;
        });

    }
});

export default subtractSlice.reducer;