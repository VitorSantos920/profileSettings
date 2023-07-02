import { stitches } from '../../../stitches.config';

const { styled } = stitches;

export const OptionContainer = styled('div', {
  marginTop: '1rem',
  borderTop: '1px solid #797085',
  paddingTop: '1rem',

  '.option__title': {
    textTransform: 'uppercase',
    color: '$gray300',
    fontWeight: '$regular',
    marginBottom: '.75rem',
    fontSize: '$textXs',
    letterSpacing: '0.48px',
  },

  '&:last-child .option-items .option-item:last-child': {
    color: '$red',

    a: { color: 'inherit' },
  },
});
