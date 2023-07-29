import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { PropTypes } from 'prop-types';

function Drawer({
  children,
  open,
  toggleDrawer,
  anchor,
  sx,
  maxHeight,
  ...props
}) {
  return (
    <SwipeableDrawer
      anchor={anchor || 'bottom'}
      open={open}
      onOpen={toggleDrawer}
      onClose={toggleDrawer}
      sx={{
        '& .MuiPaper-root': { maxHeight },
        '& .MuiPaper-elevation.MuiPaper-elevation16': {
          borderRadius: '8px 8px 0 0',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </SwipeableDrawer>
  );
}

Drawer.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  props: PropTypes.object,
  anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  sx: PropTypes.object,
  maxHeight: PropTypes.string,
};

export default Drawer;
