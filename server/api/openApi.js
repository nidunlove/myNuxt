// import { Router } from 'express'
const express = require('express')
const router = express.Router()



var apiUtils = require('../utils/utils.js'); //api 公用工具

/* 请求 */
//创建get接口
//能直接调用的 开放api
router.get('/openApi', function(req, res) {

    // console.log("apiUtils",apiUtils);
    apiUtils.ConvertJSONFileToData('../api/data/OpenApi.json',function(result){
        res.status(result.code).json(result.data);
    });

});
//一些开放平台网址
router.get('/OpenPlatform', function(req, res) {

    // console.log("apiUtils",apiUtils);
    apiUtils.ConvertJSONFileToData('../api/data/OpenPlatform.json',function(result){
        res.status(result.code).json(result.data);
    });

});
module.exports = router;