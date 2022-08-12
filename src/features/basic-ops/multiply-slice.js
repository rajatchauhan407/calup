import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: 
    [{
      firstOperand: 1,
      secondOperand: 1,
      operator: "×",
      answer: 1,
      level: 1,
      standard: 1,
    }]
};

const multiplySlice = createSlice({
  name: "multiply",
  initialState,
  reducers: {
    getQuestions(state, action) {
      state.questions = action.payload.questions;
    },
  },
});

export const getMultiplicationQuestions = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:9000/multiply", {
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
      const data = await sendRequest();
      dispatch(multiplySlice.actions.getQuestions(data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const { getQuestions } = multiplySlice.actions;
export default multiplySlice.reducer;
