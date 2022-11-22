import { styled } from '@app/styles'

import OriginalButton from '@app/components/atoms/Button'
import { Switch as OriginalSwitch } from '@app/components/atoms/Switch'

export const Error = styled('div', {
  flexCenter: 'row',
  width: '100%',
  maxWidth: '$xs',
  p: '$4',
  mb: '$4',
  radius: '$4',
  textAlign: 'center',

  svg: {
    mr: '$2',
    height: '$5',
    path: {
      fill: '$tertiary'
    }
  },

  bg: '$error',
  color: '$tertiary'
})

export const Switch = styled(OriginalSwitch, {
  mb: '$4'
})

export const ArrowButton = styled('button', {
  flexCenter: 'row',
  position: 'absolute',

  top: '$6',
  left: '$6',

  svg: {
    height: '$6',

    path: {
      fill: '$primary'
    }
  }
})

export const Logo = styled('img', {
  width: '100%',
  maxWidth: '$96'
})

export const Forgot = styled('p', {
  textAlign: 'center',

  '@sm': {
    fontSize: '$4',

    a: { fontSize: '$4' }
  }
})

export const Button = styled(OriginalButton, {
  py: '$4',
  maxWidth: '$96',

  fontWeight: 'bold',

  bg: '$secondary ',

  '& + button': { mt: '$2', mb: '$6', bg: '$primary' }
})

export const Field = styled('input', {
  '&[type="text"], &[type="password"] ': {
    pl: '$4',
    mb: '$4',
    radius: '$4',
    height: '$12',
    minHeight: '$12',
    width: '100%',
    maxWidth: '$96',

    border: 'solid 1px $black',

    '&::placeholder': { opacity: 0.6 },

    '@sm': {
      fontSize: '$4'
    }
  }
})

export const Form = styled('form', {
  position: 'relative',

  bg: '$tertiary',
  pt: '$8',
  pb: '$4',

  boxShadow: '8px 8px 32px 0px rgba(0,0,0,0.2)',

  '.content': {
    width: '100%',
    flexCenter: 'col',
    justifyContent: 'flex-start',

    overflowY: 'auto'
  },

  flexCenter: 'col',
  radius: '$6',
  px: '$4',

  size: '100%',

  '@sm': { px: '$8' },

  '@md': { height: 'auto', width: '$137', p: '$13' }
})

export const Style = styled('main', {
  flexCenter: 'row',

  py: '$2',
  px: '$2',

  height: '100vh',

  bg: '$primary',

  '@sm': {
    p: '$8'
  }
})
