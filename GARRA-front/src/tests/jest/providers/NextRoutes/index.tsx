import { IRouterProviderProps } from './types'

import { createMockRouter } from '@app/tests/jest/mocks/createMockRouter'

import { RouterContext } from 'next/dist/shared/lib/router-context'

export const RouterProvider = ({ children, props }: IRouterProviderProps) => (
  <RouterContext.Provider value={createMockRouter(props || {})}>
    {children}
  </RouterContext.Provider>
)
