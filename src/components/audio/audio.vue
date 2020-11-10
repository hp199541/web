<template>
      <aplayer v-if="list3.length>0"
        autoplay
        theme="pic"
        shuffle
        repeat="list"
        show-lrc
        :muted.sync="muted"
        :volume.sync="volume"
        :music='list3[0]'
        :list='list3'
      />
</template>
<script>
/* 
音频播放控件
传入一个对象
*/
import aplayer from 'vue-aplayer'
export default {
  name:'Audio',
  components:{
    aplayer
  },
  props:{
    audio:Array
  },
  data() {
      return {
        volume: 1,
        muted: false,
        music3: null,
        list3: [
          {
            title: '前前前世',
            artist: 'RADWIMPS',
            url: 'http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3',
            pic: 'https://img.yihaodianimg.com/vip-pro/images/pcQuality/img_jxpzItem1.png'
          },
          {
            title: '光るなら.m3u8',
            artist: 'Goose house',
            url: 'http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3',
            pic: 'https://img.yihaodianimg.com/vip-pro/images/pcQuality/img_jxpzItem1.png'
          },
          {
            title: '回レ！雪月花',
            artist: '小倉唯',
            url: 'http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3',
            pic: 'https://img.yihaodianimg.com/vip-pro/images/pcQuality/img_jxpzItem1.png'
          },
          {
            title: 'あっちゅ～ま青春!',
            artist: '七森中☆ごらく部',
            url: 'http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3',
            pic: 'https://img.yihaodianimg.com/vip-pro/images/pcQuality/img_jxpzItem1.png'
          },
          {
            title: 'あっちゅ～ま青春!',
            artist: '七森中☆ごらく部',
            url: 'http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3',
            pic: 'https://img.yihaodianimg.com/vip-pro/images/pcQuality/img_jxpzItem1.png'
          }
        ],          
      }
  },
  created () {
    this.$nextTick(() => {
    this.list3 = this.audio
    })
  }
}
</script>
<style lang="scss">
.aplayer.aplayer-withlist.aplayer-withlrc{
  .aplayer-body{
    display: initial !important;
    .aplayer-pic{
      width: 100vw;
      height: 40vh;
      .aplayer-button.aplayer-pause{
        width: 20vw;
        height: 20vw;
        margin: 0 -10vw -10vw 0;
        border: 2px solid #fff;
        bottom: 50%;
        right: 50%;   
        button.aplayer-icon.aplayer-icon-pause{
          width: 14vw;
          height: 14vw;
          left: 50%;
          top: 50%;
          margin-left: -7vw;
          margin-top: -7vw;        
        }   
      }
      .aplayer-button.aplayer-play{
        width: 20vw;
        height: 20vw;
        margin: 0 -10vw -10vw 0;
        button.aplayer-icon.aplayer-icon-play{
          width: 14vw;
          height: 14vw;
          left: 50%;
          top: 50%;
          margin-left: -7vw;
          margin-top: -7vw;
        }
      }
    }
    .aplayer-info{
      .aplayer-music{
        display: none;
      }
    }
  }
}
</style>