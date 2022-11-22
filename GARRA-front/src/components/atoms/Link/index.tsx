import { Style } from './styles'

import { ComponentPropsWithoutRef } from 'react'

export const Link = ({
  children,
  target = '_blank',
  rel = 'noreferrer external noopener',
  ...props
}: ComponentPropsWithoutRef<'a'>) => (
  <Style target={target} rel={rel} {...props}>
    {children}
  </Style>
)
