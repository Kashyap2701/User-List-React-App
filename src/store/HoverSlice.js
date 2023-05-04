import { createSlice } from "@reduxjs/toolkit";

const hoverSlice = createSlice({
    name:'card',
    initialState:{ isHover:false },
    reducers:{
        toggleHover(state){
            state.isHover = !state.isHover;
        }
    }
})

export const hoverActions = hoverSlice.hoverActions;
export default hoverSlice;