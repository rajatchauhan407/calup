import { configureStore } from "@reduxjs/toolkit";
import multiplyReducer from "../features/basic-ops/multiply-slice";
import divideReducer from "../features/basic-ops/divide-slice";

export const store = configureStore({
    reducer:{
        multiply:multiplyReducer,
        divide: divideReducer
    }
});