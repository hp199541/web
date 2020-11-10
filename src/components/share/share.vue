<template>
  <div class="share" v-if="showshare">
    <i class="el-icon-close" @click="close"></i>
    <img src="@/assets/images/sharetip.png" alt="">
  </div>
</template>
<script>
export default {
  name:'share',
  props:{
    showshare:Boolean
  },
  data () {
    return {
    }
  },
  methods:{
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss">
  .share{
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    .el-icon-close{
      position: absolute;
      bottom: 30vw;
      right: 5vw;
      z-index: 2;
      font-size: 10vw;
    }
    img{
      width: 80vw;
      height: 40vw;
      position: absolute;
      bottom: 0;
      left: 10vw;

    }
  }
</style>