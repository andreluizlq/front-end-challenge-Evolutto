import { configureStore } from "@reduxjs/toolkit";
import clientDataReducer from "./slices/clientDataSlice";

export const store = configureStore({
  reducer: {
    clientData: clientDataReducer,
  },
});
