import { LIGHT } from 'theme/theme-loader/colors';
import { themeTypography } from 'theme/theme-loader/typography';

const theme = {
  palette: LIGHT,
  typography: themeTypography,
  status: {
    danger: '#e48d8d',
    success: '#97d69d',
    primary: LIGHT.primary.main,
  },
  components: {
    MuiButton: {
      // defaultProps: {
      //   disableRipple: true,
      //   disableElevation: true,
      // },
      // styleOverrides: {
      //   root: {
      //     fontSize: pxToRem(20),
      //     fontWeight: '400',
      //     textTransform: 'none',
      //   },
      // },
    },
    MuiMenuItem: {
      // styleOverrides: {
      //   root: {
      //     fontSize: pxToRem(15),
      //     fontWeight: '400',
      //     textTransform: 'none',
      //   },
      // },
    },
  },
};
export default theme;
