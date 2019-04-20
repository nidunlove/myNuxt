// import { Router } from 'express'
const express = require('express')
// import home from './home'
// const app = express()
var router = express.Router()
// console.log(router);
// router.get('/', function(req, res, next) {
//     let result =  {
//         data:'welcome'
//     };
//     res.status(200).json(result);
// });

router.use('/home',require('./home'))

router.use('/color',require('./color'))

router.use('/openApi',require('./openApi'))

router.use('/wj',require('./weijing'))

router.get('/', function(req, res, next){//首页路由
         res.send({data:'欢迎来到首页'});
         next();
      });

module.exports = router;