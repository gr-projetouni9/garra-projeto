import { styled } from '@app/styles'

import LoupeIcon from '@app/components/atoms/icons/Loupe'

export const Loupe = styled(LoupeIcon, {
  width: '$5',
  minWidth: '$5',

  path: { strokeWidth: '$2' },

  variants: {
    variant: {
      primary: {
        path: {
          stroke: '$primary'
        }
      },
      secondary: {
        path: {
          stroke: '$secondary'
        }
      }
    }
  }
})

export const Style = styled('label', {
  display: 'flex',
  alignItems: 'center',

  p: '$3',
  radius: '$4',
  width: '100%',
  maxWidth: '$xl',

  input: {
    "&[type='text']": {
      pl: '$2',

      '&::placeholder': {}
    }
  },

  variants: {
    variant: {
      primary: {
        b1: '$primary',
        input: {
          color: '$primary',

          "&[type='text']": { '&::placeholder': { color: '$primary' } }
        }
      },
      secondary: {
        b1: '$secondary',
        input: {
          color: '$secondary',

          "&[type='text']": { '&::placeholder': { color: '$secondary' } }
        }
      }
    }
  }
})
