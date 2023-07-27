import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import DescriptionIcon from '@mui/icons-material/Description';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';

const boxSx = {
  position: 'fixed',
  bottom: '20px',
  width: 'calc(100% - 32px)',
  display: 'flex',
  alignItems: 'center',
  p: 1.5,
  boxShadow:
    '0px 6px 40px -4px rgba(145, 158, 171, 0.72), 0px 0px 2px 0px rgba(145, 158, 171, 0.16)',
  borderRadius: '8px',
  backgroundColor: '#fff',
  justifyContent: 'space-between',
  border: (theme) => `1px solid ${theme.palette.primary.light}`,
};

const counterSx = {
  backgroundColor: (theme) => theme.palette.primary.main,
  color: '#fff',
  px: 1.5,
  py: 1,
  mr: 1,
  borderRadius: '8px',
};

const ReportPopper = ({ selectedBalance, setSelectedBalance }) => {
  return (
    <Box sx={boxSx}>
      <Typography variant="h6">
        <Typography variant="span" sx={{ ...counterSx }}>
          {selectedBalance?.length}
        </Typography>
        Selected
      </Typography>
      <Button
        variant="text"
        sx={{
          textTransform: 'capitalize',
          fontWeight: 600,
        }}
        startIcon={<DescriptionIcon />}
      >
        Generate Report
      </Button>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{
          color: (theme) => theme.palette.grey[100],
        }}
      />
      <CloseIcon onClick={() => setSelectedBalance([])} />
    </Box>
  );
};

ReportPopper.propTypes = {
  selectedBalance: PropTypes.array,
  setSelectedBalance: PropTypes.func,
};
export default ReportPopper;
