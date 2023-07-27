const fontSize = 14; // px
export const htmlFontSize = 16;
const coEf = fontSize / 14;

const fontSizeCalc = (expectedBodyFontSize) => {
  return (14 / 16) * expectedBodyFontSize;
};

/**
 * Function that converts given pixel value into Rem
 */
export const pxToRem = (size) => `${(size / htmlFontSize) * coEf}rem`;

/**
 * Defines typography configuration
 */
export const themeTypography = {
  htmlFontSize,
  fontSize: fontSizeCalc(fontSize),
  fontFamily: [].join(','),
  h1: {
    fontSize: pxToRem(40),
    fontWeight: 700,
  },
  h2: {
    fontSize: pxToRem(32),
    fontWeight: 600,
  },
  h3: {
    fontSize: pxToRem(28),
    fontWeight: 600,
  },
  h4: {
    fontSize: pxToRem(24),
    fontWeight: 500,
  },
  h5: {
    fontSize: pxToRem(20),
    fontWeight: 500,
  },
  h6: {
    fontSize: pxToRem(16),
    fontWeight: 600,
  },
  display1: {
    fontSize: pxToRem(80),
    fontWeight: 400,
  },
  display2: {
    fontSize: pxToRem(72),
    fontWeight: 400,
  },
  display3: {
    fontSize: pxToRem(64),
    fontWeight: 400,
  },
  display4: {
    fontSize: pxToRem(56),
    fontWeight: 400,
  },
  display5: {
    fontSize: pxToRem(48),
    fontWeight: 400,
  },
  display6: {
    fontSize: pxToRem(14),
    fontWeight: 700,
  },
  display7: {
    fontSize: pxToRem(12),
    fontWeight: 700,
  },
  textLink: {
    fontSize: pxToRem(16),
    fontWeight: 400,
  },
  bodyLarge: {
    fontSize: pxToRem(20),
  },
  body: {
    fontSize: pxToRem(16),
  },
  subtitle: {
    fontSize: pxToRem(14),
    fontWeight: 600,
  },
  bodySmall: {
    fontSize: pxToRem(12.8),
  },
};
