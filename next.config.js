/* eslint-disable */
const withPlugins = require('next-compose-plugins');

const optimizedImages = require('next-optimized-images');
const bundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

const nextConfig = { 
    // non-plugin configuration
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
        return config
    },
    webpackDevMiddleware: (config) => {
        // Perform customizations to webpack dev middleware config
        // Important: return the modified config
        return config
    },
    resolve: {
        extensions: [ '.ts' ]
    },
};

module.exports = withPlugins([
    [ optimizedImages, {
        /* config for next-optimized-images */
    }],
    [ bundleAnalyzer, {
       /* config for next-bundle-analyzer */
    }],

    // other plugins here

], nextConfig);
