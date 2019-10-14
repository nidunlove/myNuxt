const express = require('express')
const router = express.Router()

var _msg = require('../../mongoBase/msg')

var taobao_fed = require('../service/taobao_fed.js');

var i360_75team = require('../service/360_75team.js');

var TestService = require("../../mongoose/Service/Test.js");

/*淘宝fed，抓取*/
router.post('/taobaofed_start', function(req, res, next) {
  taobao_fed.action().then(result => {
    _msg.pass(res,'',result)
  }).catch(err => {
    _msg.fail(res,'500',500)
    console.log(err);
  });
});
/*360奇舞团，抓取*/
router.post('/i360_75team_start', function(req, res, next) {
  i360_75team.action().then(result => {
    _msg.pass(res,'',result)
  }).catch(err => {
    _msg.fail(res,'500',500)
    console.log(err);
  });
});

/*分页*/
router.post('/iWormManage', function(req, res, next) {

  let whereStr = {};
  let mysort = {};
  let reqBody = req.body;
  let limit = reqBody.pageSize || 10;
  var page = reqBody.currentPage || 1;

  TestService.pageQuery(page, limit,'', whereStr, mysort).then(res_db => {
    _msg.pass(res,'',res_db)
  }).catch(err => {
    _msg.fail(res,'500',500)
    console.log(err);
  });
});

/*批量新增*/
router.post('/iWormAddList', function(req, res, next) {
  let list = req.body.data;
  TestService.insertMany(list).then(res_db => {
    _msg.pass(res,'',res_db)
  }).catch(err => {
    _msg.fail(res,'500',500)
    console.log(err);
  });
});

/*根据id删除*/
router.post('/iWormDelByIds', function(req, res, next) {
  let ids = req.body.ids;
  TestService.deleteByIds(ids).then(res_db => {
    _msg.pass(res,'',res_db)
  }).catch(err => {
    _msg.fail(res,'500',500)
    console.log(err);
  });
});
/*更新order*/
router.post('/iWormUpdateOrder', function(req, res, next) {
  let id = req.body.id;
  let order = req.body.order;
  TestService.findByIdAndUpdate(id, {order:order},{}).then(res_db => {
    _msg.pass(res,'',res_db)
  }).catch(err => {
    _msg.fail(res,'500',500)
    console.log(err);
  });
  // let whereStr = {id:id};
  // let updateStr = {order:order};
  // TestService.updateOne(whereStr, updateStr).then(res_db => {
  //   _msg.pass(res,'',res_db)
  // }).catch(err => {
  //   _msg.fail(res,'500',500)
  //   console.log(err);
  // });
});

module.exports = router;
