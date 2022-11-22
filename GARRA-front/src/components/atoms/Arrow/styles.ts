import { styled } from '@app/styles'

import ArrowIcon from '@app/components/atoms/icons/Arrow'

export const Style = styled(ArrowIcon, {
  height: '$4',
  minHeight: '$4',
  width: '$2',
  minWidth: '$2',

  path: { fill: '$tertiary' },

  variants: {
    direction: {
      up: { transform: 'rotate(90deg)' },
      down: { transform: 'rotate(-90deg)' },
      right: { transform: 'rotate(180deg)' },
      left: { transform: 'rotate(360deg)' }
    }
  }
})
