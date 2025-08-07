import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import formSlice from "./slice/formSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formSlice,        
  },
});

export default store;
