import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { filterActions } from 'store/filter-drawer/filterSlice';

import FormActions from '../common/FormActions';
import BalanceRange from './BalanceRange';
import CollapsibleAccordion from './CollapsibleAccordion';
import RiskScore from './RiskScore';

const FilterForm = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.filterDrawer);
  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        px={3}
        py={3}
        position={'sticky'}
        top={0}
        bgcolor={'#fff'}
        zIndex={1}
      >
        <Typography variant="h6">Filters</Typography>
        <CloseIcon
          onClick={() =>
            dispatch(filterActions.toggleDrawer(sort ? 'sort' : 'filters'))
          }
        />
      </Box>
      <BalanceRange />
      <Divider />
      <RiskScore />
      <Divider />
      <Box px={3} py={3} minHeight={280}>
        <Typography variant="h6">Locations</Typography>
        <CollapsibleAccordion />
      </Box>
      <FormActions />
    </>
  );
};

export default FilterForm;
