import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filter-drawer/FilterDrawerSlice";

export const mainStore = configureStore({
  reducer: { filterDrawer: filterSlice.reducer },
});
