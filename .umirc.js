
// ref: https://umijs.org/config/
import { resolve } from 'path'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        immer: true,
      },
      dynamicImport: false,
      title: 'xodb-gxdl',
      dll: false,
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
          /chart\/Container\.js$/,
          /chart\/ECharts\/.+Component\.js$/,
          /chart\/ECharts\/.+ComPonent\.js$/,
          /chart\/ECharts\/theme\/.+\.js$/,
          /chart\/highCharts\/.+Component\.js$/,
          /chart\/highCharts\/mapdata\/.+\.js$/,
          /chart\/Recharts\/.+Component\.js$/,
          /chart\/Recharts\/Container\.js$/,
        ],
      },
      hardSource: true,
    }],
  ],
  // 代理
  // proxy: {
  //   "/api/*": {
  //     "target": "https://api.seniverse.com/",
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api/*": "/v3/weather" }
  //   },
  // },
  alias: {
    models: resolve(__dirname, './src/models'),
    pages: resolve(__dirname, './src/pages'),
    services: resolve(__dirname, './src/services'),
    utils: resolve(__dirname, './src/utils')
  },
  extraPostCSSPlugins: [autoprefixer],
  urlLoaderExcludes: [
    /\.svg$/,
  ],
  ignoreMomentLocale: true,
}
