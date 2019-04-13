// import { Router } from 'express'
const express = require('express')
const router = express.Router()

var path = require('path'); //系统路径模块
var fs = require('fs'); //文件模块

// res.render('index', { title: 'Express' });

// var AipFaceClient = require("baidu-aip-sdk").face;

// // 设置APPID/AK/SK
// var APP_ID = "11125054";
// var API_KEY = "fHuQczGD4K6aCtCC4yrXZir7";
// var SECRET_KEY = "5CKcY93jPQkNGD7BkGadjGAzYARmqg7T";

// // 新建一个对象，建议只保存一个对象调用服务接口
// var client = new AipFaceClient(APP_ID, API_KEY, SECRET_KEY);

// var fs = require('fs');
router.get('/', function(req, res, next) {

    // var parmObj = req.body;
    // var image = fs.readFileSync("src/assets/table_ex1.png").toString("base64");
    // var image = parmObj.file;
    // var type = parmObj.type;
    // var fileName = parmObj.fileName;

    // var file1 = parmObj.file1;
    let result =  {
        data:[{
                title:"阿里",
                url:""
            }
        ]
    };
    res.status(200).json(result);

    // typeFN.then(function(result) {
    //     res.status(200).json(result);
    // }).catch(function(err) {
    //     // 如果发生网络错误
    //     console.log(err);
    //     res.status(500).json(err);
    // });
});
/* 请求 */
//创建get接口
//前端相关著名公司团队网址
router.get('/teamlistshare', function(req, res) {

    //console.log(req.body); //获取请求参数

    var file = path.join(__dirname, 'data/FamousCompanyTeamShare.json'); //文件路径，__dirname为当前运行js文件的目录
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
//
//前端相关著名/权威机构网址
router.get('/orglistshare', function(req, res) {

    //console.log(req.body); //获取请求参数

    var file = path.join(__dirname, 'data/FamousOrgShare.json'); //文件路径，__dirname为当前运行js文件的目录
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