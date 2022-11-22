import { styled } from '@app/styles'

export const Style = styled('button', {
  py: '$3',

  radius: '$4',
  width: '100%',
  maxWidth: '$80',

  color: '$white',
  bg: '$primary',

  '@sm': { fontSize: '$4' }
})
