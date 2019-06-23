module.exports = {
    apps : [{
        name: 'tp_nodejs',
        script: './dist/bundle.js',
        instances: 'max',
        env: {
            NODE_ENV: 'development',
        },
        env_production: {
            NODE_ENV: 'production',
        }
    }]
};
