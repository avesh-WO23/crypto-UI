import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';

export const SectionHeading = ({ children, variant, sx, ...props }) => {
  return (
    <Typography
      sx={{
        fontSize: '16px',
        fontWeight: 600,
        color: (theme) => theme.palette.primary.dark,
        ...sx,
      }}
      variant={variant}
      {...props}
    >
      {children}
    </Typography>
  );
};

SectionHeading.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.string,
  sx: PropTypes.object,
};
