import * as React from 'react';

import { InputAdornment, OutlinedInput, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { Container } from 'components/common/Container';
import { SectionHeading } from 'components/common/styled/SectionHeading';

const InputRange = styled(OutlinedInput)({
  '& .MuiOutlinedInput-input.MuiInputBase-inputAdornedStart': {
    padding: '8px',
  },
});

export default function BalanceRange() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ py: 0, px: 3 }}>
      <SectionHeading>Balance Range</SectionHeading>
      <Box display={'flex'} pt={2} gap={3}>
        {value.map((val, i) => {
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
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        sx={{ '&.MuiSlider-root': { pt: 5, pb: 4, px: 0 } }}
      />
    </Container>
  );
}
