// import { Router } from 'express'
const express = require('express')
const router = express.Router()

var apiUtils = require('../utils/utils.js'); //api 公用工具

router.get('/', function(req, res, next) {
    let result =  {
        data:[]
    };
    res.status(200).json(result);
});
/* 请求 */
//创建get接口
//前端相关著名公司团队网址
router.get('/teamlistshare', function(req, res) {
    apiUtils.ConvertJSONFileToData('../api/data/FamousCompanyTeamShare.json',function(result){
        res.status(result.code).json(result.data);
    });
});
//
//前端相关著名/权威机构网址
router.get('/orglistshare', function(req, res) {
    apiUtils.ConvertJSONFileToData('../api/data/FamousOrgShare.json',function(result){
        res.status(result.code).json(result.data);
    });
});
module.exports = router;