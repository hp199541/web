<template>
  <div class="appmain">
    <Top></Top>
    <AppMain :video = 'videolist'></AppMain>
  </div>
</template>
<script>
import Top from '@/components/top/top.vue'
import AppMain from '@/views/layout.vue'
import { getAllVideo } from '@/api/index'
import {setScrolltop,getScrolltop} from '@/utils/token.js'
export default {
    components:{
    Top,
    AppMain
  },
  data () {
    return {
      videolist:[]
    }
  },
  created () {
    this.$nextTick(() => {
      setTimeout(() => {
        const lastscrollTop = getScrolltop()
        document.getElementsByClassName('appmain')[0].scrollTop = lastscrollTop*1  
      },500)
    })
    getAllVideo().then(res => {
      if(res.data.status_code == 200) {
        this.videolist = res.data.video_list
      }
    })
  },
  methods:{
    getScrolltop () {
      var Appmain = document.getElementsByClassName('appmain')[0]
      var scrollTop = Appmain.scrollTop
      setScrolltop(scrollTop)
    }
  },
  mounted () {
    var Appmain = document.getElementsByClassName('appmain')[0]
    Appmain.addEventListener('scroll',this.getScrolltop)
  }
}
</script>
<style lang="scss">
.appmain{
  height: 100vh;
  overflow-y: auto;
}
</style>