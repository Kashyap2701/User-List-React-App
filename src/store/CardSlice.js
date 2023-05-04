import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name:'card',
    initialState:{ user:{name:'', email:'', profileImg:''}},
    reducers:{
        renderDataToCard(state,action){
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.user.profileImg = action.payload.profileImg;
        }
    }
})

export const cardActions = cardSlice.actions;
export default cardSlice;