import { Style } from './styles'

export const Arrow = ({
  direction = 'down'
}: {
  direction?: 'up' | 'down' | 'right' | 'left'
}) => <Style direction={direction} />
