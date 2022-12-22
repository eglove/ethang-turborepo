/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: ''
      }
    ]
  },
  experimental: {
    appDir: true,
  },
  transpilePackages: ['next-components', 'next-radix', 'node-environment', 'react-components', 'react-hooks', 'util-typescript'],
}

module.exports = nextConfig
