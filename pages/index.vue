<template>
  <section class="con-main">
    <div class="infoLinkCon"  v-infinite-scroll="loadMore" :infinite-scroll-disabled="loadDisabled" infinite-scroll-distance="150" style="">
      <!-- 前端信息 -->
      <!-- <div class=""> -->
        <!-- <h2>{{item.title}}</h2> -->
        <!-- <div class=""> -->
          <ul class="infoList">
            <li v-for="(item,index) in resData" :key="index">
              <el-card shadow="never">
                <a :href="item.href" :title="item.title" :alt="item.title" target="_blank">{{item.title}}</a>
                <p v-if="!!item.desc">{{item.desc}}</p>
                <p>来源：<a :href="item.source_url" :title="item.source_name" :alt="item.source_name" target="_blank">{{item.source_name}}</a></p>
                <p v-if="!!item.time">时间：{{item.time}}</p>
                <p v-if="!!item.author">作者：{{item.author}}</p>
              </el-card>
            </li>
          </ul>
        <!-- </div> -->
      <!-- </div> -->
    </div>

    <p class="noMore" v-if="loading"><i class="icon-loading"></i>加载中...</p>
    <p class="noMore" v-if="loadDisabled">没有更多了</p>

    
    
  </section>
</template>

<script>

// import infiniteScroll from 'vue-infinite-scroll'
export default {
  // directives: { infiniteScroll },
  data () {
    return {
      title: '前端信息',
      resData:{},
      
      loading: false,
      // noMore: false,
      loadDisabled: false,
      pagination: {
        current_page: 1,
        // page_sizes: [5, 10, 20, 30, 50, 100],
        page_size: 20,
        total: 0
      },
      //查询，排序方式
        filterData: {
          // "orderBy": "update_time desc,id_", //排序字段
          // "sortAsc": "desc", //desc降序，asc升序
          // "driverMobile":"",
          // "driverName":"",
          "auditState":"",
          source_type:"",
        },
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
      // filter: { order:1 },
      sort: { order:1,time:-1,creat_time:-1 },
    })
    .then((res) => {
      // console.info('%j','asyncData axios',res);
      if(res && res.data&& res.data.data&& res.data.data.results){
        // context.app.data.resData = res.data;
        return { 
          resData: res.data.data.results 
        }
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
    loadMore(){
      console.log("more");

      if(this.loading){
        return;
      }
      if(this.loadDisabled){
        return;
      }

      // var filter = {};
      //   if(''!==this.filterData.order){
      //     filter.order = this.filterData.order;
      //   }
      //   if(''!==this.filterData.source_type){
      //     filter.source_type = this.filterData.source_type;
      //   }

      this.loading = true;
      this.pagination.current_page++;
      this.$axios.post(this.$urlConfig.informationPageList,{
        pageSize: this.pagination.page_size,
        currentPage: this.pagination.current_page,
        // filter: { order:1 },
        // sort: { time:-1 },
        // filter: filter,
        sort: { order:1,time:-1,creat_time:-1 },
      })
      .then((res) => {
        this.loading = false;
        // console.info('%j','asyncData axios',res);
        if(res && res.data&& res.data.data&& res.data.data.results){
          let data = res.data.data.results ;
          this.resData = this.resData.concat(data);

          this.pagination.total = res.data.data.count;

          console.log('total',this.pagination.total);
          console.log('resData.length',this.resData.length);

          if(this.pagination.total<=this.resData.length){
            // this.noMore = false;
            
            this.loadDisabled = true;
          }
        }

        // return { title: res.data.title }
      })
      .catch((err)=>{
        this.loading = false;
      })
        
    },
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
