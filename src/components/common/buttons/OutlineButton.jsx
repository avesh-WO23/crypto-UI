import React from 'react';

import Button from '@mui/material/Button';
import { PropTypes } from 'prop-types';

const buttonSx = {
  border: (theme) => `1px solid ${theme.palette.primary.main}`,
  borderRadius: 2,
  px: 2,
  py: 1,
  backgroundColor: 'transparent',
  color: (theme) => theme.palette.primary.main,
  fontStyle: 'normal',
  fontWeight: 600,
  cursor: 'pointer',
  textAlign: 'center',
};

const OutlineButton = ({ children, sx, ...props }) => {
  return (
    <Button sx={{ ...buttonSx, ...sx }} {...props}>
      {children}
    </Button>
  );
};

OutlineButton.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};

export default OutlineButton;
