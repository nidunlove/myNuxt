<template>
  <section class="con-main">
    <div class="linkTeamShare">
      <h1>开发api接口</h1>
      <!-- {{resData}} -->
      <div class="link-lv-1" v-for="(item,index) in resData" :key="index">
        <h2>{{item.title}}</h2>
        <div class="link-lv-2">
          <!-- <h4> -->
            <ul>
              <li v-for="(item2,index2) in item.data" :key="index2">
                <span>{{item2.title}}</span>
                <a :href="item2.url" :title="item2.title" :alt="item2.title" target="_blank">
                  {{item2.url}}
                </a>
              </li>
            </ul>
            
          <!-- </h4> -->
        </div>
      </div>
      <h1>开放平台</h1>
      <ul>
        <li v-for="(item,index) in listData" :key="index">
          <ul>
              <li v-for="(item2,index2) in item.data" :key="index2">
                <span>{{item2.title}}</span>
                <a :href="item2.url" :title="item2.title" :alt="item2.title" target="_blank">
                  {{item2.url}}
                </a>
              </li>
            </ul>
          </li>
      </ul>
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
      resData:{},
      listData:[],
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
    return context.app.$axios.get(context.app.$urlConfig.openApi)
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
    this.getData(this.$urlConfig.OpenPlatform);
    // this.getData('/a');
  },
  methods: {
    getData(url){
      this.$axios.get(url)
        .then(({ data }) => {
          console.log("数据请求成功");
          console.log(data);
          if(200===data.code){
            this.listData = data.data;
          }
           
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
