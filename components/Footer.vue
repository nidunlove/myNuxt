<template>
  <footer class="footer">
    <div class="footer-con">
      <div>Copyright<span style="margin:0 3px">&copy;</span>2019<a href="http://www.668ni.com/" target="_blank">&nbsp;倪盾的个人空间</a>. All Rights Reserved.</div>
      <div><a href="http://www.miitbeian.gov.cn/" target="_blank">苏ICP备19008760号</a></div>
    </div>
  </footer>
</template>
<script>
  export default {
  // components: {
  //   Logo,Header,Footer
  // },
  data () {
    return {
      // title: 'Hello World!',
      // name:'World',
      // resData:{}
    }
  },
  head () {
    return {
      // title: this.title,
      // meta: [
      //   { hid: 'description', name: 'description', content: 'My custom description' }
      // ]
    }
  },
  asyncData (context) {
    // console.log('%j','asyncData');
    // return context.app.$axios.get('http://www.hytx.com/bizHomeCommon/query/homeGoodsMark?menuRoute=goodsMark.steel')
    // .then((res) => {
    //   // console.info('%j','asyncData axios',res);
    //   if(res && res.data){
    //     context.app.data.resData = res.data;
    //     return { resData: res.data }
    //   }

    //   // return { title: res.data.title }
    // })
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
  }
}
</script>

<style>

</style>
