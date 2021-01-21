
// import bodyParser from 'body-parser'
// import session from 'express-session'

// const pkg = require('./package')

let remove_console = []

if (process.env.NODE_ENV === 'production') {
  remove_console.push("transform-remove-console")
}

module.exports = {
  mode: 'universal',
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    title: '一枚前端开发',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=0'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'nidun'
      },
      {
        hid: 'description',
        name: 'description',
        content: '一枚前端开发,一堆网址导航,一些技术分享,一点知识学习,一个博客/主页'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '前端导航,前端网址,前端开发,web前端,前端技术,IT前端,倪盾,个人主页,博客,前端,H5,网址,学习,分享'
      }
    ],
    script: [{
      src: 'https://hm.baidu.com/hm.js?33ab7e26d50aacf7b2ea61652e7d0e2b'
    }, /*引入百度统计的js*/ ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://at.alicdn.com/t/font_474878_d18dqvgjzoi.css'
      },
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#999'
  },

  /*
   ** Global CSS
   */
  css: [
    './assets/css/variables.less',
    './assets/css/base.less',
    './assets/css/common.less',
    './assets/css/tools.less',
    // 第三方插件 CSS 文件
    {
      src: 'element-ui/lib/theme-chalk/index.css'
    }
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/baiduGa.js', /*百度统计*/
    '@/plugins/urlConfig.js', /*接口地址*/
    // '@/plugins/elementUi.js', /*element-ui地址*/
    {
      src: '~plugins/elementUi',
      ssr: true //是能在服务端运行
    },
    {
      src: '~plugins/utils',
      ssr: false ,//不在服务端运行
      // mode: 'client'
    },
    {
      src: '~plugins/vue-infinite-scroll',  // vue-infinite-scroll名字和js文件名字对应就行
      ssr: false // 只在client被打包引用
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    "@nuxtjs/sitemap",
    "@nuxtjs/robots"
  ],

  /*
    ** Add server middleware
    ** Nuxt.js uses `connect` module as server
    ** So most of express middleware works with nuxt.js server middleware
    */
    // serverMiddleware: [
    //   // body-parser middleware
    //   bodyParser.json(),
    //   // session middleware
    //   session({
    //     secret: 'super-secret-key',
    //     resave: false,
    //     saveUninitialized: false,
    //     cookie: { maxAge: 60000 }
    //   }),
    //   // Api middleware
    //   // We add /api/login & /api/logout routes
    //   '~/admin'
    // ],
  /*
   ** Axios module configuration
   */
  // axios: {
  //   // baseURL: process.env.BASE_URL || 'http://127.0.0.1:3000'
  //   // See https://github.com/nuxt-community/axios-module#options
  //   proxy: true,
  //   prefix: '/baseUrl', // baseURL
  //   credentials: true,
  // },
  
  // proxy: {
  //   '/baseUrl': {
  //     target: 'https://668ni.com', // 代理地址
  //     secure: true, // 如果是https接口，需要配置这个参数
  //     // changeOrigin: true,
  //     pathRewrite: {
  //       '^/baseUrl': ''
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
    vendor: ['element-ui'],
    // analyze: true,
    //         vendor: [],
    //         maxChunkSize: 300000,
    //         babel: {
    //             plugins: [
    //                 [
    //                     'component',
    //                     {
    //                         'libraryName': 'element-ui',
    //                         'styleLibraryName': 'theme-chalk'
    //                     }
    //                 ]
    //             ]
    //         },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    },
    babel: {
      'plugins': remove_console
    }
  }
}
