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
  'borderRadius': '8px',
  '& .MuiOutlinedInput-input.MuiInputBase-inputAdornedStart': {
    padding: '8px',
  },
});

const numberRegEx = /^[+0-9]*$/;
export default function BalanceRange({ filterForm, setFilterForm, range }) {
  const handleChange = (e, range) => {
    setFilterForm({ ...filterForm, balanceRange: range });
  };

  const { balanceRange } = filterForm;
  const handleRangeFromInput = (event, index) => {
    if (numberRegEx.test(event.target.value)) {
      setFilterForm((prev) => {
        let newRange = prev.balanceRange;
        newRange[index] =
          event.target.value === '' ? 0 : Number(event.target.value);

        return { ...prev, balanceRange: newRange };
      });
    }
  };

  const handleBlur = () => {
    setFilterForm((prev) => {
      let newRange = prev.balanceRange;
      if (newRange[0] > newRange[1]) {
        let temp = newRange[0];
        newRange[0] = newRange[1];
        newRange[1] = temp;
      }
      if (newRange[0] < range.min) {
        newRange[0] = range.min;
      } else if (newRange[1] > range.max) {
        newRange[1] = range.max;
      }
      return { ...prev, balanceRange: newRange };
    });
  };

  return (
    <Container sx={{ py: 0, px: 3 }}>
      <Typography variant="h6">Balance Range</Typography>
      <Box display={'flex'} pt={2} gap={3}>
        <InputRange
          id="outlined-adornment-amount"
          value={balanceRange[0]}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          onChange={(e) => handleRangeFromInput(e, 0)}
          onBlur={handleBlur}
        />
        <InputRange
          id="outlined-adornment-amount"
          value={
            balanceRange[1] === range.max
              ? '+' + balanceRange[1]
              : balanceRange[1]
          }
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          onChange={(e) => handleRangeFromInput(e, 1)}
          onBlur={handleBlur}
        />
      </Box>
      <Slider
        value={filterForm?.balanceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={range.min}
        max={range.max}
        sx={{ '&.MuiSlider-root': { pt: 5, pb: 4, px: 0 } }}
      />
    </Container>
  );
}

BalanceRange.propTypes = {
  filterForm: PropTypes.object,
  setFilterForm: PropTypes.func,
  range: PropTypes.object,
};
