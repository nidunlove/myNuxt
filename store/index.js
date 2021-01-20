// import Vue from 'vue'
import axios from 'axios'

export const state = () => ({
  title: '一枚很懒的前端开发',
  keywords: '前端导航,前端网址,前端开发,web前端,前端技术,IT前端,倪盾,个人主页,博客,前端,H5,网址,学习,分享',
  description: '一枚前端开发,一堆网址导航,一些技术分享,一点知识学习,一个博客/主页',
  authUser: null,
})

export const mutations = {
  SET_USER (state, user) {
    state.authUser = user
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login ({ commit }, { url,username, password }) {
    try {
      const { data } = await axios.post(url, { username, password })
      let userData = data.data;
      commit('SET_USER', {
        username: userData.username
      })
    } catch (error) {
		 console.log(error);
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout ({ commit }, {url}) {
    await axios.post(url)
    commit('SET_USER', null)
  }

}

// const state = ({
//   authUser: null
// });
// const getters = {
//   // include: (state) => (val) => {
//   //   return state.list.indexOf(val) > -1;
//   // }
// };
// const mutations = {
//   SET_USER (state, user) {
//     state.authUser = user
//   }
// };
// const actions = {
//   // nuxtServerInit is called by Nuxt.js before server-rendering every page
//   nuxtServerInit ({ commit }, { req }) {
//     console.log('nuxtServerInit');
//     if (req.session && req.session.authUser) {
//       commit('SET_USER', req.session.authUser)
//     }
//   },
//   async login ({ commit }, { url,username, password }) {
//     try {
//       // console.log(Vue.$urlConfig);
//       const { data } = await axios.post(url, { username, password })
//       commit('SET_USER', data)
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         throw new Error('Bad credentials')
//       }
//       throw error
//     }
//   },
//
//   async logout ({ commit }, {url}) {
//     await axios.post(url)
//     commit('SET_USER', null)
//   }
// };
//
// export default {
//   namespaced: true,
//   state,
//   getters,
//   actions,
//   mutations
// };
