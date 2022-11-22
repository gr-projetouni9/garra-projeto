import { theme } from '@app/styles'

import { IChildrenProps } from '@app/types/react.types'

import { ThemeProvider as NextThemeProvider } from 'next-themes'

export const ThemeProvider = ({ children }: IChildrenProps) => {
  return (
    <NextThemeProvider
      attribute='class'
      storageKey='@Garra-theme'
      themes={[theme.className]}
      defaultTheme={theme.className}
      value={{ default_theme: theme.className }}
    >
      {children}
    </NextThemeProvider>
  )
}
