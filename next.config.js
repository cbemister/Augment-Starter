/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable CSS Modules
  cssModules: true,
  
  // Configure CSS Modules options
  cssLoaderOptions: {
    modules: {
      localIdentName: '[name]__[local]___[hash:base64:5]',
      exportLocalsConvention: 'camelCase',
    },
  },

  // Static export configuration for deployment
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },

  // Environment-specific configuration
  env: {
    SANDBOX_MODE: 'true',
    METHODOLOGY: process.env.METHODOLOGY || 'css-modules'
  },

  // Webpack configuration for CSS Modules
  webpack: (config, { isServer }) => {
    // Find the existing CSS rule
    const cssRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes('css')
    );

    if (cssRule) {
      // Ensure CSS Modules are properly configured
      cssRule.use = cssRule.use.map((use) => {
        if (use.loader && use.loader.includes('css-loader')) {
          return {
            ...use,
            options: {
              ...use.options,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
                exportLocalsConvention: 'camelCase',
              },
            },
          };
        }
        return use;
      });
    }

    return config;
  },
};

module.exports = nextConfig;
