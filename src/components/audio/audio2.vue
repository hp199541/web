<template>
  <div class="audio">
    <div class="download" @click="download">下载</div>
    <div class="music-bd">
      <img src="" alt="">
    </div>
    <AudioPlayer :audio-list="audioList"
                 :before-play="onBeforePlay"
                 :isLoop='false'
                 @ended='playend' />
  </div>
</template>
<script>
import { AudioPlayer } from '@liripeng/vue-audio-player'
import '@liripeng/vue-audio-player/lib/vue-audio-player.css'
import saveAs from 'file-saver'
var FileSaver = require('file-saver')
export default {
  components: {
  AudioPlayer
},
props:{
  audioList:{
    type:Array,
    default:[]
  }
},
  data () {
    return {
    //   audioList: []      
    }
  },
  created () {
    console.log(this.audioList)
  },
  methods: {
    download () {
      FileSaver.saveAs('')
    },
    // 播放前做的事
    onBeforePlay(next) {
        console.log('这里可以做一些事情...')
        next() // 开始播放
    },
    playend () {
      console.log('end')
    }
  }
}
</script>
<style lang="scss">
@media screen and (max-width: 768px) {
  .audio{
    width: 100vw;
    height: 60vw;
    background-color: rgba(0,0,0,0.3);
    position: relative;
    .music-bd{
      width: 100%;
      height: 100%;
    }
    .audio-player{
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      margin: 0;
      box-sizing: border-box;
      padding: 15px;
      .audio__btn-wrap{
        .audio__play--pause{
          svg{
            color: #ccc;
          }          
        }
        .audio__play--previous{
          display: none;
        }
        .audio__play--start{
          svg{
            color: #ccc;
          }
        }
        .audio__play--next{
          display: none;
        }
      }
    }
  }
}
</style>