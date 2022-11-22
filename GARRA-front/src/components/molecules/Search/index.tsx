import { Loupe, Style } from './styles'

export const Search = ({ variant = 'primary', ...props }: any) => (
  <Style variant={variant}>
    <Loupe variant={variant} />

    <input type='text' {...props} />
  </Style>
)
