
import Vue from 'vue'



let pageUtils = {

	  contenWidth: 1024,
	  contenHeight: 600,

	  frameConHeight: 600-61,
	  // frameConHeightSeller:window.innerHeight-60-30||document.body.clientHeight-60-30,
}

if (process.browser) {
  pageUtils = {
  
  	  contenWidth: window.innerwidth||document.body.clientWidth,
  	  contenHeight: window.innerHeight||document.body.clientHeight,
  
  	  frameConHeight: window.innerHeight-61||document.body.clientHeight-61,
  	  // frameConHeightSeller:window.innerHeight-60-30||document.body.clientHeight-60-30,
  }
}




export default {
  install: function(Vue) {
    Object.defineProperty(Vue.prototype, '$pageUtils', { value: pageUtils });
  }
}
