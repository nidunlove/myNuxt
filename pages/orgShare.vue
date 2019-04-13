<template>
  <section class="con-main">
    <div class="linkTeamShare">
      <h1>前端-学习/组织网址</h1>
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
        { hid: 'keywords', name: 'keywords', content: '倪盾,个人主页,前端,前端开发,web前端,it,码农,前端网址' },
        { hid: 'description', name: 'description', content: '倪盾的个人主页，一枚IT码农/前端开发' }
        
      ]
    }
  },
  asyncData (context) {
    // console.log('%j','asyncData');
    return context.app.$axios.get('/api/home/orglistshare')
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
    // getData(url){
    //   this.$axios.get(url)
    //     .then(({ data }) => {
    //       console.log("数据请求成功");
    //       console.log(data);
    //       // try{
    //       //   console.log(JSON.parse(data));
    //       // }catch(e){
    //       //   console.log(e);
    //       // }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       console.log("请求失败");
    //     });
    // }
   }
}
</script>

<style scoped lang="less">
  @import url(../assets/css/module/shareLink.less);

</style>
