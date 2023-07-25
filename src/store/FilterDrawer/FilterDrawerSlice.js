import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: false,
  reducers: {
    toggleDrawer(state) {
      state = !state;
      return state;
    },
  },
});

export const filterActions = filterSlice.actions;
