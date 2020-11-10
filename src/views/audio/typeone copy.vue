<template>
  <div class="typeone">
    <Audio :audio='audioList'></Audio>
  </div>
</template>
<script>
import Audio from '@/components/audio/audio.vue';
import { audio } from '@/api/index'
export default {
  components:{
    Audio
  },
  data () {
    return {
      audioList:[]
    }
  },
  created () {
  audio()
  .then(res => {
    if(res.data.status_code == 200) {
      res.data.video_list.map(item => {
        this.audioList.push({
          title:item.audio_title,
          artist:item.audio_author,
          url:item.audio_url,
          pic:item.audio_picture
        })
      })
    } else {

    }
  })
  }
}
</script>
<style lang="scss">
@media screen and (min-width: 768px) {
  .typeone{
    .aplayer.aplayer-withlist.aplayer-withlrc{
      .aplayer-body{
        .aplayer-pic{
          width: 50vw;
          height: 30vw;
          margin: 0 auto;
          .aplayer-button.aplayer-play{
            width: 8vw;
            height: 8vw;
            margin: 0 -4vw -4vw 0;
            button.aplayer-icon.aplayer-icon-play{
              transform: scale(0.8);
              svg{
                transform: scale(0.5);
              }
            }
          }
        }
        .aplayer-info{
           
        }
      }
    }
  }
}
</style>