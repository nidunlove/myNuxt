

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mytestmdb";

var DB_CONFIG = require('./mongodbConfig.js');
var DB_Utils = require('./mongodbUtils.js');

// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//   if (err) throw err;
//   console.log("数据库已创建!");
//   db.close();
// });

// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//     if (err) throw err;
//     console.log('数据库已创建');
//     var dbase = db.db("mytestmdb");
//     dbase.createCollection('site', function (err, res) {
//         if (err) throw err;
//         console.log("创建集合!");
//         db.close();
//     });
// });

// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mytestmdb");
//     var myobj = { name: "菜鸟教程", url: "www.runoob" };
//     dbo.collection("site").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });

var dburl = DB_CONFIG.dbBaseUrl;
var dbName = DB_CONFIG.testDBName;
var dbcolltName = DB_CONFIG.testCollectionName_site;


var insertData = { name: "菜鸟教程11", url: "www.runoob22" };
DB_Utils.insertOne(dburl,dbName,dbcolltName,insertData);