<template>
  <div class="" v-loading="loading">

    <!-- <el-button @click="openBatchEdit()" type="warning" plain size="small" icon="el-icon-edit">删除</el-button> -->
    <el-button @click="deleteByIdsAction()" type="danger" icon="el-icon-delete">删除</el-button>

    <!-- <el-button @click="WormStartAction()" type="primary" icon="el-icon-aim">taobaofed爬取</el-button> -->

    <el-table :data="tableData" style="width: 100%" stripe :border="false" ref="multipleTable" :highlight-current-row="true"
      @selection-change="handleSelectionChange" @row-click="handleCurrentChange">

      <el-table-column type="selection" width="55">
      </el-table-column>

      <el-table-column prop="_id" label="ID">
      </el-table-column>
      <el-table-column prop="order" label="排序">
      </el-table-column>
      <el-table-column prop="source_name" label="来源">
      </el-table-column>
      <el-table-column prop="source_url" label="来源地址">
      </el-table-column>
      <el-table-column prop="classify" label="分类">
      </el-table-column>
      <el-table-column prop="title" label="标题">
      </el-table-column>
      <el-table-column prop="href" label="链接">
        <template slot-scope="scope">
          <a :href="scope.row.href" target="_blank">{{scope.row.href}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="desc" label="描述">
      </el-table-column>
      <el-table-column prop="time" label="文章时间">
      </el-table-column>
      <el-table-column prop="creat_time" label="爬取时间">
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
          <el-button @click="updateHomeDataAction($event,scope.row,1)" type="primary" icon="el-icon-top">置首</el-button>
          <el-button @click="updateHomeDataAction($event,scope.row,null)" type="warning" icon="el-icon-bottom">恢复</el-button>
          <!-- <el-button type="text" size="small">编辑</el-button> -->
        </template>
      </el-table-column>

    </el-table>


    <nd-pagination :pagination='pagination' v-on:updatePageData="pageListData"></nd-pagination>


  </div>
</template>

<script>
  import NdPagination from '~/components/common/NdPagination.vue'

  export default {
    layout: 'admin',
    components: {
      NdPagination
    },
    data() {
      return {
        title: '后台管理',
        // activeIndex: '1',
        // activeIndex2: '1',
        // isCollapse: false,

        // asideHeight: this.$pageUtils ? this.$pageUtils.frameConHeight : 500,
        //分页数据
        pagination: {
          current_page: 1,
          page_sizes: [5, 10, 20, 30, 50, 100],
          page_size: 10,
          total: 0
        },
        loading: false,
        tableData: [],

        multipleSelection: [], //多选
        // resData:{}
      }
    },
    // head() {
    //   return {
    //     title: this.$store.state.title + '|' + this.title,
    //     meta: [{
    //         hid: 'keywords',
    //         name: 'keywords',
    //         content: this.$store.state.keywords
    //       },
    //       {
    //         hid: 'description',
    //         name: 'description',
    //         content: this.$store.state.description
    //       }
    //     ]
    //   }
    // },
    asyncData(context) {
      // console.log('%j','asyncData');
      //     return context.app.$axios.get(context.app.$urlConfig.teamlistshare)
      //     .then((res) => {
      //       // console.info('%j','asyncData axios',res);
      //       if(res && res.data){
      //         // context.app.data.resData = res.data;
      //         return { resData: res.data.data }
      //       }
      //
      //       // return { title: res.data.title }
      //     })
    },
    fetch() {
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
      console.log(this.$router);
      console.log(this.$route);
      // this.getData('/');
      // this.getData('/api/home');
      // this.getData('/api/home/list');
      // this.getData('/api');
      this.pageListData();
    },
    methods: {
      // handleSelect(key, keyPath) {
      //   console.log(key, keyPath);
      // },
      // handleOpen(key, keyPath) {
      //   console.log(key, keyPath);
      // },
      // handleClose(key, keyPath) {
      //   console.log(key, keyPath);
      // },
      handleClick(row) {
        console.log(row);
      },

      //选择行
      handleCurrentChange(row, event, column) {
        this.$refs.multipleTable.toggleRowSelection(row, true); //点击选中
      },
      //多选
      handleSelectionChange(val) {
        console.log(val);
        this.multipleSelection = val;
      },

      //根据ID删除
      deleteByIdsAction() {

        let dataList = this.multipleSelection;
        if (dataList.length < 1) {
          this.$message.warning("请先选择数据");
          return;
        }

        // if (!ModifyGoodsIndate ||'' === ModifyGoodsIndate) {
        //   this.$message.warning('请选择商品有效期');
        //   return;
        // }

        let ids = dataList.map(v => v._id);
        // let array = dataList.map(v => v.title);
        // var array = [];
        //   dataList.map(item => {
        //     array.push({"_id":item._id});
        //   });
        // let array = dataList;
        console.log(ids);
        // return;
        // let ids = [];
        this.deleteByIdsData(ids);
      },

      //爬取
      // WormStartAction(){
      //   this.taobaofedWormStart();
      // },

      //爬取页面
      // taobaofedWormStart(){
      //   this.loading = true;
      //   this.$axios.post(this.$urlConfig.taobaofedWormStart, {})
      //     .then(({
      //       data
      //     }) => {
      //       console.log("数据请求成功");
      //       console.log(data);
      //       this.loading = false;
      //       if (200 === data.code) {
      //         // this.tableData = data.data;
      //         // this.pageListData();
      //       } else {
      //         this.$message.warning(data.msg?data.msg:'数据有误');
      //       }
      //     })
      //     .catch((error) => {
      //       this.loading = false;
      //       console.log(error);
      //       console.log("请求失败");
      //       this.$message.error(error);
      //     });
      // },

      //根据ID删除
      deleteByIdsData(ids) {
        this.loading = true;
        this.$axios.post(this.$urlConfig.deleteByIds, {
            ids: ids
          })
          .then(({
            data
          }) => {
            console.log("数据请求成功");
            console.log(data);
            this.loading = false;
            if (200 === data.code && data.data) {
              this.$message.success('删除成功，数据：' + data.data.deletedCount);
              // this.tableData = data.data;
              this.pageListData();
            } else {
              this.$message.warning(data.msg ? data.msg : '数据有误');
            }
          })
          .catch((error) => {
            this.loading = false;
            console.log(error);
            console.log("请求失败");
            this.$message.error("请求失败");
          });
      },
      //根据Id进行order排序
      updateHomeDataAction(event,row,type) {

        event.stopPropagation();

        console.log(row);
        let id = row._id;
        if(!!id){
          //置首页
          this.updateHomeData(id,type);
        } else {
          this.$message.warning('ID未知');
        }

      },
      //根据ID置首页
      updateHomeData(id,order) {
        this.loading = true;
        this.$axios.post(this.$urlConfig.updateOrderById, {
            id: id,
            order: order,
          })
          .then(({
            data
          }) => {
            console.log("数据请求成功");
            console.log(data);
            this.loading = false;
            if (200 === data.code && data.data) {
              // this.$message.success('删除成功，数据：' + data.data.deletedCount);
              this.$message.success('更新order成功 order：'+order);
              // this.tableData = data.data;
              this.pageListData();
            } else {
              this.$message.warning(data.msg ? data.msg : '数据有误');
            }
          })
          .catch((error) => {
            this.loading = false;
            console.log(error);
            console.log("请求失败");
            this.$message.error("请求失败");
          });
      },
      //分页
      pageListData() {
        this.loading = true;
        this.$axios.post(this.$urlConfig.iWormPageList, {
            pageSize: this.pagination.page_size,
            currentPage: this.pagination.current_page,
          })
          .then(({
            data
          }) => {
            console.log("数据请求成功");
            console.log(data);
            this.loading = false;
            if (200 === data.code && data.data) {
              this.tableData = data.data.results;
              this.pagination.total = data.data.count;
            } else {
              this.$message.warning(data.msg ? data.msg : '数据有误');
            }
          })
          .catch((error) => {
            this.loading = false;
            console.log(error);
            console.log("请求失败");
            this.$message.error("请求失败");
          });
      },
    }
  }
</script>

<style scoped lang="less">
  // @import url(../assets/css/module/shareLink.less);

  //   .el-header,
  //   .el-footer {
  //     background-color: #B3C0D1;
  //     color: #333;
  //     // text-align: center;
  //     // line-height: 60px;
  //   }
  //
  //   .el-aside {
  //     background-color: #D3DCE6;
  //     color: #333;
  //
  //     // text-align: center;
  //     // line-height: 200px;
  //   }
  //
  //   // .el-main {
  //   //   background-color: #E9EEF3;
  //   //   color: #333;
  //   //   text-align: center;
  //   //   line-height: 160px;
  //   // }
  //
  //   // body>.el-container {
  //   //   margin-bottom: 40px;
  //   // }
  //
  //   //   .el-container:nth-child(5) .el-aside,
  //   //   .el-container:nth-child(6) .el-aside {
  //   //     line-height: 260px;
  //   //   }
  //   //
  //   //   .el-container:nth-child(7) .el-aside {
  //   //     line-height: 320px;
  //   //   }
  //
  //   .el-menu-vertical-demo:not(.el-menu--collapse) {
  //     width: 200px;
  //     min-height: 400px;
  //   }
</style>
