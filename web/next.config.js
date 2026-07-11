/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // For Static Export
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
