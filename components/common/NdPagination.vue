<template>

  <el-pagination
    background
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="pagination.current_page"
    :page-sizes="pagination.page_sizes"
    :page-size="pagination.page_size"
    layout="prev, pager, next, slot, total, jumper, sizes"
    :total="isNaN(pagination.total)?0:pagination.total">
  </el-pagination>

</template>

<script>
  export default {
    name: 'NdPagination',
    created() {

    },
    props: {
      pagination: {
        default: function() {
          return {
            current_page: 1,
            page_sizes: [5, 10, 20, 30, 50, 100],
            page_size: 10,
            total: 0
          }
        },
        type: Object
      },
    },
    data() {
      return {

      }
    },
    //创建时
    created() {

    },
    //编译挂载前
    mounted() {
      // console.log("mounted");
      this.initData();
    },
    methods: {
      initData() {

      },
      //每页显示数目变化
      handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
        //分页的条数
        this.pagination.page_size = val;
        // 这里手动触发一下 分页更新 事件，并且把值传进去
        this.$emit('updatePageData', val)
      },
      //页数变化
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pagination.current_page = val;
        // 这里手动触发一下 分页更新 事件，并且把值传进去
        this.$emit('updatePageData', val)
      },

    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
