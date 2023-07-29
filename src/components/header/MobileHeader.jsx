import React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CustomButton from 'components/common/buttons/CustomButton';
import { content } from 'static/backwardSection';
import { filterActions } from 'store/filter-drawer/filterSlice';

const helpSx = {
  background: (theme) => theme.palette.primary.light,
  color: (theme) => theme.palette.primary.main,
  padding: '2px',
  width: '24px',
  height: '24px',
  borderRadius: '50%',
};

const headerSx = {
  backgroundColor: (theme) => theme.palette.grey[200],
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 1,
};

const filterSx = {
  '& .MuiButton-startIcon': {
    mr: 0.5,
  },
  'borderRadius': 2.5,
};

const MobileHeader = ({ isFilters, isHelp }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toggleDrawer } = filterActions;
  const { filterButtons } = content;
  return (
    <Stack direction={'row'} px={2} py={2} sx={headerSx} height={'68.5px'}>
      <ArrowBackIcon
        sx={{ color: (theme) => theme.palette.primary.dark }}
        onClick={() => navigate(-1)}
      />
      <Box display={'flex'} alignItems={'center'} gap={1}>
        {isFilters &&
          filterButtons.map((btn, i) => (
            <CustomButton
              key={`${btn.text}-${i}`}
              sx={filterSx}
              startIcon={<img src={btn.icon} alt="filter" />}
              onClick={() => dispatch(toggleDrawer(btn.text.toLowerCase()))}
            >
              {btn.text}
            </CustomButton>
          ))}
        {isHelp && <HelpRoundedIcon sx={helpSx} />}
      </Box>
    </Stack>
  );
};

MobileHeader.propTypes = {
  isFilters: PropTypes.bool,
  isHelp: PropTypes.bool,
};

export default MobileHeader;
