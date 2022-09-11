// redux store and redux are kind of used interchange-ably. they both are meant for a container of sorts for JS apps. 
// stores the whole state of the app in an IMMUTABLE object tree. one single source of truth 

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";





export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});