import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  dropDownVisible: false,
};

const dropDownSlice = createSlice({
  name: "dropDown",
  initialState: INITIAL_STATE,
  reducers: {
    toggle(state) {
      state.dropDownVisible = !state.dropDownVisible;
    },
  },
});

export const dropDownAction = dropDownSlice.actions;
export default dropDownSlice;
