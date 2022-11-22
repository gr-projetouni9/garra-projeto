import { TScrollbar } from './types'

export const scrollbar: TScrollbar = params => ({
  '&::-webkit-scrollbar': {
    width: params?.thumb?.width
  },

  '&::-webkit-scrollbar-thumb': {
    borderRadius: params?.thumb?.radius,
    borderWidth: params?.thumb?.borderWidth,

    bg: params?.thumb?.color,
    borderColor: params?.track?.color
  },

  '&::-webkit-scrollbar-track': {
    display: params?.track?.display,

    background: params?.track?.color
  },

  '&::-webkit-scrollbar-corner': {
    background: 'transparent'
  },

  '&::-webkit-scrollbar-button': {}
})
