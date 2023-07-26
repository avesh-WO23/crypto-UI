import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filter-drawer/filterDrawerSlice";

export const mainStore = configureStore({
  reducer: { filterDrawer: filterSlice.reducer },
});
