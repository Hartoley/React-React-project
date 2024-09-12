const webpack = require('webpack');

module.exports = function override(config, env) {
    // Configure Webpack fallbacks
    config.resolve.fallback = {
        url: require.resolve('url'),
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        path: require.resolve('path-browserify'), // Added for compatibility
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
        util: require.resolve('util'),  // Updated for compatibility
        zlib: require.resolve('browserify-zlib'), // Add this if you use zlib
        process: require.resolve('process/browser'),
        vm: require.resolve('vm-browserify'), // Add this if you use vm
        fs: false, // Ensure fs is not included if not needed
        net: false,
        tls: false,
    };

    // Add ProvidePlugin
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    ]);

    return config;
};
