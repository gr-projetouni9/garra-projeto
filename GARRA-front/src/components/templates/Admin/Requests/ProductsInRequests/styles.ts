import { styled, theme } from '@app/styles'

import ArrowIcon from '@app/components/atoms/icons/Arrow'
import LoupeIcon from '@app/components/atoms/icons/Loupe'

import { hexToRgba } from '@app/utils/colors'

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',

  px: '$4',
  py: '$2',

  bg: '$secondary',

  button: { flexCenter: 'row', mr: '$4' }
})

export const Arrow = styled(ArrowIcon, {
  height: '$4',
  transform: 'rotate(-90deg)',

  path: { fill: '$tertiary' }
})

export const Products = styled('ul', {
  flexCenter: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',

  p: '$4',
  pr: '$6',
  maxHeight: '$96',
  overflow: 'hidden',
  overflowY: 'scroll',

  bg: `${hexToRgba(theme.colors.secondary.value, 0.4)}`
})

export const ProductData = styled('p', {
  color: '$tertiary',
  px: '$4',
  py: '$8',
  fontSize: '$2'
})

export const ProductStyle = styled('li', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',

  width: '100%',

  bg: '$secondary',
  radius: '$4',
  m: '$4',
  maxWidth: '$96',

  button: {
    fontSize: '$2',

    height: '$10',
    radiusB: '$4',

    width: '100%',
    bg: '$primary',
    color: '$tertiary'
  }
})

export const Search = styled('label', {
  display: 'flex',
  alignItems: 'center',
  size: '100%',
  px: '$2',

  input: {
    fontSize: '$2',
    color: '$tertiary',
    py: '$2',
    size: '100%'
  },

  '@md': {
    input: {
      fontSize: '$3'
    }
  }
})

export const Loupe = styled(LoupeIcon, {
  height: '$5',
  mr: '$4',

  path: { strokeWidth: 1, stroke: '$tertiary' }
})

export const Style = styled('div', {
  overflowY: 'hidden',
  pr: 0
})
