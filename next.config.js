/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: [],
    unoptimized: true,
  },
  basePath: '',
  trailingSlash: true,
  swcMinify: false,
  productionBrowserSourceMaps: false,
  webpack: (config, { dev }) => {
    // Completely disable CSS minification
    config.optimization.minimize = false;
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
