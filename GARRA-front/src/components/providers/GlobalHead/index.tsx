/* eslint-disable @next/next/no-page-custom-font */

export const Inter = () => {
  return (
    <>
      <link rel='preconnect' href='https://fonts.googleapis.com' />

      <link
        rel='preconnect'
        crossOrigin='true'
        href='https://fonts.gstatic.com'
      />

      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap'
      />
    </>
  )
}

export const Roboto = () => (
  <>
    <link rel='preconnect' href='https://fonts.googleapis.com' />

    <link
      rel='preconnect'
      crossOrigin='true'
      href='https://fonts.gstatic.com'
    />

    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
    />
  </>
)

const PWA = () => (
  <>
    <link rel='manifest' href='/manifest.json' />
    <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#EC682F' />

    <meta name='theme-color' content='#EC682F' />
    <meta name='mobile-web-app-capable' content='yes' />
    <meta name='format-detection' content='telephone=no' />

    <meta name='apple-mobile-web-app-capable' content='yes' />
    <meta name='apple-mobile-web-app-title' content='Garra' />
    <meta name='apple-mobile-web-app-status-bar-style' content='default' />

    <meta name='msapplication-tap-highlight' content='no' />
    <meta name='msapplication-TileColor' content='#EC682F' />
    <meta name='msapplication-config' content='/icons/browserconfig.xml' />

    {/* Apple Icon */}
    <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
    <link
      rel='apple-touch-icon'
      sizes='152x152'
      href='/icons/touch-icon-ipad.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='180x180'
      href='/icons/touch-icon-iphone-retina.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='167x167'
      href='/icons/touch-icon-ipad-retina.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='32x32'
      href='/icons/favicon-32x32.png'
    />

    {/* Apple Splash */}

    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_2048.png'
      sizes='2048x2732'
    />
    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_1668.png'
      sizes='1668x2224'
    />
    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_1536.png'
      sizes='1536x2048'
    />
    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_1125.png'
      sizes='1125x2436'
    />
    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_1242.png'
      sizes='1242x2208'
    />
    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_750.png'
      sizes='750x1334'
    />
    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_640.png'
      sizes='640x1136'
    />
  </>
)

export const TwitterOG = () => <></>

export const FacebookOG = () => <></>

export const GlobalHead = () => (
  <>
    <meta charSet='utf-8' />
    <link rel='icon' type='image/x-icon' href='/favicon.ico' />

    <FacebookOG />
    <TwitterOG />

    <PWA />

    <Roboto />
    <Inter />
  </>
)
