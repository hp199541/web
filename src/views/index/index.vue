<template>
  <div class="webindex">
    <Introduce :current='currentVideo' @share='share'></Introduce>
    <Video :current='currentVideo'></Video>
    <div class="pcnav">
      <span>视频推荐</span>
    </div>
    <div class="pcbottom">
        <Swiper></Swiper>
        <div class="mobilenav">
          <span>视频推荐</span>
        </div>
        <Recommend :recommend ='recommendlist'></Recommend>
    </div>
    <Share :showshare='isshare' @close='close'></Share>
    <Pcshare :showshare='ispcshare' @pcopen='close'></Pcshare>
  </div>
</template>
<script>
import Introduce from '@/components/introduce/introduce.vue'
import Video from '@/components/video/video.vue'
import Recommend from '@/components/recommend/list.vue'
import Swiper from '@/components/swiper/swiper'
import Share from '@/components/share/share'
import Pcshare from '@/components/pcshare/pcshare'
import { getAllVideo } from '@/api/index'
export default {
  props:{
    video:Array
  },
  components:{
    Introduce,
    Video,
    Recommend,
    Swiper,
    Share,
    Pcshare
  },
  data () {
    return {
      currentVideo:{},
      recommendlist:[],
      isshare:false,
      ispcshare:false
    }
  },
  watch:{
    video:{
      handler(newval,oldval){
        if(newval !== oldval) {
          getAllVideo().then(res => {
            this.currentVideo = res.data.video_list.filter(item => (item.flag === 3))[0]
            this.recommendlist = res.data.video_list.filter(item => (item.flag === 0))
          })
        }
      },
      deep:true
    }
  },
  methods:{
    close (e) {
      if(e == 'pc'){
        this.ispcshare = !this.ispcshare
      } else {
        this.isshare = !this.isshare
      }
    },
    share (e) {
      if(e == 'mobile') {
        this.isshare = !this.isshare
      }
      if(e == 'pc') {
        this.ispcshare = !this.ispcshare
      }
    }
  },
  created () {
    this.$nextTick(() => {
    this.currentVideo = this.video.filter(item => (item.flag === 3))[0]
    this.recommendlist = this.video.filter(item => (item.flag === 0))
    })
  }
}
</script>
<style lang="scss">
  .mobilenav {
    display: block;
    text-align: right;
    margin-bottom: 3vw;
    height: 10vw;
    line-height: 10vw;
    border: 1px solid #ccc;
    background: linear-gradient(to right, gray 20%, white 20%);
    padding-right: 5vw;
    span {
      font-size: 5vw;
      font-weight: bolder;
    }
    span::before {
      font-size: 12px;
      content: 'Video recommend';
      margin-right: 10px;
    }
  }
  .pcnav{
    display: none;
  }
  @media screen and (min-width:768px) {
    .webindex{
    .mobilenav{
      display: none;
    }
    .pcnav{
      display: block;
      text-align: right;
      margin-bottom: 3vw;
      height: 3vw;
      line-height: 3vw;
      border: 1px solid #ccc;
      background: linear-gradient(to right, gray 20%, white 20%);
      padding-right: 5vw;
      span{
        font-size: 1.5vw;
        font-weight: bolder;
      }
      span::before{
        font-size: 12px;
        content: 'Video recommend';
        margin-right: 10px;
        color: rgba(0,0,0,0.5);
      }
    }
    .pcbottom{
      width: 100%;
      overflow-x: hidden;
      display: flex;
      padding-bottom: 10vw;
      .swiper{
        width: 20vw;
        height: 10vw;
        .van-swipe{
          .van-swipe__track{
            .van-swipe-item{
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
          .van-swipe__indicators{
              bottom: 0;
              left: 80%;
            // display: none;
            i.van-swipe__indicator{
              width: 30px;
              height: 10px;
              border-radius: 0;
              background-color: #ccc;
              &.van-swipe__indicator--active{
                background-color: #f4553a;
              }
            }
          }
        }
      }
      // .vertical-list{
      //   flex: 1;
      //   height: 10vw;
      //   display: flex;
      //   justify-content: space-around;
      //   li{
      //     display: flex;
      //     width: 24vw;
      //     height: 10vw;
      //     .left{
      //       width: 20vw;
      //     } 
      //     .right{
      //       flex: 1;
      //     }
      //   }
      // }
    }
    }
  }
</style>