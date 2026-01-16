import { createSlice } from "@reduxjs/toolkit";
// const initialState={
//    todos:[ {id:1, text:"Hi waqqaskhan"}
// ]
// }
const todoSlice=createSlice({
    name:"todo",
    initialState:{value:0},
    reducers:{
        add:(state,action)=>{
            state.value +=action.payload

        },
        subtract:(state,action)=>{
            state.value -=action.payload

        }

    }
})
//how to  ✅ export actions
export const {add,subtract}=todoSlice.actions
//how to export reducer
export default todoSlice.reducer