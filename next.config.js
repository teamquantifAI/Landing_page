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
  webpack: (config, { dev, isServer }) => {
    // Disable CSS optimization
    if (!dev && !isServer) {
      config.optimization.minimizer = config.optimization.minimizer.filter(
        (minimizer) => !minimizer.constructor.name.includes('Css')
      );
    }
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
