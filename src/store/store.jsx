import todoSlice from "../slice/TodoSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store=configureStore({
    reducer:{
        todo:todoSlice
    }
})

