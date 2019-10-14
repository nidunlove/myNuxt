//参考：https://blog.csdn.net/u012187452/article/details/73478028
// 加载http模块
// var http = require('http');
var http = require('https');
// Cheerio 是一个Node.js的库， 它可以从html的片断中构建DOM结构，然后提供像jquery一样的css选择器查询
var cheerio = require('cheerio');


// 定义网络爬虫的目标地址：淘宝fed主页
var url = 'https://fed.taobao.org';
var source_name = "淘宝fed";

//该模块入口
const Service = {};

//抓取并存储到数据库
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

//解析HTML抓取最新文章
function filterNews(html) {
	var reData = [];
	var ArticleBaseUrl = url;
  if (!!html) {
    // 沿用JQuery风格，定义$
    var $ = cheerio.load(html);
    //最新文章dom
    var newDomList = $("#recent-post");
    //遍历数据
    newDomList.find('li').each(function(item) {
      var newItem = $(this).find(".item-inner");
      // 向数组插入数据
      reData.push({
      	classify: newItem.find(".item-category a").text(),
        title: newItem.find(".item-title a").text(),
        href: ArticleBaseUrl+newItem.find(".item-title a").attr('href'),
        desc: "",
        author: newItem.find(".item-author").text(),
        time: newItem.find(".item-date time").text(),
        creat_time: new Date().getTime(),
        source_name : source_name,
        source_url : url,
      });
    });
  } else {
    console.log('解析无数据传入！');
  }
  //返回数据
  return reData;
}


module.exports = Service;
