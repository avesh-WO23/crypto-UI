import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider,
  createTheme,
  // responsiveFontSizes,
} from '@mui/material/styles';
import { PropTypes } from 'prop-types';

import themeColor from 'theme/theme-loader';

const ThemeLoader = (props) => {
  const theme = createTheme(themeColor);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

ThemeLoader.propTypes = {
  children: PropTypes.node,
};

export default ThemeLoader;
