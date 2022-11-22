import { styled, theme } from '@app/styles'

import OriginalButton from '@app/components/atoms/Button'

import OriginalList from '@app/components/organisms/List'

export const Button = styled(OriginalButton, {
  bg: '$secondary'
})

export const List = styled(OriginalList, {
  my: '$4',
  height: '100%'
})

export const Footer = styled('footer', {
  flexCenter: 'row',

  width: '100%'
})

export const Header = styled('header', {
  width: '100%',

  flexCenter: 'row'
})

export const Style = styled('main', {
  flexCenter: 'col',

  p: '$4',

  height: `calc(100vh - ${theme.sizes[28].value} - ${theme.sizes[13].value})`
})
