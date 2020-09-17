/**
 * Date: 7/7/20
 */
const path = require('path');
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src')
            }
        },
        devtool: process.env.NODE_ENV === 'development' ? '#eval-source-map' : ''
    },
    pages: {
        index: {
            // page 的入口
            entry: 'src/pages/index/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common','index']
        },
        'a': {
            entry: 'src/pages/a/main.js',
            template: 'public/a.html',
            filename: 'a.html'
        },
        'b': {
            entry: 'src/pages/b/main.js',
            template: 'public/b.html',
            filename: 'b.html'
        },
        'c': {
            entry: 'src/pages/c/main.js',
            template: 'public/c.html',
            filename: 'c.html'
        },
    },
    devServer: {
        clientLogLevel: 'warning', //
        historyApiFallback: true, //
        hot: true, //
        compress: true, //
        port: 3000,
        host: 'localhost',
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        publicPath: '/',
        quiet: true, //
        proxy: {
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            [process.env.VUE_APP_BASE_API]: {
                target: 'http://localhost:8080/',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        },
        watchOptions: {
            poll: false
        }
    },

};
