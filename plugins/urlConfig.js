
import Vue from 'vue'

/*请求地址配置*/
let MY_BASEURL = "";
// let MY_BASEURL_proxy = "";
if (process.env.NODE_ENV === 'development') {
    // dev 开发 run dev
    // MY_BASEURL = "/baseUrl";
    // MY_BASEURL_proxy = "/baseUrl";
} else {
    // build 线上和测试 run build
    MY_BASEURL = "http://668ni.com";
}


const urlConfig = {
	//公司团队网址分享
	teamlistshare: MY_BASEURL+'/api/home/teamlistshare',
	//组织分享
	orglistshare: MY_BASEURL+'/api/home/orglistshare',
	//色彩
	color: MY_BASEURL+'/api/color/color',
	//开放Api
	openApi: MY_BASEURL+'/api/openApi/openApi',
	//开放平台
	OpenPlatform: MY_BASEURL+'/api/openApi/OpenPlatform',

  //后台管理
  adminLogin:MY_BASEURL+'/admin/sys/login',
  adminLogout:MY_BASEURL+'/admin/sys/logout',
  //爬取页面
  //taobao fed
  taobaofedWormStart: MY_BASEURL+'/admin/internetWorm/taobaofed_start',
  //360奇舞团
  i360_75team_start: MY_BASEURL+'/admin/internetWorm/i360_75team_start',

  //新增数据
  addIWormList: MY_BASEURL+'/admin/internetWorm/iWormAddList',
  //爬取的数据，分页
  iWormPageList: MY_BASEURL+'/admin/internetWorm/iWormManage',
  //根据id删除多条
  deleteByIds: MY_BASEURL+'/admin/internetWorm/iWormDelByIds',
  //根据id更新单条
  updateOrderById: MY_BASEURL+'/admin/internetWorm/iWormUpdateOrder',
}

// const Vue =  {
//   install: function(Vue) {
//     // Do stuff
//   }
// }

// export default {
// 	urlConfig
// }
// export default {
//   install: function(Vue) {
//     Object.defineProperty(Vue.prototype, '$urlConfig', { value: urlConfig });
//   }
// }
//同时注入
//https://zh.nuxtjs.org/guide/plugins
export default ({ app }, inject) => {
  inject('urlConfig', urlConfig)
}
