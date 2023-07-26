import { Box, styled } from '@mui/material';
import { PropTypes } from 'prop-types';

const MainContainer = styled(Box)({
  padding: '24px 16px',
});

export const Container = ({ children, sx, ...props }) => {
  return (
    <MainContainer sx={sx} {...props}>
      {children}
    </MainContainer>
  );
};

Container.propTypes = {
  children: PropTypes.element,
  sx: PropTypes.object,
};
