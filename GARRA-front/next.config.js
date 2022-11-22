/* eslint-disable @typescript-eslint/no-var-requires */
const nextConfig = {
  reactStrictMode: false,
  images: { disableStaticImages: true },
  typescript: { ignoreBuildErrors: true }
}

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  sw: '/serviceWorker.js'
})

module.exports = withPWA(nextConfig)
