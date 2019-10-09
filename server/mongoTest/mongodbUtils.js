var MongoClient = require('mongodb').MongoClient;

var DB_CONFIG = require('./mongodbConfig.js');

// var url = DB_CONFIG.dbBaseUrl;

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

const Utils = {};
//单条插入
Utils.insertOne = (url, dbName, colltName, insertData) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, {
      useNewUrlParser: true
    }, function(err, db) {
      if (err) throw err;
      // return new Promise((resolve, reject) => {
      var dbo = db.db(dbName);
      // var myobj = { name: "菜鸟教程", url: "www.runoob" };
      dbo.collection(colltName).insertOne(insertData, function(erro, res) {
        if (erro) throw erro;
        // console.log("插入单条成功");
        resolve(res);
        db.close();
      });
    });
  });
}
//批量插入
Utils.insertMany = (url, dbName, colltName, insertData) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, {
      useNewUrlParser: true
    }, function(err, db) {
      if (err) throw err;
      // return new Promise((resolve, reject) => {
      var dbo = db.db(dbName);
      // var myobj =  [
      //     { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
      //     { name: 'Google', url: 'https://www.google.com', type: 'en'},
      //     { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
      //    ];
      dbo.collection(colltName).insertMany(insertData, function(erro, res) {
        if (erro) throw erro;
        // console.log("批量插入的文档数量为: " + res.insertedCount);
        resolve(res);
        db.close();
      });
    });
  });
}

//删除单条
Utils.deleteOne = (url, dbName, colltName, whereStr) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, {
      useNewUrlParser: true
    }, function(err, db) {
      if (err) throw err;
      // return new Promise((resolve, reject) => {
      var dbo = db.db(dbName);
      // var whereStr = {"name":'菜鸟教程'};  // 查询条件
      dbo.collection(colltName).deleteOne(whereStr, function(erro, res) {
        if (erro) throw erro;
        // console.log("文档删除成功");
        resolve(res);
        db.close();
      });
    });
  });
}
//删除多条
Utils.deleteMany = (url, dbName, colltName, whereStr) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, {
      useNewUrlParser: true
    }, function(err, db) {
      if (err) throw err;
      // return new Promise((resolve, reject) => {
      var dbo = db.db(dbName);
      // console.log(whereStr);
      // var whereStr = { type: "en" };  // 查询条件
      dbo.collection(colltName).deleteMany(whereStr, function(erro, res) {
        if (erro) throw erro;
        // console.log(res.result.n + " 条文档被删除");
        resolve(res);
        db.close();
      });
    });
  });
}

//更新单条
Utils.updateOne = (url, dbName, colltName, whereStr, updateStr) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, {
      useNewUrlParser: true
    }, function(err, db) {
      if (err) throw err;
      // return new Promise((resolve, reject) => {
      var dbo = db.db(dbName);
      // var whereStr = {"name":'菜鸟教程'};  // 查询条件
      // var updateStr = {$set: { "url" : "https://www.runoob.com" }};
      dbo.collection(colltName).updateOne(whereStr, updateStr, function(erro, res) {
        if (erro) throw erro;
        // console.log("文档更新成功");
        resolve(res);
        db.close();
      });
    });
  });
}
//更新多条
Utils.updateMany = (url, dbName, colltName, whereStr, updateStr) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, {
      useNewUrlParser: true
    }, function(err, db) {
      if (err) throw err;
      // return new Promise((resolve, reject) => {
      var dbo = db.db(dbName);
      // var whereStr = {"type":'en'};  // 查询条件
      // var updateStr = {$set: { "url" : "https://www.runoob.com" }};
      dbo.collection(colltName).updateMany(whereStr, updateStr, function(erro, res) {
        if (erro) throw erro;
        // console.log(res.result.nModified + " 条文档被更新");
        resolve(res);
        db.close();
      });
    });
  });
}
//查询
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("runoob");
//     dbo.collection("site"). find({}).toArray(function(err, result) { // 返回集合中所有数据
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });
//查询指定数据
Utils.findList = (url, dbName, colltName, whereStr) => {
  return new Promise((resolve, reject) => {
    // ???
    MongoClient.connect(url, {
      useNewUrlParser: true
    }, function(err, db) {
      if (err) throw err;
      // return new Promise((resolve, reject) => {
      var dbo = db.db(dbName);
      // var whereStr = {"name":'菜鸟教程'};  // 查询条件
      dbo.collection(colltName).find(whereStr).toArray(function(erro, res) {
        if (erro) throw erro;
        // console.log(res);
        resolve(res);
        // callback(res);
        db.close();
      });
      // });
    });
  });
}

//查询分页
//如果要设置指定的返回条数可以使用 limit() 方法，该方法只接受一个参数，指定了返回的条数。
//如果要指定跳过的条数，可以使用 skip() 方法。
Utils.findPageList = (url, dbName, colltName, skip, limit, whereStr, mysort) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, {
      useNewUrlParser: true
    }, function(err, db) {
      if (err) throw err;

      var dbo = db.db(dbName);
      //{ type: 1 }  // 按 type 字段升序
      // { type: -1 } // 按 type 字段降序
      // var mysort = { type: 1 };
      dbo.collection(colltName).find(whereStr).sort(mysort).skip(skip).limit(limit).toArray(function(erro,
        res) {
        if (erro) throw erro;
        // console.log(res);
        resolve(res);
        // callback(res);
        db.close();
      });
    });
    // return new Promise((resolve, reject) => {
    //   var dbo = db.db(dbName);
    //   //{ type: 1 }  // 按 type 字段升序
    //   // { type: -1 } // 按 type 字段降序
    //   // var mysort = { type: 1 };
    //   dbo.collection(colltName).find(whereStr).sort(mysort).skip(skip).limit(limit).toArray(function(err, res) {
    //     if (err) throw err;
    //     console.log(res);
    //     resolve(res);
    //     db.close();
    //   });
    // });
  });
}


module.exports = Utils;
