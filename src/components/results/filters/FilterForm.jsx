import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';
import { useSearchParams } from 'react-router-dom';

import FormActions from '../common/FormActions';
import BalanceRange from './BalanceRange';
import CollapsibleAccordion from './CollapsibleAccordion';
import RiskScore from './RiskScore';

const LOCATIONS = [
  { country: 'USA', states: ['Alabama', 'Georgia', 'Missisipi'] },
  { country: 'Colombia', states: ['Amazonas', 'Antioquia', 'Arauca'] },
  { country: 'India', states: ['Gujarat', 'Punjab', 'Maharashtra'] },
];

const range = {
  min: 0,
  max: 6000,
};

const FilterForm = ({ handleDrawer }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filterForm, setFilterForm] = useState({
    balanceRange: [
      Number(searchParams.get('min')) || range.min,
      Number(searchParams.get('max')) || range.max,
    ],
    riskScores: searchParams.get('riskScores')?.split(',') || [],
  });

  const [selectedLocation, setSelectedLocation] = useState(() => {
    const getLengthStates = (country) => {
      return LOCATIONS.find((c) => c.country === country)?.states?.length;
    };
    return {
      isAll: function (country) {
        return this?.[country]?.states?.length === getLengthStates(country);
      },
      isPartial: function (country) {
        return (
          this?.[country]?.states?.length > 0 &&
          this?.[country]?.states?.length !== getLengthStates(country)
        );
      },
      ...JSON.parse(searchParams.get('states')),
    };
  });

  //Submit the Form
  const handleSubmit = () => {
    searchParams.set('min', filterForm?.balanceRange[0]);
    searchParams.set('max', filterForm?.balanceRange[1]);
    if (filterForm?.riskScores?.length) {
      searchParams.set('riskScores', filterForm.riskScores.join(','));
    }
    const locations = { ...selectedLocation };
    delete locations.isAll;
    delete locations.isPartial;

    searchParams.set('states', JSON.stringify(locations));

    setSearchParams(searchParams);
    handleDrawer('filters');
  };

  //Clear the Form
  const handleClear = () => {
    handleDrawer('filters');
    setFilterForm({
      ...filterForm,
      filters: { balanceRange: [range.min, range.max], riskScores: [] },
    });
    searchParams.delete('min');
    searchParams.delete('max');
    searchParams.delete('riskScores');
    searchParams.delete('states');
    setSearchParams(searchParams);
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
        <CloseIcon onClick={() => handleDrawer('filters')} />
      </Box>
      <BalanceRange
        filterForm={filterForm}
        setFilterForm={setFilterForm}
        range={range}
      />
      <Divider />
      <RiskScore filterForm={filterForm} setFilterForm={setFilterForm} />
      <Divider />
      <Box px={3} py={3} minHeight={280}>
        <Typography variant="h6">Locations</Typography>
        <CollapsibleAccordion
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      </Box>
      <FormActions handleSubmit={handleSubmit} handleClear={handleClear} />
    </>
  );
};

FilterForm.propTypes = {
  handleDrawer: PropTypes.func,
};

export default FilterForm;
