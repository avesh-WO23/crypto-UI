import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./FilterDrawer/FilterDrawerSlice";

export const mainStore = configureStore({
  reducer: { filterDrawer: filterSlice.reducer },
});
