import React, { useState } from 'react';

import { Box, styled } from '@mui/material';

import { SectionHeading } from '../../common/styled/SectionHeading';
import LocationMenu from './LocationMenu';
import StackedBarChart from './StackedChart';

const LocationContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 16px 0 16px',
});

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
      <LocationContainer>
        <SectionHeading variant="h2">Locations</SectionHeading>
        <LocationMenu
          country={country}
          setCountry={setCountry}
          StaticMenu={StaticMenu}
        />
      </LocationContainer>
      <StackedBarChart country={country} setCountry={setCountry} />
    </>
  );
};

export default Location;
