import { configureStore } from "@reduxjs/toolkit";
import counterSlicetwo from "../slice/counterSlicetwo";
import objectGetSlice from "../slice/objectGetSlice";
// import counterReduces from "../slice/counterSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReduces,
    countertwo: counterSlicetwo,
    object: objectGetSlice,
  },
});
