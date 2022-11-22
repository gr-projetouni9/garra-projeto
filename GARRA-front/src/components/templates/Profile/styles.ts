import { Err } from '../Home'

import { styled, theme } from '@app/styles'

import Button from '@app/components/atoms/Button'
import DefaultAvatarIcon from '@app/components/atoms/icons/DefaultAvatar'

export const Error = styled(Err, {
  bg: '$tertiary',
  color: '$error',
  width: '100%',
  maxWidth: 'none',
  svg: {
    path: {
      fill: '$error'
    }
  }
})

export const Submit = styled(Button, { mb: '$8', '@md': { mb: 0 } })

export const ConfirmPasswordModal = styled('div', {
  flexCenter: 'col',
  p: '$4',

  '> div:first-child': {
    svg: { fill: '$error' },
    alignSelf: 'flex-end',
    mb: '$4'
  },

  label: {
    color: '$primary'
  },

  input: {
    "&[type='password']": {
      color: '$primary',
      b1: '$primary',
      pl: '$2',
      radius: '$2'
    }
  },

  button: {
    mt: '$6',
    maxWidth: 'none',
    width: '100%'
  },

  radius: '$4',
  bg: '$tertiary'
})

export const DefaultAvatar = styled(DefaultAvatarIcon, {
  fill: '$primary',
  height: '$48'
})

export const Logo = styled('img', {
  height: '$24',

  display: 'none',

  '@md': {
    display: 'block'
  }
})

export const Input = styled('input', {
  flex: 1,

  ml: '$4',
  height: '$10',
  fontSize: '$4',

  color: '$tertiary'
})

export const Label = styled('label', {
  flexCenter: 'row',
  width: '100%',
  justifyContent: 'flex-start',

  fontWeight: '$6',
  fontSize: '$4',

  color: '$tertiary',

  '& + label': {
    mt: '$4'
  },

  '@md': {
    textAlign: 'center'
  }
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',

  px: '$8',
  py: '$10',
  width: '100vw',

  bg: '$primary',

  '@md': {
    width: 'auto',
    py: '$20'
  }
})

export const Avatar = styled('button', {})

export const Header = styled('header', {
  flexCenter: 'col',

  px: '$8',
  py: '$10',

  width: '100vw',

  bg: '$tertiary',

  '@md': {
    width: 'auto',
    height: '100%'
  }
})

export const Card = styled('section', {
  flexCenter: 'col',

  m: '$10',

  '@md': {
    mt: 0,
    width: 'auto',
    flexCenter: 'row',
    boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.4)'
  }
})

export const Style = styled('main', {
  flexCenter: 'col',

  minHeight: `calc(100vh - ${theme.sizes[28].value})`,

  '@md': { p: '$10' }
})
