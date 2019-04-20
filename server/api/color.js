// import { Router } from 'express'
const express = require('express')
const router = express.Router()

var apiUtils = require('../utils/utils.js'); //api 公用工具

/* 请求 */
//创建get接口
//颜色
router.get('/color', function(req, res) {
    apiUtils.ConvertJSONFileToData('../api/data/Color.json',function(result){
        res.status(result.code).json(result.data);
    });
});
//

module.exports = router;