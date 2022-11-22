import { pxToRem } from '@app/utils/pxAndRem'

export const fonts = {
  family: { roboto: 'Roboto, sans-serif', inter: 'Inter, sans-serif' },
  weights: {
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
    7: 700,
    8: 800,
    9: 900
  },
  sizes: {
    1: pxToRem(12),
    2: pxToRem(14),
    3: pxToRem(16),
    4: pxToRem(18),
    5: pxToRem(20),
    6: pxToRem(22),
    7: pxToRem(24),
    8: pxToRem(26),
    9: pxToRem(28),
    10: pxToRem(30)
  }
}
