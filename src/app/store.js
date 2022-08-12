import { configureStore } from "@reduxjs/toolkit";
import multiplyReducer from "../features/basic-ops/multiply-slice";
import divideReducer from "../features/basic-ops/divide-slice";
import answerReducer from "../features/answer/answer-slice";
import addReducer from "../features/basic-ops/add-slice";
import subtractReducer from "../features/basic-ops/subtract-slice";

export const store = configureStore({
    reducer:{
        multiply:multiplyReducer,
        divide: divideReducer,
        answer: answerReducer,
        add: addReducer,
        subtract:subtractReducer
    }
});