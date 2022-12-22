/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
    formats: ['image/avif', 'image/webp']
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/sign-in',
        destination: 'https://admin.sterettcreekvillagetrustee.com',
        permanent: true,
      },
      {
        source: '/dashboard',
        destination: 'https://admin.sterettcreekvillagetrustee.com',
        permanent: true,
      },
      {
        source: '/admin',
        destination: 'https://admin.sterettcreekvillagetrustee.com',
        permanent: true,
      },
    ]
  },
  swcMinify: true,
  transpilePackages: [
    "next-components",
    "node-environment",
    "trussworks-next-components",
    "util-typescript"
  ],
}

module.exports = nextConfig
