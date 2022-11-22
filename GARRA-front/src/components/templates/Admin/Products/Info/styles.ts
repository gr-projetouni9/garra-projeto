import { styled } from '@app/styles'

export const Style = styled('ul', {
  strong: {
    fontWeight: 'bold',

    color: '$secondary',
    fontSize: '$2'
  },

  li: { mb: '$4', fontSize: '$2' },

  '@md': { 'strong,li': { fontSize: '$3' } }
})
