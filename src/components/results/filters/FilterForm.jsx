import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { filterActions } from 'store/filter-drawer/filterSlice';

import FormActions from '../common/FormActions';
import BalanceRange from './BalanceRange';
import CollapsibleAccordion from './CollapsibleAccordion';
import RiskScore from './RiskScore';

const FilterForm = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.filterDrawer);
  const [searchParams, setSearchParams] = useSearchParams();

  const [filterForm, setFilterForm] = useState({
    balanceRange: [
      searchParams.get('min') || 30,
      searchParams.get('max') || 40,
    ],
    riskScores: searchParams.get('riskScores')?.split(',') || [],
  });

  //Submit the Form
  const handleSubmit = () => {
    searchParams.append('min', filterForm?.balanceRange[0]);
    searchParams.append('max', filterForm?.balanceRange[1]);
    searchParams.append(
      'riskScores',
      filterForm?.riskScores?.length ? filterForm.riskScores.join(',') : []
    );

    setSearchParams(searchParams);
    dispatch(filterActions.toggleDrawer(sort ? 'sort' : 'filters'));
  };

  //Clear the Form
  const handleClear = () => {
    setFilterForm({
      ...filterForm,
      filters: { balanceRange: [30, 40], riskScores: [] },
    });
    searchParams.delete('min');
    searchParams.delete('max');
    searchParams.delete('riskScores');
  };

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
      <BalanceRange filterForm={filterForm} setFilterForm={setFilterForm} />
      <Divider />
      <RiskScore filterForm={filterForm} setFilterForm={setFilterForm} />
      <Divider />
      <Box px={3} py={3} minHeight={280}>
        <Typography variant="h6">Locations</Typography>
        <CollapsibleAccordion />
      </Box>
      <FormActions handleSubmit={handleSubmit} handleClear={handleClear} />
    </>
  );
};

FilterForm.propTypes = {
  filterState: PropTypes.object,
  setFilterState: PropTypes.func,
};

export default FilterForm;
