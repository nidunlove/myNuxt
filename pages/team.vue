<template>
  <section class="con-main">
    <div class="linkTeamShare">
      <h1>前端团队网址</h1>
      <!-- {{resData}} -->
      <div class="link-lv-1" v-for="(item,index) in resData" :key="index">
        <h2>{{item.title}}</h2>
        <div class="link-lv-2">
          <!-- <h4> -->
            <ul>
              <li v-for="(item2,index2) in item.data" :key="index2"><a :href="item2.url" :title="item2.title" :alt="item2.title" target="_blank">{{item2.title}}</a></li>
            </ul>

          <!-- </h4> -->
        </div>
      </div>
    </div>
    <!-- <h1>其他相关分享(持续更新)</h1>
    <ul>
      <li><a href="https://github.com/niezhiyang/open_source_team#1%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4" target="_blank">GitHub国内顶尖团队的开源地址</a></li>
      <li><a href="https://github.com/webproblem/learning-article" target="_blank">GitHub前端资源整合</a></li>
    </ul> -->
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
      title: this.$store.state.title+'|'+this.title,
      meta: [
        { hid: 'keywords', name: 'keywords', content: this.$store.state.keywords },
        { hid: 'description', name: 'description', content: this.$store.state.description }
      ]
    }
  },
  asyncData (context) {
    // console.log('%j','asyncData');
    return context.app.$axios.get(context.app.$urlConfig.teamlistshare)
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
  @import url(../assets/css/module/shareLink.less);

</style>
