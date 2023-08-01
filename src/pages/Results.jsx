import React, { useState } from 'react';

import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import Box from '@mui/material/Box';

import CustomButton from 'components/common/buttons/CustomButton';
import MobileHeader from 'components/header/MobileHeader';
import FilterDrawer from 'components/results/common/FilterDrawer';
import { content } from 'static/backwardSection';

import SearchedResults from '../components/results/SearchedResults';

const filterSx = {
  '& .MuiButton-startIcon': {
    mr: 0.5,
  },
  'borderRadius': 2.5,
};

const helpSx = {
  background: (theme) => theme.palette.primary.light,
  color: (theme) => theme.palette.primary.main,
  padding: '2px',
  width: '24px',
  height: '24px',
  borderRadius: '50%',
};

const Results = () => {
  const { filterButtons } = content;

  const [drawer, setDrawer] = useState({
    sort: false,
    filters: false,
  });

  const handleDrawer = (name) => {
    setDrawer((prev) => ({
      ...prev,
      [name.toLowerCase()]: !prev[name.toLowerCase()],
    }));
  };

  return (
    <>
      <MobileHeader
        endSection={
          <Box display={'flex'} alignItems={'center'} gap={1}>
            {filterButtons.map((btn, i) => (
              <CustomButton
                key={`${btn.text}-${i}`}
                sx={filterSx}
                startIcon={<img src={btn.icon} alt="filter" />}
                onClick={() => handleDrawer(btn.text)}
              >
                {btn.text}
              </CustomButton>
            ))}
            <HelpRoundedIcon sx={helpSx} />
          </Box>
        }
      />
      <FilterDrawer drawer={drawer} handleDrawer={handleDrawer} />
      <SearchedResults />
    </>
  );
};

export default Results;
