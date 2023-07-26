import React from 'react';

import { styled } from '@mui/material';
import { PropTypes } from 'prop-types';

const OutlineBtn = styled('button')({
  border: '1px solid #0064CC',
  borderRadius: '8px',
  padding: '8px 16px',
  backgroundColor: 'transparent',
  color: '#0064CC',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 600,
  cursor: 'pointer',
  textAlign: 'center',
});

const OutlineButton = ({ children, style, ...props }) => {
  return (
    <OutlineBtn style={style} {...props}>
      {children}
    </OutlineBtn>
  );
};

OutlineButton.propTypes = {
  children: PropTypes.element,
  style: PropTypes.object,
};

export default OutlineButton;
