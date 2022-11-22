import { theme } from '@app/styles'

export const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  return alpha
    ? 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
    : 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

export const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  return { r, g, b }
}

export const blackOrWhiteByContrast = (hexColor: string) => {
  const { r, g, b } = hexToRgb(hexColor)

  return r * 0.299 + g * 0.587 + b * 0.114 > 186
    ? theme.colors.black.value
    : theme.colors.white.value
}
