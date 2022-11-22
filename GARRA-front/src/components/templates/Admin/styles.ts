import { styled } from '@app/styles'

export const Header = styled('div', {
  flexCenter: 'row',

  mx: 'auto',

  button: {
    flex: 1,
    py: '$4',
    bg: '$secondary',
    color: '$tertiary',

    '& + button': {
      bg: '$primary'
    }
  }
})
