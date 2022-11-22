export const mediaInPx = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1920px'
}

export const media = {
  xs: `(min-width: ${mediaInPx.xs})`,
  sm: `(min-width: ${mediaInPx.sm})`,
  md: `(min-width: ${mediaInPx.md})`,
  lg: `(min-width: ${mediaInPx.lg})`,
  xl: `(min-width: ${mediaInPx.xl})`,
  '2xl': `(min-width: ${mediaInPx['2xl']})`,
  '3xl': `(min-width: ${mediaInPx['3xl']})`
}
