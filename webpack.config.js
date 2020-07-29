const path = require('path');

module.exports = (env, argv) => {
    console.log(env, argv);

    return {
        mode: env.production ? 'production' : 'development',
        entry: './src/index.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        }

    }
}