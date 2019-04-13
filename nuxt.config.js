const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'author', name: 'author', content: 'nidun' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'keywords', name: 'keywords', content: pkg.keywords }
    ],
    script: [
     {src: 'https://hm.baidu.com/hm.js?33ab7e26d50aacf7b2ea61652e7d0e2b'},/*引入百度统计的js*/
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'http://at.alicdn.com/t/font_474878_d18dqvgjzoi.css' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    './assets/css/variables.less',
    './assets/css/base.less',
    './assets/css/common.less',
    './assets/css/tools.less',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  '@/plugins/baiduGa.js', /*百度统计*/
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: ''
    // See https://github.com/nuxt-community/axios-module#options
    // proxy: true,
    // prefix: '/api', // baseURL
    // credentials: true,
  },
  // proxy: {
  //   '/api/': {
  //     target: 'http://127.0.0.1:3000', // 代理地址
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api': ''
  //     },
  //   },
  // },
  // server: {
  //   port: 3000, // default: 3000
  //   host: '0.0.0.0', // default: localhost,
  // },
  // env: {
  //   baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
