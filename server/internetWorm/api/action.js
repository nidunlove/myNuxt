const express = require('express')
const router = express.Router()

var _msg = require('../../mongoBase/msg')

var taobaofed = require('../service/taobaofed.js');

var TestService = require("../../mongoose/Service/Test.js");

/*淘宝fed，抓取*/
router.post('/taobaofed_start', function(req, res, next) {
  taobaofed.action().then(result => {
    _msg.pass(res,'',result)
  }).catch(err => {
    _msg.fail(res,'500',500)
    console.log(err);
  });;
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

module.exports = router;
