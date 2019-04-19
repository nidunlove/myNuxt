
import Vue from 'vue'

/*请求地址配置*/
let MY_BASEURL = "";
if (process.env.NODE_ENV === 'development') {
    // dev 开发 run dev
    // MY_BASEURL = "/baseUrl";
} else {
    // build 线上和测试 run build
    MY_BASEURL = "http://47.101.189.40";
}


const urlConfig = {
	//公司团队网址分享
	teamlistshare: MY_BASEURL+'/api/home/teamlistshare',
	//组织分享
	orglistshare: MY_BASEURL+'/api/home/orglistshare',
	//色彩
	color: MY_BASEURL+'/api/color/color',
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