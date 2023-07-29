import React from 'react';

import { useTheme } from '@emotion/react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { PropTypes } from 'prop-types';

const CustomButton = ({
  children,
  sx,
  variant,
  isLoading,
  loaderColor,
  startIcon,
  endIcon,
  ...props
}) => {
  const theme = useTheme();
  const color = variant === 'contained' ? '#fff' : theme.palette.primary.main;

  return (
    <Button
      sx={{ minHeight: 36.5, borderRadius: 2, ...sx }}
      variant={variant || 'outlined'}
      startIcon={isLoading ? '' : startIcon}
      endIcon={isLoading ? '' : endIcon}
      // endIcon={<SendIcon />}

      {...props}
    >
      {isLoading ? (
        <CircularProgress size={20} sx={{ color: loaderColor || color }} />
      ) : (
        children
      )}
    </Button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  sx: PropTypes.object,
  isLoading: PropTypes.bool,
  loaderColor: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
};

export default CustomButton;
