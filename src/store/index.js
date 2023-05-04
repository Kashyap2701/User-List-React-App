import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./CardSlice";
import hoverSlice from "./HoverSlice";

const store = configureStore({
    reducer:{
        'card': cardSlice.reducer,
        'hover':hoverSlice.reducer
    }
})

export default store;