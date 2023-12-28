const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        main: [
            path.resolve(__dirname, 'src/main.js'),
            path.resolve(__dirname, 'src/main.scss')
        ]
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: [/\.scss$/, /\.(jpe?g|png|gif|svg)$/i],
                use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                type: "asset",
            },
        ]
    },
    plugins: [
        new miniCssExtractPlugin()
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 63342,
    },
    optimization: {
        minimizer: [
            "...",
            new ImageMinimizerPlugin({
                minimizer: {
                    // Implementation
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    // Options
                    options: {
                        plugins: [
                            "imagemin-gifsicle",
                            "imagemin-mozjpeg",
                            "imagemin-pngquant",
                            "imagemin-svgo",
                        ],
                    },
                },
            }),
        ],
    },
}

;
