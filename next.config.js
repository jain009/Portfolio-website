module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.watchOptions = {
          aggregateTimeout: 300,
          poll: 1000,
        };
      }
      return config;
    },
  };
