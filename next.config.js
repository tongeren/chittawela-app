const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = { 
    // non-plugin configuration
};

module.exports = withPlugins([
    [optimizedImages, {
        /* config for next-optimized-images */
    }],

    // other plugins here

], nextConfiguration);