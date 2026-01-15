import {configureStore} from"@reduxjs/toolkit";
import todoReduce from "./.todoSlice.js"
export const store=configureStore({
    reducer:{
        todo:todoReduce

    }
}) 