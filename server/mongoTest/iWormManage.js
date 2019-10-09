//参考：https://blog.csdn.net/u012187452/article/details/73478028
// 加载http模块
// var http = require('http');
// Cheerio 是一个Node.js的库， 它可以从html的片断中构建DOM结构，然后提供像jquery一样的css选择器查询
// var cheerio = require('cheerio');

var mongoose = require('mongoose');

var DB_CONFIG = require('./mongodbConfig.js');
var DB_Utils = require('./mongodbUtils.js');

//数据库，基础配置数据
var dburl = DB_CONFIG.dbBaseUrl;
var dbName = DB_CONFIG.testDBName;
var dbcolltName = DB_CONFIG.testCollectionName_site;

// 定义网络爬虫的目标地址：淘宝fed主页
// var url = 'http://taobaofed.org';

//该模块入口
const Service = {};

//分页
Service.findPageList = (skip,limit,whereStr,mysort) => {
  return DB_Utils.findPageList(dburl,dbName,dbcolltName,skip,limit,whereStr,mysort);
}
//新增
Service.iWormAddList = (list) => {
  return DB_Utils.insertMany(dburl, dbName, dbcolltName, list);
}
//删除
Service.deleteByIds = (ids) => {
  // let _id = mongoose.Types.ObjectId(id);

  let _ids = ids.map(v => mongoose.Types.ObjectId(v));

  let whereStr = {
    _id:{$in: _ids},
    // mArray:ids
  };
  // let whereStr = {
  //   $in:ids,
  //   // mArray:ids
  // };
  // let whereStr = {
  //   _id:ids[0],
  //   // mArray:ids
  // };
  // let whereStr = ids[0];
  // let whereStr = {title:ids[0].title};
  return DB_Utils.deleteMany(dburl, dbName, dbcolltName, whereStr);
}

module.exports = Service;
