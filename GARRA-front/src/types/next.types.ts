import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

export type TNextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout
}
