/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  env: {
    APP_ENV: process.env.APP_ENV
  }
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
}

module.exports = nextConfig
