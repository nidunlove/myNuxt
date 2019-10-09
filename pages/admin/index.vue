<template>
  <div class="">
    main
  </div>
</template>

<script>
  // import Logo from '~/components/Logo.vue'

  export default {
    layout: 'admin',
    // components: {
    //   Logo,Header,Footer
    // },
//     data() {
//       return {
//         title: '后台管理',
// //         activeIndex: '1',
// //         activeIndex2: '1',
// //         isCollapse: false,
// //
// //         asideHeight: this.$pageUtils ? this.$pageUtils.frameConHeight : 500,
// //
// //         loading: false,
// //         tableData: [],
// //
// //         multipleSelection: [], //多选
//         // resData:{}
//       }
//     },
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
      // this.getData('/');
      // this.getData('/api/home');
      // this.getData('/api/home/list');
      // this.getData('/api');
      // this.pageListData();
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
      // handleClick(row) {
      //   console.log(row);
      // },

      //选择行
//       handleCurrentChange(row, event, column) {
//         this.$refs.multipleTable.toggleRowSelection(row, true); //点击选中
//       },
//       //多选
//       handleSelectionChange(val) {
//         console.log(val);
//         this.multipleSelection = val;
//       },
//
//       //根据ID删除
//       deleteByIdsAction(){
//
//         let dataList = this.multipleSelection;
//         if (dataList.length < 1) {
//           this.$message.warning("请先选择数据");
//           return;
//         }
//
//         // if (!ModifyGoodsIndate ||'' === ModifyGoodsIndate) {
//         //   this.$message.warning('请选择商品有效期');
//         //   return;
//         // }
//
//         let ids = dataList.map(v => v._id);
//
//         // let ids = [];
//         this.deleteByIdsData(ids);
//       },

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
      // deleteByIdsData(ids){
      //   this.loading = true;
      //   this.$axios.post(this.$urlConfig.deleteByIds, {ids:ids})
      //     .then(({
      //       data
      //     }) => {
      //       console.log("数据请求成功");
      //       console.log(data);
      //       this.loading = false;
      //       if (200 === data.code) {
      //         // this.tableData = data.data;
      //         this.pageListData();
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
