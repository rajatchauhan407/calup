import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState = {
    questions:[],
    loading: 'idle'
}

export const fetchQuestions = createAsyncThunk('divide/fetchQuestions',async ()=>{
    try{const response = await fetch("http://localhost:9000/multiply", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kind: "multiply",
        }),
      });
      return await response.json();}catch(error){
        return error;
      }
});
const divideSlice = createSlice({
    name:"divide",
    initialState:initialState,
    reducers:{

    },
    extraReducers: (builder)=>{
        builder.addCase(fetchQuestions.fulfilled,(state,action)=>{
          const {questions} = action.payload;
          state.loading = "succed";
          state.questions = questions;
            // state.questions.push(action.payload.questions);
        });
    }
});

export default divideSlice.reducer;