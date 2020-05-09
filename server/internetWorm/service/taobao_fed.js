//参考：https://blog.csdn.net/u012187452/article/details/73478028
// 加载http模块
// var http = require('http');
var http = require('https');
// Cheerio 是一个Node.js的库， 它可以从html的片断中构建DOM结构，然后提供像jquery一样的css选择器查询
var cheerio = require('cheerio');

var dateFilter = require('../../utils/dateFilter.js'); //api 公用工具

// 定义网络爬虫的目标地址：淘宝fed主页
var url = 'https://fed.taobao.org';
var source_name = "淘宝fed";
var source_type = "tb";

let cateUrl = 'https://fed.taobao.org/blogs/categories/';

//该模块入口
const Service = {};

//抓取并存储到数据库
//首页
Service.action = () => {
  return new Promise((resolve, reject) => {
    http.get(url, function(res) {
      var html = '';
      // 获取页面数据
      res.on('data', function(data) {
        html += data;
      });
      // 数据获取结束
      res.on('end', function() {
        // console.log(html);
        //抓取最新文章
        var newData = filterNews(html);
        // console.log(newData);
        //批量插入到数据库
        // var insertData = newData;

        resolve(newData);
        // return DB_Utils.insertMany(dburl,dbName,dbcolltName,insertData);

      });
    }).on('error', function(res) {
      reject(res);
      console.log(res);
      console.log('获取数据出错！');
    });
  });
}

//分类
Service.action_cata = (query) => {
  // console.log(query);
  return new Promise((resolve, reject) => {
    http.get(`${cateUrl}${encodeURIComponent(query.type)}`, function(res) {
      // http.get(`${cateUrl}`, function(res) {
      var html = '';
      // 获取页面数据
      res.on('data', function(data) {
        html += data;
      });
      // 数据获取结束
      res.on('end', function() {
        // console.log(html);
        //抓取最新文章
        var newData = filterNewsCate(html,query.type);
        resolve(newData);
        // resolve([]);

      });
    }).on('error', function(res) {
      reject(res);
      console.log(res);
      console.log('获取数据出错！');
    });
  });
}



//解析HTML抓取最新文章
//-首页
function filterNews(html) {
	var reData = [];
	var ArticleBaseUrl = url;
  if (!!html) {
    // 沿用JQuery风格，定义$
    var $ = cheerio.load(html);
    //最新文章dom
    var newDomList = $(".main-article");
    //遍历数据
    newDomList.each(function(item) {
      var newItem = $(this);
      // 向数组插入数据
      reData.push({
      	classify: "",
        title: newItem.find(".article-title h1").text(),
        href: ArticleBaseUrl+newItem.attr('href'),
        desc: newItem.find(".article-desc").text(),
        author: newItem.find(".article-bottom span").eq(0).text(),
        time: newItem.find(".article-bottom span").eq(1).text(),
        creat_time: dateFilter.DateTimeNow(),
        source_name : source_name,
        source_type: source_type,
        source_url : url,
      });
    });
  } else {
    console.log('解析无数据传入！');
  }
  //返回数据
  return reData;
}

//-分类
function filterNewsCate(html,classify) {
	var reData = [];
	var ArticleBaseUrl = url;
  if (!!html) {
    // 沿用JQuery风格，定义$
    var $ = cheerio.load(html);
    //最新文章dom
    var newDomList = $(".left-content");
    //遍历数据
    newDomList.find(".article-card-wrapper").each(function(item) {
      var newItem = $(this);
      // 向数组插入数据
      reData.push({
      	classify: classify,
        title: newItem.find(".article-card-inner h2").text(),
        href: ArticleBaseUrl+newItem.attr('href'),
        desc: newItem.find(".article-preview-content").text(),
        author: newItem.find(".card-frontmatter span").eq(0).text(),
        time: dateFilter.FilterDateTimeStr_Type4(newItem.find(".card-frontmatter span").eq(1).text()),
        creat_time: dateFilter.DateTimeNow(),
        source_name : source_name,
        source_type: source_type,
        source_url : url,
      });
    });
  } else {
    console.log('解析无数据传入！');
  }
  //返回数据
  return reData;
}
// function filterNews(html) {
// 	var reData = [];
// 	var ArticleBaseUrl = url;
//   if (!!html) {
//     // 沿用JQuery风格，定义$
//     var $ = cheerio.load(html);
//     //最新文章dom
//     var newDomList = $("#recent-post");
//     //遍历数据
//     newDomList.find('li').each(function(item) {
//       var newItem = $(this).find(".item-inner");
//       // 向数组插入数据
//       reData.push({
//       	classify: newItem.find(".item-category a").text(),
//         title: newItem.find(".item-title a").text(),
//         href: ArticleBaseUrl+newItem.find(".item-title a").attr('href'),
//         desc: "",
//         author: newItem.find(".item-author").text(),
//         time: dateFilter.FilterDateTimeStr_Type1(newItem.find(".item-date time").text()),
//         creat_time: new Date().getTime(),
//         source_name : source_name,
//         source_url : url,
//       });
//     });
//   } else {
//     console.log('解析无数据传入！');
//   }
//   //返回数据
//   return reData;
// }


module.exports = Service;
