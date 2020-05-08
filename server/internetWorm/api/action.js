const express = require('express')
const router = express.Router()

var _msg = require('../../mongoBase/msg')

var taobao_fed = require('../service/taobao_fed.js');

var i360_75team = require('../service/360_75team.js');

var tencent_AlloyTeam = require('../service/tencent_AlloyTeam.js');

var jd_aotu = require('../service/jd_aotu.js');

var netEase_feg = require('../service/netEase_feg.js');

var toutiao_blog = require('../service/toutiao_blog.js');

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
router.post('/taobaofed_cate', function(req, res, next) {
  // console.log(req);
  taobao_fed.action_cata(req.body).then(result => {
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
/*腾讯 AlloyTeam，抓取*/
router.post('/tencent_AlloyTeam_start', function(req, res, next) {
  tencent_AlloyTeam.action().then(result => {
    _msg.pass(res,'',result)
  }).catch(err => {
    _msg.fail(res,'500',500)
    console.log(err);
  });
});
/*京东 凹凸实验室，抓取*/
router.post('/jd_aotu_start', function(req, res, next) {
  jd_aotu.action().then(result => {
    _msg.pass(res,'',result)
  }).catch(err => {
    _msg.fail(res,'500',500)
    console.log(err);
  });
});
/*网易 feg前端团队，抓取*/
router.post('/netEase_feg_start', function(req, res, next) {
  netEase_feg.action().then(result => {
    _msg.pass(res,'',result)
  }).catch(err => {
    _msg.fail(res,'500',500)
    console.log(err);
  });
});
/*字节跳动技术博客，抓取*/
router.post('/toutiao_blog_start', function(req, res, next) {
  toutiao_blog.action().then(result => {
    _msg.pass(res,'',result)
  }).catch(err => {
    _msg.fail(res,'500',500)
    console.log(err);
  });
});

/*分页*/
router.post('/iWormManage', function(req, res, next) {

  // let whereStr = req.filter;
  // let mysort = {};
  let reqBody = req.body;
  let mysort = reqBody.sort;
  let whereStr = reqBody.filter;
  let limit = reqBody.pageSize || 10;
  let page = reqBody.currentPage || 1;

  TestService.pageQuery(page, limit,'', whereStr, mysort).then(res_db => {
    _msg.pass(res,'',res_db);
  }).catch(err => {
    _msg.fail(res,'500',500);
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
