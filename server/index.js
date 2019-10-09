
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

//解析post，参数
var bodyParser = require("body-parser");
// var app            =         express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//session
var session = require("express-session");
app.use(session({
  secret :  'secret_nidun', // 对session id 相关的cookie 进行签名
  resave : true,
  saveUninitialized: false, // 是否保存未初始化的会话
  cookie : {
    maxAge : 1000 * 60 * 60, // 设置 session 的有效时间，单位毫秒
  },
}));

//自定义接口
const api = require('./api/index.js')

const admin = require('./admin/index.js')

// const internetWorm = require('./internetWorm/index.js')
//自定义接口
// app.get("/a",function(req,res){  //自己的路由
//     res.send({a:1});
// });
app.use('/api',api)

app.use('/admin',admin)

// app.use('/internetWorm',internetWorm)

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
