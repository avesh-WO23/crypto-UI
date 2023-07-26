import { configureStore } from '@reduxjs/toolkit';

import { filterSlice } from './filter-drawer/filterSlice';

export const mainStore = configureStore({
  reducer: { filterDrawer: filterSlice.reducer },
});
