import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

const Theme = createSlice({
  name: "theme",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    changeColour: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeColour } = Theme.actions;
export default Theme.reducer;
