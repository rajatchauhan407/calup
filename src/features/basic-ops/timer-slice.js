import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
    name:'timer',
    initialState:120,
    reducers:{
        getTimer(state,action){
            console.log(action.payload);
            state = action.payload * 60;
            return state;
        }
    }
});
export const {getTimer} = timerSlice.actions;
export default timerSlice.reducer;