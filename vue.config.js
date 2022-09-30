const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
},
})
module.exports = {
    devServer: {
        historyApiFallback: true,
        https: false,
        open: false,
        proxy: {
            '/setu': {
                target: 'http://121.5.141.179:9876/pc/getUrl',
                pathRewrite: {
                    '^/setu': '',
                }
            }
        }
    },
    lintOnSave: false, // 关闭格式检查
    productionSourceMap: false, // 打包时不会生成 .map 文件，加快打包速度
    publicPath: './', // 基本路径,打包时加上.
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }])
    }
}
