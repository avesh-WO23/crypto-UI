import Grid from '@mui/material/Grid';
import { PropTypes } from 'prop-types';

export const Container = ({ children, sx, ...props }) => {
  return (
    <Grid sx={{ px: 2, py: 3, ...sx }} {...props} container>
      {children}
    </Grid>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
