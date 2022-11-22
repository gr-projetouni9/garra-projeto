import { Style } from './styles'

import CloseIcon from '../icons/Close'

export const Close = ({ color, ...props }: any) => (
  <Style type='button' {...props}>
    <CloseIcon style={{ fill: color }} />
  </Style>
)
