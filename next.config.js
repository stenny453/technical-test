/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['content.app-sources.com', 'wau.co', 'wau.io'],
  },
  fontLoaders: [
    { loader: '@next/font/google', options: { subsets: ['latin'], preload: true } },
  ],
  webpack: (config, { isServer, ...o }) => {
    if (isServer && config.name === 'server') {
      const prevEntry = config.entry

      return {
        ...config,
        async entry(...args) {
          const entries = await prevEntry(...args)
          return {
            ...entries,
            worker: path.resolve(process.cwd(), 'src/worker.ts')
          }
        }
      }
    };

    return config;
  },
};

module.exports = nextConfig