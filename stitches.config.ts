import { createStitches } from '@stitches/react';

export const stitches = createStitches({
  theme: {
    colors: {
      gray100: '#38343D',
      gray200: '#38343D',
      gray300: '#797085',
      gray400: '#F4EFFA',
      gray500: '#FDFCFE',
      red: '#AA2222',
      gradient: 'linear-gradient(to right, #935FD3, #9245F1)',
    },

    fonts: {
      heebo: 'Heebo, sans-serif',
    },

    fontSizes: {
      title: '1.125rem',
      textMd: '1rem',
      textSm: '0.875rem',
      textXs: '0.75rem',
    },

    fontWeights: {
      bold: 700,
      regular: 400,
    },
  },
});

const injectGlobalStyle = stitches.globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    background: '$gradient',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: '$heebo',
    margin: '1.75rem 0',
  },

  '.flex': { display: 'flex' },
});

injectGlobalStyle();
