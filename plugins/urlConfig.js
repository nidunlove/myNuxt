
import Vue from 'vue'

/*请求地址配置*/
let HY_BASEURL = "";
if (process.env.NODE_ENV === 'development') {
    // dev 开发 run dev
    // HY_BASEURL = "/baseUrl";
} else {
    // build 线上和测试 run build
    HY_BASEURL = "";
}


const urlConfig = {
	//公司团队网址分享
	teamlistshare: HY_BASEURL+'/api/home/teamlistshare',
	//组织分享
	orglistshare: HY_BASEURL+'/api/home/orglistshare',
	//色彩
	color: HY_BASEURL+'/api/color/color',
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