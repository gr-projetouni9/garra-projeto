import { Splash } from '@app/components/templates/Splash'
import splashStyle from '@app/components/templates/Splash/splashStyle'

import { GlobalHead } from '@app/components/providers/GlobalHead'

import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='pt-BR'>
        <Head>
          <GlobalHead />

          <style>{splashStyle}</style>
        </Head>

        <body>
          <Splash />

          <Main />
          <NextScript />

          <div id='modal' />
        </body>
      </Html>
    )
  }
}
