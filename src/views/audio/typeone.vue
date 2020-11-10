<template>
  <div class="typeone">
    <Audio :audioList='nowAudio'></Audio>
    <Introduce :current='currentaudio' @share='share'></Introduce>
    <Share :showshare='isshare' @close='close'></Share>
    <Pcshare :showshare='ispcshare' @pcopen='close'></Pcshare>
  </div>
</template>
<script>
import Introduce from '@/components/introduce/introduce.vue'
import Audio from '@/components/audio/audio2.vue';
import Share from '@/components/share/share'
import Pcshare from '@/components/pcshare/pcshare'
import { audio } from '@/api/index'
export default {
  components:{
    Audio,
    Introduce,
    Share,
    Pcshare
  },
  data () {
    return {
      audioslist:[],
      currentaudio:{},
      nowAudio:[],
      isshare:false,
      ispcshare:false
    }
  },
  created () {
    audio()
    .then(res => {
      res.data.video_list.map(item => {
        this.audioslist.push(item.audio_url)
      })
      this.nowAudio.push(this.audioslist[0])
    })
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
}
</script>
<style lang="scss">
@media screen and (min-width: 768px) {

}
</style>