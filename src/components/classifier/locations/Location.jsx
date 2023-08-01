import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import LocationMenu from './LocationMenu';
import StackedBarChart from './StackedChart';

const StaticMenu = [
  'All locations',
  'USA',
  'India',
  'Greece',
  'Colombia',
  'Israel',
  'Germany',
];

const Location = () => {
  const [country, setCountry] = useState(StaticMenu[0]);
  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        px={2}
        pt={2}
      >
        <Typography variant="h6">Locations</Typography>
        <LocationMenu
          country={country}
          setCountry={setCountry}
          StaticMenu={StaticMenu}
        />
      </Box>
      <StackedBarChart country={country} setCountry={setCountry} />
    </>
  );
};

export default Location;
