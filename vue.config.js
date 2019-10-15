const path = require('path')

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  // assetsDir: '', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir)。默认 index.html
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
  },
  devServer: {
    host: 'localhost',
    port: '8080',
    open: false
  },
  configureWebpack: { // webpack 配置
    resolve: {
      extensions: ['.md'],
      modules: [
        // path.resolve(__dirname, 'src'),
        // path.resolve(__dirname, 'docs')
      ]
    }
  },
  chainWebpack (config) {

    // see: https://github.com/neutrinojs/webpack-chain
    config.module
      .rule('dotmd')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .options({
        ...(config.module.rules.get('vue').uses.get('vue-loader').get('options') || null) // 与 vue-loader 配置保持一致
      })
      .end()
      .use('vue-dotmd-loader')
      // .loader('vue-dotmd-loader')
      .loader(path.resolve(process.env.NODE_PATH, 'vue-dotmd-loader'))
      .options({
        dest: true,
        markdown: {
          options: {
            html: true
          }
        }
      })
      .end()
  }
}
