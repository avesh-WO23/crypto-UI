import * as React from 'react';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';

import { Container } from 'components/common/Container';

const InputRange = styled(OutlinedInput)({
  '& .MuiOutlinedInput-input.MuiInputBase-inputAdornedStart': {
    padding: '8px',
  },
});

export default function BalanceRange({ filterForm, setFilterForm }) {
  const handleChange = (e, range) => {
    setFilterForm({ ...filterForm, balanceRange: range });
  };
  return (
    <Container sx={{ py: 0, px: 3 }}>
      <Typography variant="h6">Balance Range</Typography>
      <Box display={'flex'} pt={2} gap={3}>
        {filterForm?.balanceRange.map((val, i) => {
          return (
            <InputRange
              id="outlined-adornment-amount"
              key={`${val}-${i}`}
              value={val}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          );
        })}
      </Box>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={filterForm?.balanceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        sx={{ '&.MuiSlider-root': { pt: 5, pb: 4, px: 0 } }}
      />
    </Container>
  );
}

BalanceRange.propTypes = {
  filterForm: PropTypes.object,
  setFilterForm: PropTypes.func,
};
