const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')
module.exports = {
    plugins: [
        'postcss-preset-env',
        tailwindcss,
        // purgecss({
        //     content: ['./**/*.html']
        // }),
    ],
};