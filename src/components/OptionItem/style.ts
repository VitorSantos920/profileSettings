import { stitches } from '../../../stitches.config';

const { styled } = stitches;

export const OptionItemContainer = styled('div', {
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '.5rem 0',

  '.content': {
    alignItems: 'center',
    gap: '.5rem',

    a: {
      color: '$gray100',
      textDecoration: 'none',
    },
  },
});
