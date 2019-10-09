<template>
  <div>
    <el-container>
      <el-header style="padding: 0; background: #545c64;">
        <el-row>
          <el-col :span="4" style="width: 200px; padding-top: 10px; text-align: right;">
            <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
              <el-radio-button :label="false">展开</el-radio-button>
              <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group> -->
             <span>后台管理</span>

            <el-button size="medium" type="primary" icon="el-icon-s-unfold" v-if="isCollapse" @click="isCollapse=false"></el-button>
            <el-button size="medium" icon="el-icon-s-fold" v-else @click="isCollapse=true"></el-button>
          </el-col>
          <el-col :span="16" style="overflow: auto;">
            <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
              background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
              <!-- <el-menu-item index="1">处理中心</el-menu-item>
              <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
              <el-menu-item><a href="http://www.668ni.com" target="_blank">打开网站</a></el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="4">
            <span v-if="!!$store.state.authUser">{{$store.state.authUser.username}}</span>
            <el-button @click="logout()" type="danger" icon="el-icon-switch-button">退出登录</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <!-- :style="{height:$pageUtils.frameConHeight+'px'}" -->
        <el-aside width="auto" :style="{height:asideHeight+'px'}">
          <!-- {{$pageUtils?$pageUtils.frameConHeight:500}} -->
          <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            :collapse="isCollapse" :router="true">
            <el-menu-item :route="{name:'admin'}" index="admin">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <!-- <el-submenu index="admin-internetWorm">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">爬虫</span>
              </template>
              <el-menu-item-group>
                <span slot="title">爬虫</span>
                <el-menu-item :route="{name:'admin-internetWorm'}" index="admin-internetWorm">爬虫列表</el-menu-item>
                <el-menu-item :route="{name:'admin-internetWorm-iWorm'}" index="admin-internetWorm-iWorm">爬取</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu> -->

            <el-menu-item :route="{name:'admin-internetWorm'}" index="admin-internetWorm">
              <i class="el-icon-document"></i>
              <span slot="title">爬虫列表</span>
            </el-menu-item>
            <el-menu-item :route="{name:'admin-internetWorm-iWorm'}" index="admin-internetWorm-iWorm">
              <i class="el-icon-setting"></i>
              <span slot="title">爬取</span>
            </el-menu-item>

            <!-- <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item> -->
          </el-menu>
        </el-aside>
        <el-container>
          <el-main :style="{height:asideHeight+'px'}">

            <!-- <nuxt/> -->
            <!-- <nuxt-child ></nuxt-child> -->
            <nuxt />

          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
    <!-- <my-header /> -->

    <!-- <my-footer /> -->
  </div>
</template>
<script>
  // import Logo from '~/components/Logo.vue'
  // import myHeader from '~/components/admin/Header.vue'
  // import myFooter from '~/components/Footer.vue'

  export default {
    middleware: 'adminAuth',
    components: {
      // Logo,
      // myHeader,myFooter
    },
    watch: {
      '$route'(to, from) {
        this.activeIndex = this.$route.name;
      }
    },
    data() {
      return {
        title: '后台管理',
        activeIndex: this.$route.name,
        activeIndex2: '1',
        isCollapse: false,

        asideHeight: this.$pageUtils ? this.$pageUtils.frameConHeight : 500,

        // loading: false,
        // tableData: [],

        // multipleSelection: [], //多选
        // resData:{}
      }
    },
    head() {
      return {
        title: this.$store.state.title + '|' + this.title,
        meta: [{
            hid: 'keywords',
            name: 'keywords',
            content: this.$store.state.keywords
          },
          {
            hid: 'description',
            name: 'description',
            content: this.$store.state.description
          }
        ]
      }
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
      console.log('admin',this.$route);
      console.log('$store',this.$store.state);

      // this.activeIndex = this.$route.name;
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
      async logout () {
        try {
          let logoutUrl = this.$urlConfig.adminLogout;
          await this.$store.dispatch('logout',{
            url:logoutUrl,
          });
          this.$router.push({name:'adminLogin'});
        } catch (e) {
          console.log(e);
          // this.formError = e.message;
        }
      }
    }
  }
</script>
<style scoped lang="less">
  // @import url(../assets/css/module/shareLink.less);

  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    // text-align: center;
    // line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;

    // text-align: center;
    // line-height: 200px;
  }

  // .el-main {
  //   background-color: #E9EEF3;
  //   color: #333;
  //   text-align: center;
  //   line-height: 160px;
  // }

  // body>.el-container {
  //   margin-bottom: 40px;
  // }

  //   .el-container:nth-child(5) .el-aside,
  //   .el-container:nth-child(6) .el-aside {
  //     line-height: 260px;
  //   }
  //
  //   .el-container:nth-child(7) .el-aside {
  //     line-height: 320px;
  //   }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
