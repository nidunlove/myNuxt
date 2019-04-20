
var path = require('path'); //系统路径模块
var fs = require('fs'); //文件模块

var utils = {};

utils.ConvertJSONFileToData = function(jsonPath,callBack) {
  var file = path.join(__dirname, jsonPath); //文件路径，__dirname为当前运行js文件的目录
  var result = {
    code: 200,
    data: {},
    msg: '数据正常'
  };
  //读取json文件
  fs.readFile(file, 'utf-8', function(err, data) {
    if (err) {
      result = {
        code: 500,
        data: {},
        msg: '文件读取失败'
      };
      // res.send('文件读取失败');
      // res.status(500).json({code:500,msg:'文件读取失败'});
    } else {
      // res.send(data);
      result = {
        code: 200,
        data: {},
        msg: '数据正常'
      };
      try {
        // var result = JSON.parse(data);
        result = {
          code: 200,
          data: JSON.parse(data),
          msg: '数据正常'
        };
        // res.status(result.code).json(result.data);
      } catch (e) {
        result = {
          code: 200,
          data: {},
          msg: '数据解析异常'
        };
        console.log(e);
        // res.status(result.code).json(result.data);
      }
    }
    callBack(result);
  });
}

// exports.utils = utils;
module.exports = utils;
