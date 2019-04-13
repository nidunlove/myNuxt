// import { Router } from 'express'
const express = require('express')
const router = express.Router()

var path = require('path'); //系统路径模块
var fs = require('fs'); //文件模块

/* 请求 */
//创建get接口
router.get('/showlist', function(req, res) {

    //console.log(req.body); //获取请求参数

    var file = path.join(__dirname, 'data/weijinglist.json'); //文件路径，__dirname为当前运行js文件的目录
    //var file = 'f:\\nodejs\\data\\test.json'; //也可以用这种方式指定路径

    //读取json文件
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            // res.send('文件读取失败');
            res.status(500).json({code:500,msg:'文件读取失败'});
        } else {
            // res.send(data);
            var result = {
                code:200,
                data:{},
                msg:'数据正常'
            };
            try {
                // var result = JSON.parse(data);
                result = {
                    code:200,
                    data:JSON.parse(data),
                    msg:'数据正常'
                };
                res.status(result.code).json(result.data);
            } catch(e){
                result = {
                    code:200,
                    data:{},
                    msg:'数据解析异常'
                };
                console.log(e);
                res.status(result.code).json(result.data);
            }
            
            
        }
    });
});

module.exports = router;