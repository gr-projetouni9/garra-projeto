import { CSS } from '@stitches/react'

interface IScrollbarParams {
  thumb?: {
    color?: string
    width?: string
    radius?: string
    borderWidth?: string
  }
  track?: {
    color?: string
    display?: string
  }
}

export type TScrollbar = (params?: IScrollbarParams) => CSS
