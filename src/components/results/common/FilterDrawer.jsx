import * as React from 'react';

import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';

import Drawer from 'components/common/Drawer';
import FilterForm from 'components/results/filters/FilterForm';
import SortForm from 'components/results/sort/SortForm';
import { filterActions } from 'store/filter-drawer/filterSlice';

export default function FilterDrawer() {
  const dispatch = useDispatch();
  const { sort, filters } = useSelector((state) => state.filterDrawer);

  const toggleDrawer = () =>
    dispatch(filterActions.toggleDrawer(sort ? 'sort' : 'filters'));

  return (
    <Drawer
      open={sort || filters}
      toggleDrawer={toggleDrawer}
      maxHeight={'95%'}
    >
      <Box role="presentation">
        {filters && <FilterForm />}
        {sort && <SortForm />}
      </Box>
    </Drawer>
  );
}
