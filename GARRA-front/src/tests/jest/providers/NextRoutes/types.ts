import { NextRouter } from 'next/router'
import { ReactNode } from 'react'

export interface IRouterProviderProps {
  children: ReactNode
  props?: Partial<NextRouter>
}
