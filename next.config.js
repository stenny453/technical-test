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

  env: {
    RABBITMQ_URL: 'amqps://huksdsvy:44DelkMDY7PvL-psoCVnVA2MKpX4qPX2@rattlesnake.rmq.cloudamqp.com/huksdsvy',
  }
};

module.exports = nextConfig