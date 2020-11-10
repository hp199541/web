<template>
  <div class="video-component">
    <div class="loading"    
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)" v-loading="loading" v-if="!playerOptions.sources[0].src"></div>
    <div class="video-content"  v-else>
      <video-player
        ref="videoPlayer" 
        :playsinline="true"  
        :options="playerOptions" 
        class="vjs-big-play-centered" 
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended ="onPlayerEnded($event)">
      </video-player>
    </div>
  </div>
</template>
<script>
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
import { videoPlayer } from 'vue-video-player'
export default {
  name:'VideoComponent',
  components: {
 },
  props:{
  current:Object
  },
  data(){
    return {
    url:'',
    loading: true,
    playerOptions: {
    // playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
    autoplay: true, // 如果为true,浏览器准备好时开始回放。
    muted: true, // 默认情况下将会消除任何音频。
    loop: false, // 是否视频一结束就重新开始。
    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
    language: 'zh-CN',
    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
    flash: { hls: {withCredentials: false} }, // 可以使用rtmp视频
    sources: [{
      type:  "video/mp4", // 类型
      src:'' // url地址
    }],
    //  poster: '', // 封面地址
    notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
    controlBar: {
    timeDivider: true, // 当前时间和持续时间的分隔符
    durationDisplay: true, // 显示持续时间
    remainingTimeDisplay: true, // 是否显示剩余时间功能
    fullscreenToggle: true // 是否显示全屏按钮
   }
   }
    }
  },
  computed:{
    player(){
      return this.$refs.videoPlayer.player
    }
  },
watch:{
  // 'playerOptions' (newval,oldval) {
  //   console.log(newval,oldval)
  // },
  'current' (newval,oldval) {
    setTimeout(() => {
      this.url = newval?newval.video_url : ''
      this.playerOptions.sources[0].src = newval?newval.video_url:''
    },500)
  }
},
  created() {
    setTimeout(() => {
      this.url = this.current.video_url
      this.playerOptions.sources[0].src = this.current.video_url
    },500)
  }, 
  methods:{
    onPlayerEnded(){
      console.log('end')
    },
    onPlayerPlay(){
      this.$refs.videoPlayer.player.play()
      document.getElementsByClassName('vjs-big-play-button')[0].style.display = 'none'
    },
    onPlayerPause(){
      document.getElementsByClassName('vjs-big-play-button')[0].style.display = 'block'
    }    
  }
}
</script>
<style lang="scss">
  .video-component{
    width: 100vw;
    height: 60vw;
    .loading.el-loading-parent--relative{
      height: 60vw;
      .el-loading-mask{
        height: 60vw;
      }
    }
   .shareimg{
      position: absolute;
      width: 80vw;
      height: 60vh;
      margin: auto;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      #qrcode{
        position: absolute;
        bottom: 0;
        left: 0;
      }
      img{
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
    .video-construct{
      .top{
        height: 10vw;
        // background-color: aqua;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
          font-size: 20px;
          font-weight: bolder;
          flex: 7;
          padding-left: 20px;
        }
        i{
          flex: 1.5;
          text-align: center;
          font-size: 20px;
          color: rgb(56, 204, 19);
        }
      }
    }
  };
  @media screen and (min-width: 768px) {
    .video-component{
      width: 50vw;
      height: 32vw;
      margin: 0 auto;
    .loading.el-loading-parent--relative{
      height: 28vw;
      .el-loading-mask{
        height: 28vw;
      }
    }
      .video-content{
        .video-player.vjs-big-play-centered{
          .video-js{
            button.vjs-big-play-button{
              transform: scale(2);
            }
            .vjs-control-bar{
              background-color: white;
              transform: scaleY(2);
              position: relative;
              top: 1vw;
              button.vjs-play-control{
                width: 3vw;
                color: #ec5f3a;
                .vjs-icon-placeholder::before{
                  font-size: 1.5vw;
                  line-height: 0.85;
                }
              }
              .vjs-volume-panel{
                width: 3vw;
                color: #ccc;
                .vjs-mute-control{
                  width: 2vw;
                  .vjs-icon-placeholder::before{
                    font-size: 1.1vw;
                    line-height: 1.1;                    
                  }
                }
              }
              .vjs-current-time{
                width: 2vw;
                display: block;
                .vjs-current-time-display{
                  color: black;
                }
              }
              .vjs-progress-control{
                flex: 1;
               .vjs-progress-holder.vjs-slider.vjs-slider-horizontal{
                   background-color: rgba(244,85,58,0.3);
                  .vjs-play-progress::before {
                    transform: translateY(-2px) scaleX(1.3);
                  }
                  .vjs-play-progress{
                    background-color:#ec5f3a ;
                  }
                  .vjs-load-progress{
                   div{
                    background: rgba(244,85,58,0.3);
                   } 
                  }
                }
              }
              .vjs-remaining-time{
                span{
                  color: black;
                }
              }
              .vjs-playback-rate{
                display: none;
              }
              .vjs-fullscreen-control {
                width: 2vw;
                .vjs-icon-placeholder::before{
                    font-size: 1.1vw;
                    line-height: 1.1;  
                    color: black;
                }
              }
            }
          }
        }
      }
    }
  }

</style>