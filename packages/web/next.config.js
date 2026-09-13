module.exports = {
  turbopack: {},
  
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'web';
    }

    return config;
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'store-images.s-microsoft.com',
      },
    ],
  },

  output: 'standalone',
};
