import { GlobalProvider } from '@app/components/providers/GlobalProvider'

import type { TAppPropsWithLayout } from '@app/types/next.types'

import { useEffect } from 'react'

const MyApp = ({ Component, pageProps }: TAppPropsWithLayout) => {
  const getLayout = Component.getLayout || (page => page)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader')

      if (loader) loader.style.display = 'none'
    }
  }, [])

  return (
    <GlobalProvider>{getLayout(<Component {...pageProps} />)}</GlobalProvider>
  )
}

export default MyApp
