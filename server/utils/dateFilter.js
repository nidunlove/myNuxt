
var path = require('path'); //系统路径模块
var fs = require('fs'); //文件模块

var utils = {};

//当前时间戳
utils.DateTimeNow = () => {
  return new Date().getTime();
}
/* 时间戳 yyyy/mm/dd HH:MM:SS*/
utils.FilterDateTimeStr_Now = () => {
  let date = new Date();
  // let s = timeStr;
  // let sArr = s.split('-');
  let y = date.getFullYear();
  let M = date.getMonth()+1;
  let d = date.getDate();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  return y+'/'+M+'/'+d + ' ' +h+':'+m+':'+s;
  // return timeStr.replace(/-/g,"/");
}
utils.FilterDateTimeStr_Type0 = (timeStr) => {
  let date = new Date(timeStr);
  // let s = timeStr;
  // let sArr = s.split('-');
  let y = date.getFullYear();
  let M = date.getMonth()+1;
  let d = date.getDate();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  return y+'/'+M+'/'+d + ' ' +h+'/'+m+'/'+s;
  // return timeStr.replace(/-/g,"/");
}

/**格式化时间字符串：yyyy/mm/dd */

/* 2019-01-01 */
utils.FilterDateTimeStr_Type1 = (timeStr) => {
  // let s = timeStr;
  // let sArr = s.split('-');
  // let y = sArr[0];
  // let m = sArr[1];
  // let d = sArr[2];
  // return y+'/'+m+'/'+d;
  return timeStr.replace(/-/g,"/");
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

/*发表于:2020-04-27*/
utils.FilterDateTimeStr_Type4 = (timeStr) => {
  // let s = timeStr.substring(4,14);
  // str.replace(/需要替换的字符串/g，"新字符串")
  let s = timeStr.replace(/发表于:/g,"");
  // let sArr = s.split('-');
  // let y = sArr[0];
  // let m = sArr[1];
  // let d = sArr[2];
  return s.replace(/-/g,"/");
  // return timeStr;
}



// exports.utils = utils;
module.exports = utils;
