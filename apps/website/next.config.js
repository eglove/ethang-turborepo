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
    transpilePackages: ['next-components', 'next-radix', 'node-environment', 'react-components', 'react-hooks', 'util-typescript'],
    appDir: true,
  },
}

module.exports = nextConfig
