import { NextRouter } from 'next/router'

export const createMockRouter = (router: Partial<NextRouter>): NextRouter => ({
  query: {},
  route: '/',
  asPath: '/',
  basePath: '',
  pathname: '/',
  isReady: true,
  back: jest.fn(),
  push: jest.fn(),
  isPreview: false,
  reload: jest.fn(),
  isFallback: false,
  domainLocales: [],
  replace: jest.fn(),
  defaultLocale: 'en',
  prefetch: jest.fn(),
  isLocaleDomain: false,
  beforePopState: jest.fn(),
  events: { on: jest.fn(), off: jest.fn(), emit: jest.fn() },
  ...router
})
