<template>
  <section class="con-main">
    <div class="infoLinkCon">
      <!-- 前端信息 -->
      <!-- <div class=""> -->
        <!-- <h2>{{item.title}}</h2> -->
        <!-- <div class=""> -->
          <ul class="infoList">
            <li v-for="(item,index) in resData" :key="index">
              <a :href="item.href" :title="item.title" :alt="item.title" target="_blank">{{item.title}}</a>
              <!-- <p>Desc:{{item.desc}}</p> -->
              <p>来源：<a :href="item.source_url" :title="item.source_name" :alt="item.source_name" target="_blank">{{item.source_name}}</a></p>
              <p v-if="!!item.time">时间：{{item.time}}</p>
              <p v-if="!!item.source_name">作者：{{item.author}}</p>
            </li>
          </ul>
        <!-- </div> -->
      <!-- </div> -->
    </div>

  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {

  data () {
    return {
      title: '前端信息',
      resData:{},
      // pagination: {
      //   current_page: 1,
      //   page_sizes: [5, 10, 20, 30, 50, 100],
      //   page_size: 10,
      //   total: 0
      // },
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
    let _vm = context.app;
    // console.log('%j','asyncData');
    return _vm.$axios.post(_vm.$urlConfig.informationPageList,{
      pageSize: 20,
      currentPage: 1,
      filter:{ order:1 },
    })
    .then((res) => {
      // console.info('%j','asyncData axios',res);
      if(res && res.data&& res.data.data&& res.data.data.results){
        // context.app.data.resData = res.data;
        return { resData: res.data.data.results }
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
  @import url(../assets/css/module/information.less);

</style>
