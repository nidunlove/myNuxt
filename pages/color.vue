<template>
  <section class="con-main">
    <div class="linkTeamShare">
      <h1>web色彩</h1>
      <!-- {{resData}} -->
      <div class="link-lv-1" v-for="(item,index) in resData" :key="index">
        <h2>{{item.title}}</h2>
        <div class="colorList">
          <!-- <h4> -->
            
            <ul>
              <li v-for="(item2,index2) in item.data" :key="index2"  @click="copyToClipBoard($event)">
                <div class="colorBlock" :style="{backgroundColor:'#'+item2 }"></div>
                <h3><input :value="'#'+item2" readonly @click="copyToClipBoard($event)" /></h3>
                <h3><input :value="'rgb:('+colorHexToRgb(item2)+')'" readonly  @click="copyToClipBoard($event)" /></h3>
              </li>
                
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
      title: '色彩',
      resData:{}
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
    return context.app.$axios.get(context.app.$urlConfig.color)
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
    colorHexToRgb(colorHex){
      let sColor = colorHex;
          var sColorChange = [];
          for(var i=1; i<7; i+=2){
              sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));    
          }
          return sColorChange.join(",");
    },
    copyToClipBoard($event){
      $event.stopPropagation(); 
      console.log(arguments);
      var  selectedBedDom = {};
      if(!!$event.currentTarget.childNodes && $event.currentTarget.childNodes.length>3){//父层
        selectedBedDom = $event.currentTarget.childNodes[2].childNodes[0];//dom元素
      } else {
        selectedBedDom = $event.currentTarget;//dom元素
      }
      console.log(selectedBedDom);
      console.log(selectedBedDom.value);
      selectedBedDom.select();
      // var selCrea=selectedBedDom.createTextRange();  
      // document.body.createTextRange(); 
      // selCrea.execCommand("Copy");
      document.execCommand("Copy");
      // alert("已复制好，可贴粘。");
      // window.clipboardData.setData("Text",selectedBedDom.value);
      // var clipBoardContent="";
      // clipBoardContent+=document.title;
      // clipBoardContent+="";
      // clipBoardContent+=this.location.href;
      
      // function oCopy(obj){
       // obj.select();
       // js=obj.createTextRange();
       // js.execCommand("Copy")
       // alert("复制成功!");
      // try {
      //   window.clipboardData.setData("Text",'#'+text);
      //   alert("复制成功");
      // } catch(e){
      //   console.log(e);
      // }
      // var text = document.getElementById("text").innerText;
      //  var input = document.getElementById("input");
      //  input.value = text; // 修改文本框的内容
      //  input.select(); // 选中文本
      //  document.execCommand("copy"); // 执行浏览器复制命令
      //  alert("复制成功");

    }

   }
}
</script>

<style scoped lang="less">
  @import url(../assets/css/module/shareLink.less);

</style>
