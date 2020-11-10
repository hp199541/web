<template>
  <el-pagination
    @current-change="handleCurrentChange"
    :current-page="currentPage1"
    :page-size="5"
    layout=" prev, pager, next, jumper"
    :total="total">
  </el-pagination>
</template>
<script>
/*分页组件
传入一个total总条数，每页显示五条数据
*/
  export default {
    name:'pagination',
    props:{
      total:Number
    },
    methods: {
      handleCurrentChange(val) {
        this.$emit('changePage',val)
      }
    },
    data() {
      return {
        currentPage1: 1,
      };
    }
  }
</script>
<style lang="scss">
@media screen and (min-width: 768px) {
.el-pagination{
    text-align: right;
    width:30vw ;
    height: 5vw;
    margin-left: 67vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  .btn-prev{
    i.el-icon.el-icon-arrow-left{
      font-size: 1.2vw;
    }
  }
  .el-pager{
    li.number{
      font-size: 1vw;
      &.active{
        color: #ec5f3a;
      }
      &:hover{
        // cursor: inherit;
        color: #ec5f3a ;
      }
    }
  }
  .btn-next{
    i.el-icon.el-icon-arrow-right{
      font-size: 1.2vw;      
    }
  }
  span.el-pagination__jump{
    font-size: 1vw;
    .el-input.el-pagination__editor.is-in-pagination{
      input.el-input__inner{
        font-size: 1vw;
      }
    }
  }
}
}
</style>