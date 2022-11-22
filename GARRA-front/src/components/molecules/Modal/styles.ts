import { styled, theme } from '@app/styles'

import { hexToRgba } from '@app/utils/colors'

export const Style = styled('div', {
  position: 'fixed',
  top: '0',
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: '2',

  flexCenter: 'row',
  bg: `${hexToRgba(theme.colors.black.value, 0.6)}`,

  '.transparentBackground': {
    position: 'fixed',
    zIndex: '-1',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'transparent'
  },

  '.Loading': {
    width: '48px',
    height: '48px',

    path: {
      fill: '${({ theme }) => theme.colors.secondary}'
    }
  }
})
