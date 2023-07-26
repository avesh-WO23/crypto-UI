import React from 'react';

import { styled } from '@mui/material';
import PropTypes from 'prop-types';

const SeverityText = styled('label')({
  borderRadius: '8px',
  padding: '5px 16px',
  fontWeight: 'bold',
  fontSize: '14px',
  textTransform: 'capitalize',
});

const SeverityLabel = ({ text, bgColor, color, sx, ...props }) => {
  return (
    <SeverityText sx={{ bgcolor: bgColor, color: color, ...sx }} {...props}>
      {text}
    </SeverityText>
  );
};

SeverityLabel.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  sx: PropTypes.object,
};

export default SeverityLabel;
