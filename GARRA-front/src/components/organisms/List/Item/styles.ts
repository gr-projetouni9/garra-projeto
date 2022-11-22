import { styled, theme } from '@app/styles'

import { hexToRgba } from '@app/utils/colors'

export const Content = styled('div', {
  p: '$4'
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  p: '$4',

  ul: {
    flexCenter: 'col',

    ml: '$4',

    li: {
      fontSize: '$2',
      flexCenter: 'row',

      color: '$tertiary',

      '& + li': { mt: '$2' }
    }
  },

  '@md': {
    ul: {
      px: '$2',
      flexDirection: 'row',

      width: `calc(100% - ${theme.sizes[4]})`,

      li: {
        flexCenter: 'row',
        flex: 1,
        fontSize: '$3',

        '&:last-child': {
          justifyContent: 'flex-end'
        },

        '&:first-child': {
          justifyContent: 'flex-start'
        },

        '& + li': {
          mt: 0
        }
      }
    }
  },

  variants: {
    variant: {
      black: { bg: '$black' },
      primary: { bg: '$primary' },
      secondary: { bg: '$secondary' }
    }
  },

  defaultVariants: { variant: 'primary' }
})

export const Style = styled('div', {
  width: '100%',

  variants: {
    variant: {
      black: { bg: `${hexToRgba(theme.colors.black.value, 0.3)}` },
      primary: { bg: `${hexToRgba(theme.colors.primary.value, 0.3)}` },
      secondary: { bg: `${hexToRgba(theme.colors.secondary.value, 0.3)}` }
    }
  },

  defaultVariants: { variant: 'primary' }
})
