<template>
  <div class="">


    <!-- <el-button @click="openBatchEdit()" type="warning" plain size="small" icon="el-icon-edit">删除</el-button> -->
    <!-- <el-button @click="deleteByIdsAction()" type="danger" icon="el-icon-delete">删除</el-button> -->

    <el-button @click="addIWormAction()" type="warning" icon="el-icon-plus">插入到数据库</el-button>

    <el-button @click="WormStartAction('taobaofed')" type="primary" icon="el-icon-aim">taobaofed</el-button>

    <el-button @click="WormStartAction('360_75team')" type="primary" icon="el-icon-aim">360奇舞团</el-button>





    <el-table :data="tableData" style="width: 100%" size="mini" stripe :border="false" ref="multipleTable" :highlight-current-row="true"
      @selection-change="handleSelectionChange" @row-click="handleCurrentChange"  v-loading="loading">

      <el-table-column type="selection" width="55">
      </el-table-column>

      <!-- <el-table-column prop="_id" label="ID">
              </el-table-column> -->

      <el-table-column prop="source_name" label="来源">
      </el-table-column>
      <el-table-column prop="source_url" label="来源地址">
      </el-table-column>
      <el-table-column prop="classify" label="分类">
      </el-table-column>
      <el-table-column prop="title" label="标题">
      </el-table-column>
      <el-table-column prop="href" label="链接">
      </el-table-column>
      <el-table-column prop="desc" label="描述">
      </el-table-column>
      <el-table-column prop="author" label="author">
      </el-table-column>
      <el-table-column prop="time" label="文章时间">
      </el-table-column>
      <el-table-column prop="creat_time" label="爬取时间">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">置首页</el-button> -->
          <!-- <el-button type="text" size="small">编辑</el-button> -->
        </template>
      </el-table-column>

    </el-table>

    <!-- <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination> -->


  </div>
</template>

<script>
  // import Logo from '~/components/Logo.vue'

  export default {
    layout: 'admin',
    // components: {
    //   Logo,Header,Footer
    // },
    data() {
      return {
        title: '后台管理',
        // activeIndex: '1',
        // activeIndex2: '1',
        // isCollapse: false,

        // asideHeight: this.$pageUtils ? this.$pageUtils.frameConHeight : 500,

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
      // this.pageListData();
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
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

      //新增到数据库
      addIWormAction() {

        let dataList = this.multipleSelection;
        if (dataList.length < 1) {
          this.$message.warning("请先选择数据");
          return;
        }

        // if (!ModifyGoodsIndate ||'' === ModifyGoodsIndate) {
        //   this.$message.warning('请选择商品有效期');
        //   return;
        // }

        // let ids = dataList.map(v => v._id);

        // let ids = [];
        this.addIWormData(dataList);
      },

      //爬取
      WormStartAction(type) {
        // this.taobaofedWormStart();
        if('taobaofed'===type){
          this.iWormStart(this.$urlConfig.taobaofedWormStart);
        } else if('360_75team'===type){
          this.iWormStart(this.$urlConfig.i360_75team_start);
        }

      },

      //爬取页面
//       taobaofedWormStart() {
//
//         // this.tableData = [{'title':'11'},{'title':'22'},{'title':'33'},{'title':'44'},{'title':'55'}];
//         // return;
//         this.loading = true;
//         this.$axios.post(this.$urlConfig.taobaofedWormStart, {})
//           .then(({
//             data
//           }) => {
//             console.log("数据请求成功");
//             console.log(data);
//             this.loading = false;
//             if (200 === data.code) {
//               // this.tableData = data.data;
//               // this.pageListData();
//               this.tableData = data.data;
//             } else {
//               this.$message.warning(data.msg ? data.msg : '数据有误');
//             }
//           })
//           .catch((error) => {
//             this.loading = false;
//             console.log(error);
//             console.log("请求失败");
//             this.$message.error("请求失败");
//           });
//       },

      //爬取页面
      iWormStart(url) {
        // this.tableData = [{'title':'11'},{'title':'22'},{'title':'33'},{'title':'44'},{'title':'55'}];
        // return;
        this.loading = true;
        this.$axios.post(url, {})
          .then(({
            data
          }) => {
            console.log("数据请求成功");
            console.log(data);
            this.loading = false;
            if (200 === data.code) {
              // this.tableData = data.data;
              // this.pageListData();
              this.tableData = data.data;
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

      //新增到数据库
      addIWormData(dataList) {
        this.loading = true;
        this.$axios.post(this.$urlConfig.addIWormList, {
            data: dataList
          })
          .then(({
            data
          }) => {
            console.log("数据请求成功");
            console.log(data);
            this.loading = false;
            if (200 === data.code && !!data.data) {
              this.$message.success('新增成功，数据：' + data.data.length);

              this.$router.push({name:'admin-internetWorm'});
              // this.tableData = data.data;
              // this.pageListData();
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
      // pageListData() {
      //   this.loading = true;
      //   this.$axios.post(this.$urlConfig.iWormPageList, {})
      //     .then(({
      //       data
      //     }) => {
      //       console.log("数据请求成功");
      //       console.log(data);
      //       this.loading = false;
      //       if (200 === data.code) {
      //         this.tableData = data.data;
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
