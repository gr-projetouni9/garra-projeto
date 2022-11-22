import { styled, theme } from '@app/styles'

import OriginalList from '@app/components/organisms/List'

export const Header = styled('header', {
  width: '100%',

  flexCenter: 'row'
})

export const Description = styled('p', {
  fontSize: '$2',

  '@md': {
    fontSize: '$3'
  }
})

export const List = styled(OriginalList, {
  my: '$4',
  height: '100%'
})

export const Footer = styled('footer', {
  flexCenter: 'row',

  width: '100%'
})

export const Style = styled('main', {
  flexCenter: 'col',

  p: '$4',

  height: `calc(100vh - ${theme.sizes[28].value} )`
})
