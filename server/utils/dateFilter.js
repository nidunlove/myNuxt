
var path = require('path'); //系统路径模块
var fs = require('fs'); //文件模块

var utils = {};

/**格式化时间字符串：yyyy/mm/dd */

/* 2019-01-01 */
utils.FilterDateTimeStr_Type1 = (timeStr) => {
  let s = timeStr;
  let sArr = s.split('-');
  let y = sArr[0];
  let m = sArr[1];
  let d = sArr[2];
  return y+'/'+m+'/'+d;
}

/*10月09, 2019*/
utils.FilterDateTimeStr_Type2 = (timeStr) => {
  let s = timeStr;
  // let sArr = s.split('-');
  let y = s.substring(6,11);
  let m = s.substring(0,2);
  let d = s.substring(3,5);
  return y+'/'+m+'/'+d;
}

/*2019年10月09日*/
utils.FilterDateTimeStr_Type3 = (timeStr) => {
  let s = timeStr;
  // let sArr = s.split('-');
  let y = s.substring(0,4);
  let m = s.substring(5,7);
  let d = s.substring(8,10);
  return y+'/'+m+'/'+d;
}

// exports.utils = utils;
module.exports = utils;
