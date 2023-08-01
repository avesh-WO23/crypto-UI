import React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from '@mui/material/Stack';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

const headerSx = {
  backgroundColor: (theme) => theme.palette.grey[200],
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 1,
};

const MobileHeader = ({ endSection }) => {
  const navigate = useNavigate();
  return (
    <Stack direction={'row'} px={2} py={2} sx={headerSx} height={'68.5px'}>
      <ArrowBackIcon
        sx={{ color: (theme) => theme.palette.primary.dark }}
        onClick={() => navigate(-1)}
      />
      {endSection}
    </Stack>
  );
};

MobileHeader.propTypes = {
  endSection: PropTypes.node,
};

export default MobileHeader;
