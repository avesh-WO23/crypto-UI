import { Typography, styled } from '@mui/material';
import { PropTypes } from 'prop-types';

const Heading = styled(Typography)({
  fontSize: '16px',
  fontWeight: 600,
  color: '#121E28',
});

export const SectionHeading = ({ children, variant, sx, ...props }) => {
  return (
    <Heading sx={sx} variant={variant} {...props}>
      {children}
    </Heading>
  );
};

SectionHeading.propTypes = {
  children: PropTypes.element,
  variant: PropTypes.string,
  sx: PropTypes.object,
};
