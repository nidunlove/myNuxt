

export const state = () => ({
	title: '一枚前端开发',
  keywords: '前端导航,前端网址,前端开发,web前端,前端技术,IT前端,倪盾,个人主页,博客,前端,H5,网址,学习,分享',
  description: '一枚前端开发,一堆网址导航,一些技术分享,一点知识学习,一个博客/主页'
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}

// import Vue from 'vue'
// import Vuex from 'vuex'
// 
// import admin from './admin';
// 
// Vue.use(Vuex)
// 
// const store = () => new Vuex.Store({
// 
//   state: {
//     title: '一枚前端开发',
//     keywords: '前端导航,前端网址,前端开发,web前端,前端技术,IT前端,倪盾,个人主页,博客,前端,H5,网址,学习,分享',
//     description: '一枚前端开发,一堆网址导航,一些技术分享,一点知识学习,一个博客/主页'
//   },
//   mutations: {
//     increment (state) {
//       // state.counter++
//     }
//   },
//   actions: {
//     nuxtServerInit ({ commit }, { req }) {
//       console.log('nuxtServerInit');
//       if (req.session && req.session.authUser) {
//         commit('SET_USER', req.session.authUser)
//       }
//     },
//   },
//   modules: {
//     admin
//   }
// })
// 
// export default store
