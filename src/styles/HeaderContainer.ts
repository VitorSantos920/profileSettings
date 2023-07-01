import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const CardHeader = styled('header', {
  width: '100%',
  gap: '1rem',
  alignItems: 'center',

  '.user__name': {
    fontWeight: '$bold',
    fontSize: '$title',
    color: '$gray100',
  },

  '.user__email': {
    color: '$gray300',
    fontSize: '$textSm',
    fontWeight: '$regular',
  },
});
