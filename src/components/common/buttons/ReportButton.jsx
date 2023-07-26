import React from 'react';

import { Button, styled } from '@mui/material';
import { PropTypes } from 'prop-types';

import ReportIcon from '../../../assets/svg/Report.svg';

const GenerateButton = styled(Button)({
  'padding': '10px 10px 10px 45px',
  'borderRadius': '50px',
  'color': '#fff',
  'backgroundColor': '#0064CC',
  'backgroundImage': `url(${ReportIcon})`,
  'backgroundRepeat': 'no-repeat',
  'backgroundPosition': 'left 15px center',
  'fontSize': '12px',
  'textTransform': 'capitalize',
  'fontWeight': 600,
  'boxShadow': '0px 8px 24px 0px rgba(0, 100, 204, 0.32)',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#0064CC',
  },
});

const ReportButton = ({ sx }) => {
  return <GenerateButton sx={sx}>Generate report</GenerateButton>;
};

ReportButton.propTypes = {
  sx: PropTypes.object,
};

export default ReportButton;
