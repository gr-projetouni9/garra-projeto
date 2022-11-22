import { styled, theme } from '@app/styles'

import OriginalButton from '@app/components/atoms/Button'
import BarcodeIcon from '@app/components/atoms/icons/Barcode'

export const ModalContent = styled('section', {
  flexCenter: 'col'
})

export const ScannerBackground = styled('div', {
  flexCenter: 'col',

  py: '$10',
  mb: '$10',
  radius: '$4',

  bg: '$black'
})

export const Button = styled(OriginalButton, {
  maxWidth: 'none',

  mt: 'auto'
})

export const Label = styled('label', {
  color: '$tertiary',
  display: 'flex',
  alignItems: 'center',

  '& + label': { mt: '$6' }
})

export const Input = styled('input', {
  "&[type='text'], &[type='number']": {
    height: '$11',
    px: '$2',

    ml: '$4',
    flex: 1,
    radius: '$4',
    border: 'none',
    outline: 'none',
    minWidth: 0,

    bg: '$tertiary'
  }
})

export const BarCode = styled(BarcodeIcon, {
  height: '$6',

  path: { stroke: '$secondary' }
})

export const BarCodeField = styled('div', {
  flexCenter: 'row',
  px: '$4',
  py: '$2',
  mt: '$6',

  width: '100%',

  radius: '$4',
  outline: 'none',

  bg: '$tertiary',

  input: {
    "&[type='text']": {
      flex: 1,
      height: '$6'
    }
  },

  svg: { height: '$6', path: { fill: '$error' } }
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  px: '$4',

  width: '100vw',
  maxWidth: '$md'
})

export const Section = styled('section', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  flex: 1,
  py: '$10',

  bg: '$secondary'
})

export const Video = styled('video', {
  width: '100%',
  my: '$4'
})

export const Style = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  minHeight: `calc(100vh - ${theme.sizes[28].value})`
})
