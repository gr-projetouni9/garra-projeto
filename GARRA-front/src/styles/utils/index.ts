import { fonts } from './fonts'
import { margin } from './margin'
import { padding } from './padding'
import { radius } from './radius'
import { size } from './size'

export const utils = {
  b1: (color: string) => ({
    border: `solid 1px ${color}`
  }),

  theme: (theme: string) => {
    const [color, scale] = theme.split('_')

    return {
      color: `${color}_contrast_${scale || 1}`,
      backgroundColor: `${color}_${scale || 1}`
    }
  },

  bg: (backgroundColor: string) => ({ backgroundColor }),

  flexCenter: (direction: 'row' | 'col') => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: direction === 'col' ? 'column' : 'row'
  }),

  autoFill: (textColor: string) => ({
    '&:-webkit-autofill': {
      '&, &:hover, &:active, &:focus': {
        WebkitTextFillColor: `$colors${textColor}`,
        WebkitBoxShadow: '0 0 0px 1000px inherit inset',
        transition: 'background-color 5000s ease-in-out 0s'
      }
    }
  }),

  ...fonts,
  ...size,
  ...radius,
  ...margin,
  ...padding
}
