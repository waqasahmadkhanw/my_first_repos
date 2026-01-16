import {configureStore} from"@reduxjs/toolkit";
//import todoReduce from "./.todoSlice.js"//
import todoReducer from "../features/todos/todoSlice.js"

export const store=configureStore({
    reducer:{
        todo:todoReducer

    }
}) 