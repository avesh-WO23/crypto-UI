import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Typography, styled } from '@mui/material';
import { PropTypes } from 'prop-types';

import ReportIcon from '../../assets/svg/Report-blue.svg';

const PopperContainer = styled('div')({
  position: 'fixed',
  bottom: '20px',
  width: 'calc(100% - 32px)',
});

const PopperBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: '12px 16px 12px 8px;',
  boxShadow:
    '0px 6px 40px -4px rgba(145, 158, 171, 0.72), 0px 0px 2px 0px rgba(145, 158, 171, 0.16)',
  borderRadius: '8px',
  backgroundColor: '#fff',
  justifyContent: 'space-between',
  border: '1px solid #D1E4F9',
});

const ReportButton = styled(Button)({
  'padding': '0 16px 0 30px',
  'fontSize': '12px',
  'textTransform': 'capitalize',
  'fontWeight': 600,
  'color': '#0064CC',
  'position': 'relative',

  '&:before': {
    content: '""',
    backgroundImage: `url(${ReportIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',
    width: '24px',
    height: '24px',
    backgroundSize: '24px',
    position: 'absolute',
    left: '0',
  },
});

const CloseButton = styled('button')({
  color: '#5E6974',
  border: 'none',
  borderLeft: '1px solid #E7ECF1',
  background: 'none',
  height: '24px',
});

const SelectedFile = styled(Typography)({
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '24px',
});

const SelectedValue = styled('span')({
  backgroundColor: '#0064CC',
  color: '#fff',
  width: '40px',
  padding: '8px 15px 8px 14px',
  borderRadius: '8px',
});

const ReportPopper = ({ selectedBalance, setSelectedBalance }) => {
  return (
    <PopperContainer>
      <PopperBox>
        <SelectedFile>
          <SelectedValue>{selectedBalance?.length}</SelectedValue> Selected
        </SelectedFile>
        <ReportButton>Generate Report</ReportButton>
        <CloseButton onClick={() => setSelectedBalance([])}>
          <CloseIcon />
        </CloseButton>
      </PopperBox>
    </PopperContainer>
  );
};

ReportPopper.propTypes = {
  selectedBalance: PropTypes.array,
  setSelectedBalance: PropTypes.func,
};
export default ReportPopper;
