import { createSlice } from "@reduxjs/toolkit";
import {BACKEND_DEV_URL} from '../../config/api';
const initialState = {
  questions: 
    [{
      firstOperand: 1,
      secondOperand: 1,
      operator: "×",
      answer: 1,
      level: 1,
      standard: 1,
    }],
    loading:false, 
    error:false,
    errorMessage:""
};

const multiplySlice = createSlice({
  name: "multiply",
  initialState,
  reducers: {
    getQuestions(state, action) {
      state.loading = false;
      state.questions = action.payload.questions;
    },
    requestPending(state, action){
      state.loading = action.payload;
    },
    requestRejected(state, action){
      state.loading = false;
      state.error = true;
      state.errorMessage = action.payload.message;
    }
  },
});

export const getMultiplicationQuestions = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(BACKEND_DEV_URL+"/multiply", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kind: "multiply",
        }),
      });
      return response.json();
    };
    try {
      dispatch(multiplySlice.actions.requestPending(true));
      const data = await sendRequest();
      dispatch(multiplySlice.actions.getQuestions(data));
      dispatch(multiplySlice.actions.requestPending(false));
    } catch (error) {
      dispatch(multiplySlice.actions.requestRejected({
        message:"Server Not Connected"
      }))
    }
  };
};
export const { getQuestions } = multiplySlice.actions;
export default multiplySlice.reducer;
