<template>
  <div class="pcshare" v-if="showshare">
    <div class="content">
      <h3>分享视频</h3>
      <i class="el-icon-close" @click="close"></i>
      <div class="pcshare-bottom">
        <div class="pcshare-left"></div>
          <div class="pcshare-right">
            <qrcode :url="qrcodeUrl"
              :wid="198"
              :hei="178"
              :imgwid="100"
              :imghei="100">
            </qrcode>
            <p>微信扫码分享</p>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
/* pc版本分享方式，通过qrcode生成二维码，qrcodeUrl可以是当前地址 */
  import qrcode from 'vue_qrcodes'
//   import html2canvas from 'html2canvas';
  
  export default {
    components: {
      qrcode
    },
    name: 'Poster',
    props:{
      showshare:Boolean
    },
    data () {
      return {
        posterDataUrl:'',
         qrcodeUrl: 'https://www.baidu.com'
      }
    },
   
    mounted () {
    },
    methods: {
    close () {
      const str = window.navigator.userAgent;
      if(str.toLowerCase().indexOf("mobile") == -1){
        this.$emit('pcopen','pc')
      } else {
        console.log('mobile')
      }
    }
}
  }
</script>
<style lang="scss">
.pcshare{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  .content{
    position: fixed;
    width: 50vw;
    height: 40vh;
    left: 25vw;
    top: 30vh;
    background-color: white;
    .el-icon-close{
      position: absolute;
      right: 0;
      top: 0;
      font-size: 3vw;
    }
    h3{
      text-align: center;
      height: 7vh;
      line-height: 7vh;
      font-size: 1.5vw;
      border-bottom: 2px solid #ccc;
    }
    .pcshare-bottom{
      height: 33vh;
      display: flex;
      .pcshare-left{
        flex: 1;
      }
      .pcshare-right{
        border-left: 2px solid #ccc;
        box-sizing: border-box;
        padding: 5vh 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 15vw;
        P{
          font-size: 1.3vw;
        }
      }
    }
  }
}
</style>