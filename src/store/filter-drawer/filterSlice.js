import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: false,
  filters: false,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    toggleDrawer(state, { payload }) {
      state = {
        ...initialState,
        [payload]: !state[payload],
      };
      return state;
    },
  },
});

export const filterActions = filterSlice.actions;
