<template>
  <div class="">

    <!-- <el-button @click="openBatchEdit()" type="warning" plain size="small" icon="el-icon-edit">删除</el-button> -->
    <!-- <el-button @click="deleteByIdsAction()" type="danger" icon="el-icon-delete">删除</el-button> -->

   <el-button @click="addIWormAction()" type="warning" icon="el-icon-plus">插入到数据库</el-button>
   
   <el-dropdown split-button type="primary" @click="WormStartAction('taobaofedWormStart')">
      taobaofed
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><el-button @click="WormStartCateAction('taobaofedWormCate',{type:'Web开发'})" type="primary" icon="el-icon-aim">【Web开发】</el-button></el-dropdown-item>
        <el-dropdown-item><el-button @click="WormStartCateAction('taobaofedWormCate',{type:'Node.js'})" type="primary" icon="el-icon-aim">【Node.js】</el-button></el-dropdown-item>
        <el-dropdown-item><el-button @click="WormStartCateAction('taobaofedWormCate',{type:'无线开发'})" type="primary" icon="el-icon-aim">【无线开发】</el-button></el-dropdown-item>
      </el-dropdown-menu>
  </el-dropdown>

  <!-- <el-popover
  placement="bottom-end"
  width="400"
  trigger="click">

  <div>
    <el-button @click="WormStartCateAction('taobaofedWormCate',{type:'Web开发'})" type="primary" icon="el-icon-aim">taobaofed【Web开发】</el-button>
    <el-button @click="WormStartCateAction('taobaofedWormCate',{type:'Node.js'})" type="primary" icon="el-icon-aim">taobaofed【Node.js】</el-button>
    <el-button @click="WormStartCateAction('taobaofedWormCate',{type:'无线开发'})" type="primary" icon="el-icon-aim">taobaofed【无线开发】</el-button>
  </div> -->
  
  
  <!-- <el-button slot="reference" @click="WormStartAction('taobaofedWormStart')" type="primary" icon="el-icon-aim">taobaofed【无线开发】</el-button> -->
  <!-- <el-button slot="reference">click 激活</el-button> -->
<!-- </el-popover> -->

   <!-- <el-button @click="WormStartAction('taobaofedWormStart')" type="primary" icon="el-icon-aim">taobaofed</el-button>
   <el-button @click="WormStartCateAction('taobaofedWormCate',{type:'Web开发'})" type="primary" icon="el-icon-aim">taobaofed【Web开发】</el-button>
   <el-button @click="WormStartCateAction('taobaofedWormCate',{type:'Node.js'})" type="primary" icon="el-icon-aim">taobaofed【Node.js】</el-button>
   <el-button @click="WormStartCateAction('taobaofedWormCate',{type:'无线开发'})" type="primary" icon="el-icon-aim">taobaofed【无线开发】</el-button> -->


   <el-button @click="WormStartAction('i360_75team_start')" type="primary" icon="el-icon-aim">360奇舞团</el-button>
	 <el-button @click="WormStartAction('tencent_AlloyTeam_start')" type="primary" icon="el-icon-aim">腾讯alloyTeam</el-button>
   <el-button @click="WormStartAction('jd_aotu_start')" type="primary" icon="el-icon-aim">京东aotu</el-button>
   <el-button @click="WormStartAction('netEase_feg_start')" type="primary" icon="el-icon-aim">网易feg</el-button>
   <el-button @click="WormStartAction('toutiao_blog_start')" type="primary" icon="el-icon-aim">字节跳动博客</el-button>

    <el-table :data="tableData" style="width: 100%" size="mini" stripe :border="false" ref="multipleTable" :highlight-current-row="true"
      @selection-change="handleSelectionChange" @row-click="handleCurrentChange"  v-loading="loading">

      <el-table-column type="selection" width="55">
      </el-table-column>

      <!-- <el-table-column prop="_id" label="ID">
              </el-table-column> -->

      <el-table-column prop="source_name" label="来源">
      </el-table-column>
      <el-table-column prop="source_type" label="来源类型">
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

        this.iWormStart(this.$urlConfig[type],{});

        // if('taobaofedWormStart'===type){
        //   this.iWormStart(this.$urlConfig.taobaofedWormStart);
        // } else if('i360_75team_start'===type){
        //   this.iWormStart(this.$urlConfig.i360_75team_start);
        // } else if('tencent_AlloyTeam_start'===type){
        //   this.iWormStart(this.$urlConfig.tencent_AlloyTeam_start);
        // } else if('jd_aotu_start'===type){
        //   this.iWormStart(this.$urlConfig.jd_aotu_start);
        // } else if('netEase_feg_start'===type){
        //   this.iWormStart(this.$urlConfig.netEase_feg_start);
        // } else if('toutiao_blog_start'===type){
        //   this.iWormStart(this.$urlConfig.toutiao_blog_start);
        // }
      },

      //指定爬取
      WormStartCateAction(type,parm) {
        // this.taobaofedWormStart();

        this.iWormStart(this.$urlConfig[type],parm);

        // if('taobaofedWormStart'===type){
        //   this.iWormStart(this.$urlConfig.taobaofedWormStart);
        // } else if('i360_75team_start'===type){
        //   this.iWormStart(this.$urlConfig.i360_75team_start);
        // } else if('tencent_AlloyTeam_start'===type){
        //   this.iWormStart(this.$urlConfig.tencent_AlloyTeam_start);
        // } else if('jd_aotu_start'===type){
        //   this.iWormStart(this.$urlConfig.jd_aotu_start);
        // } else if('netEase_feg_start'===type){
        //   this.iWormStart(this.$urlConfig.netEase_feg_start);
        // } else if('toutiao_blog_start'===type){
        //   this.iWormStart(this.$urlConfig.toutiao_blog_start);
        // }
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
      iWormStart(url,parm) {
        // this.tableData = [{'title':'11'},{'title':'22'},{'title':'33'},{'title':'44'},{'title':'55'}];
        // return;
        this.loading = true;
        this.$axios.post(url, parm)
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
@import url(../../../assets/css/admin/common.less);
</style>
