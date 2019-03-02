<template>
  <section class="con-main">
    <div class="linkTeamShare">
      <h1>前端团队网址分享</h1>
      <!-- {{resData}} -->
      <div class="link-lv-1" v-for="(item,index) in resData" :key="index">
        <h2>{{item.title}}</h2>
        <div class="link-lv-2" v-for="(item2,index2) in item.data" :key="index2">
          <!-- <h4> -->
            <ul>
              <li><a :href="item2.url" :title="item2.title" :alt="item2.title" >{{item2.title}}</a></li>
            </ul>
            
          <!-- </h4> -->
        </div>
      </div>
    </div>
    <!-- <div>
      <logo/>
      <h1 class="title">
        myNuxt
      </h1>
      <h2 class="subtitle">
        My primo Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div> -->
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  // components: {
  //   Logo,Header,Footer
  // },
  data () {
    return {
      title: '倪盾的个人主页',
      resData:{}
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: '倪盾的个人主页，一枚IT码农/前端开发' }
      ]
    }
  },
  asyncData (context) {
    // console.log('%j','asyncData');
    return context.app.$axios.get('/api/home/list')
    .then((res) => {
      // console.info('%j','asyncData axios',res);
      if(res && res.data){
        // context.app.data.resData = res.data;
        return { resData: res.data.data }
      }

      // return { title: res.data.title }
    })
  },
  fetch () {
    // console.log('%j','fetch');
    // The fetch method is used to fill the store before rendering the page
  },
  
  // and more functionality to discover
  //创建时
  created() {
    // console.log('created');
  },
  //编译挂载前
  mounted() {
    console.log('mounted');
    // this.getData('/');
    // this.getData('/api/home');
    // this.getData('/api/home/list');
    // this.getData('/api');
    // this.getData('/a');
  },
  methods: {
    getData(url){
      this.$axios.get(url)
        .then(({ data }) => {
          console.log("数据请求成功");
          console.log(data);
          // try{
          //   console.log(JSON.parse(data));
          // }catch(e){
          //   console.log(e);
          // }
        })
        .catch((error) => {
          console.log(error);
          console.log("请求失败");
        });
    }
   }
}
</script>

<style scoped lang="less">
  .linkTeamShare {

    h1 {
      margin-bottom: 20px;
      font-size: 18px;
      color:#666;
    }
    .link-lv-1 {
      margin: 10px;
      h2 {
        font-size: 18px;
        color:#333;
      }
      .link-lv-2 {
        ul {
          padding: 5px;
          margin-left: 5px;
          li {
            display: inline-block;
            margin: 0 10px;
            a {
              color:#4169E1;
              text-decoration: underline;
              &:hover {
                color:#1E90FF;
              }
            }
          }
        }
      } 
    }
  }

</style>
