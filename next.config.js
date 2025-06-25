/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: '/test123',
  assetPrefix: '/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
