var mongoose = require('mongoose');

var async = require('async');

const Test = require("../Schema/Test.js");


//该模块入口
const Service = {};

/**
 * 插入单条
 */
Service.insertOne = (obj) => {
  return new Promise((resolve, reject) => {
    var test = new Test(obj);
    test.save((err, res) => {
      if (err) {
        console.log("Error:" + err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

//批量插入
Service.insertMany = (insertList) => {
  return Test.insertMany(insertList);
}

//删除单条
Service.deleteOne = (whereStr) => {
  return Test.deleteOne(whereStr);
}

//删除多条
Service.deleteMany = (whereStr) => {
  return Test.deleteMany(whereStr);
}

//根据ID删除多条
Service.deleteByIds = (ids) => {
  let _ids = ids.map(v => mongoose.Types.ObjectId(v));
  let whereStr = {
    _id: {
      $in: _ids
    },
  };
  return Test.deleteMany(whereStr);
}

//更新单条
Service.updateOne = (whereStr, updateStr) => {
  return Test.updateOne(whereStr, updateStr);
}

//更新多条
Service.updateMany = (whereStr, updateStr) => {
  return Test.updateMany(whereStr, updateStr);
}

//根据ID更新
Service.findByIdAndUpdate = (id, update, options) => {
  // return Test.findByIdAndUpdate(id, update, options, callback);
  return new Promise((resolve, reject) => {

    let ObjectId = mongoose.Types.ObjectId(id);
    // var test = new Test(obj);
    Test.findByIdAndUpdate(ObjectId, update, options, (err, res) => {
      if (err) {
        console.log("Error:" + err);
        reject(err);
      } else {
        resolve(res);
      }
    });
    // Test.findByIdAndUpdate((err, res) => {
    //   if (err) {
    //     console.log("Error:" + err);
    //     reject(err);
    //   } else {
    //     resolve(res);
    //   }
    // });
  });
}

//查询指定数据
Service.findList = (whereStr) => {
  return Test.find(whereStr);
}

//分页
Service.findPageList = (skip, limit, whereStr, mysort) => {
  return Test.find(whereStr).sort(mysort).skip(skip).limit(limit);
}

/*分页+合计*/
Service.pageQuery = (page, pageSize, populate, queryParams, sortParams) => {

  return new Promise((resolve, reject) => {
    var start = (page - 1) * pageSize;
    var $page = {
      pageNumber: page
    };
    async.parallel({
      count: function(done) { // 查询数量
        Test.count(queryParams).exec(function(err, count) {
          done(err, count);
        });
      },
      records: function(done) { // 查询一页的记录
        Test.find(queryParams).skip(start).limit(pageSize).populate(populate).sort(sortParams).exec(
          function(err, doc) {
            done(err, doc);
          });
      }
    }, function(err, results) {
      var count = results.count;
      $page.count = count;
      // $page.pageCount = (count - 1) / pageSize + 1;
      $page.results = results.records;
      // callback(err, $page);
      if (err) {
        console.log("Error:" + err);
        reject(err);
      } else {
        resolve($page);
      }
      // resolve(err, $page);
    });
  });
};

module.exports = Service;
