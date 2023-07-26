import React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, styled } from '@mui/material';

const BackBtn = styled(Button)({
  width: 'fit-content',
  display: 'flex',
  justifyContent: 'flex-start',
  padding: 0,
  color: '#121E28',
});

const BackButton = () => {
  return (
    <BackBtn>
      <ArrowBackIcon />
    </BackBtn>
  );
};

export default BackButton;
