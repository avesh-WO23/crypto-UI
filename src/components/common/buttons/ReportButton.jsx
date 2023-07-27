import React from 'react';

import DescriptionIcon from '@mui/icons-material/Description';
import Button from '@mui/material/Button';
import { PropTypes } from 'prop-types';

const buttonSx = {
  'px': 2.2,
  'py': 1.2,
  'borderRadius': '50px',
  'color': '#fff',
  'backgroundColor': (theme) => theme.palette.primary.main,
  'fontSize': '12px',
  'textTransform': 'capitalize',
  'fontWeight': 600,
  'boxShadow': '0px 8px 24px 0px rgba(0, 100, 204, 0.32)',
  '&:hover': {
    color: '#fff',
    backgroundColor: (theme) => theme.palette.primary.main,
  },
};

const ReportButton = ({ sx }) => {
  return (
    <Button
      variant="text"
      sx={{
        textTransform: 'capitalize',
        fontWeight: 600,
        ...buttonSx,
        ...sx,
      }}
      startIcon={<DescriptionIcon />}
    >
      Generate Report
    </Button>
  );
};

ReportButton.propTypes = {
  sx: PropTypes.object,
};

export default ReportButton;
