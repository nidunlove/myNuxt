//参考：https://blog.csdn.net/u012187452/article/details/73478028
// 加载http模块
// var http = require('http');
var http = require('https');
// Cheerio 是一个Node.js的库， 它可以从html的片断中构建DOM结构，然后提供像jquery一样的css选择器查询
var cheerio = require('cheerio');

var dateFilter = require('../../utils/dateFilter.js'); //api 公用工具

var apiUtils = require('../../utils/utils.js'); //api 公用工具

// 定义网络爬虫的目标地址：奇舞团博客
// var url = 'https://75team.com/post/list';
var url = 'https://75.team/post/list';
var detBaseUr = 'https://75.team';
var source_name = "360奇舞团";
var source_type = "360";

// let awite = apiUtils.AsyncFileJSON('../api/data/Color.json');

// async () => {
//   const source_data_list = await apiUtils.AsyncFileJSON('../../api/JSON/common.json');

//   // console.log(data)
//   // source_data
//   var source_data = source_data_list.find(item=>item.key == source_type);
//   console.log("source_data",source_data);
//   source_name = source_data.value;
//   // source_data_list.find(value=>value>4)
// }

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
	var ArticleBaseUrl = detBaseUr;
  if (!!html) {
    // 沿用JQuery风格，定义$
    var $ = cheerio.load(html);
    //最新文章dom
    var newDomList = $("#page-index");
    //遍历数据
    newDomList.find('.post').each(function(item) {
      var newItem = $(this);
      // 向数组插入数据
      reData.push({
      	classify: "",
        title: newItem.find(".title a").text(),
        href: ArticleBaseUrl+newItem.find(".title a").attr('href'),
        desc: "",
        author: newItem.find(".meta .author").text(),
        time: dateFilter.FilterDateTimeStr_Type2(newItem.find(".meta .date").text()),
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




module.exports = Service;
