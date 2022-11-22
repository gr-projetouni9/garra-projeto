import { Style } from './styles'

import { TButtonProps } from '@app/types/react.types'

const Button = ({ children, ...props }: TButtonProps) => (
  <Style {...props}>{children}</Style>
)

export default Button
