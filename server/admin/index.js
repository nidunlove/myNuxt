
const express = require('express')

var router = express.Router()

// var express = require("express");
    // var app = express();

//     var session = require("express-session");
// //
// //     //配置中间件
//     router.use(session({
//         secret: 'this is string key',   // 可以随便写。 一个 String 类型的字符串，作为服务器端生成 session 的签名
//
//
//         name:'session_id',/*保存在本地cookie的一个名字 默认connect.sid  可以不设置*/
//         resave: false,   /*强制保存 session 即使它并没有变化,。默认为 true。建议设置成 false。*/
//         saveUninitialized: true,   //强制将未初始化的 session 存储。  默认值是true  建议设置成true
//         cookie: {
//             maxAge:5000    /*过期时间*/
//
//         },   /*secure https这样的情况才可以访问cookie*/
//
//         //设置过期时间比如是30分钟，只要游览页面，30分钟没有操作的话在过期
//
//         rolling:true //在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false）
//
//
//     }))

// var session = require("express-session");
// const app = express()
// app.use(session({
//   secret :  'secret_nidun', // 对session id 相关的cookie 进行签名
//   resave : true,
//   saveUninitialized: false, // 是否保存未初始化的会话
//   cookie : {
//     maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
//   },
// }));

router.use('/sys',require('./login'))

router.use('/internetWorm',require('../internetWorm/api/action'))




module.exports = router;
