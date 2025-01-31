import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
export const objectGetSlice = createSlice({
  name: "object",
  initialState,
  reducers: {
    saveObjects: (state, action) => {
      return [...state, action.payload];
    },
    deleteList: (state, action) => {
      return state.filter((item) => !action.payload.includes(item?.id));
    },
  },
});

export const { saveObjects, deleteList } = objectGetSlice.actions;
export default objectGetSlice.reducer;
