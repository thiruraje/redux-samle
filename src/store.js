import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../src/reducer";

const reducer = {
  counter: counterReducer,
};

const store = configureStore({
  reducer,
});

export default store;
