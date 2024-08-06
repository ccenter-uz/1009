const withNextIntl = require('next-intl/plugin')()

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@chakra-ui/react']
  }
}

module.exports = withNextIntl(nextConfig)
