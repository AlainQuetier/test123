/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: '/greenit',
  assetPrefix: '/greenit/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig