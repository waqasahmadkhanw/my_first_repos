import { createSlice } from "@reduxjs/toolkit";
const initialState=[{id:1,}]
const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        add:(state,action)=>{

        },
        subtract:(state,action)=>{

        }

    }
})
//how to  ✅ export actions
export const {add,subtract}=todoSlice.actions
//how to export reducer
export default todoSlice.reducer