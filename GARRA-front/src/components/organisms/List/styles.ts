import { styled } from '@app/styles'

export const Style = styled('ul', {
  width: '100%',
  pr: '$4',

  overflowY: 'scroll',
  maxWidth: '$xl',

  '> li + li': {
    mt: '$4'
  }
})
