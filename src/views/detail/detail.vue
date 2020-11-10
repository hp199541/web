<template>
  <div class="detail">
    <Video :current='currentVideo'></Video>
    <Introduce :current='currentVideo' @share='share'></Introduce>
    <div class="pcnav">
      <span>剧集列表</span>
    </div>
    <Calendar v-if="tag==1?true:false"></Calendar>
    <Recommend :recommend ='recommendlist' v-if="tag==1?false:true"></Recommend>
    <div class="pcrecommend">
      <span>视频推荐</span>
    </div>
    <Bottom :recommendlist ='recommendlist' @update='changeVideo'></Bottom>
    <Share :showshare='isshare' @close='close'></Share>
    <Pcshare :showshare='ispcshare' @pcopen='close'></Pcshare>
  </div>
</template>
<script>
import Video from '@/components/video/video.vue'
import Introduce from '@/components/introduce/introduce.vue'
import Calendar from '@/components/Calendar/calendar.vue'
import Recommend from '@/components/recommend/list.vue'
import Bottom from '@/components/recommend/index.vue'
import Share from '@/components/share/share.vue'
import Pcshare from '@/components/pcshare/pcshare'
import {typeoneById} from '@/api/index'
export default {
  name:'detail',
  components:{
    Video,
    Introduce,
    Calendar,
    Recommend,
    Share,
    Pcshare,
    Bottom
  },
  props:{
    video:Array
  },
  data () {
    return {
      tag : null,
      currentVideo:{},
      shortList:[],
      isshare:false,
      ispcshare:false
    }
  },
  watch:{
    '$route.query.video_id':{
      handler(newval,oldval){
        typeoneById({id:newval}).then(res => {
          if(res.data.status_code == 200) {
          console.log(res.data)
            this.currentVideo = res.data.video_list[0]
            this.shortList = res.data.video_list
          }          
        })
      },
      deep:true
    }
  },
  computed:{
    recommendlist () {
      return this.video.filter(item => (item.flag === 0))
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
    },
    changeVideo(id){
      console.log(id)
    }
  },
  created () {
    const {video_id,tag} = this.$route.query
    // console.log(video_id,tag)
    this.tag = tag || 0
    typeoneById({id:video_id})
    .then(res =>{
      console.log(res)
      // console.log(res.data.video_list[0])
      if(res.data.status_code == 200) {
        this.currentVideo = res.data.video_list[0]
        this.shortList = res.data.video_list
      }
    })
  }
}
</script>
<style lang="scss">
@media screen and (min-width: 768px){
  .detail{
    .pcnav{
      display: block;
      text-align: right;
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
    .pcrecommend{
      display: block;
      text-align: right;
      height: 3vw;
      line-height: 3vw;
      border: 1px solid #ccc;
      background: linear-gradient(to right, gray 20%, white 20%);
      padding-right: 5vw;
      margin-bottom: 3vw;
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
  }
}
@media screen and (max-width: 768px){
  .detail{
    .introduce{
      margin-bottom: 0;
    }
    .pcnav{
      display: block;
      text-align: right;
      margin-bottom: 3vw;
      height: 8vw;
      line-height: 8vw;
      border: 1px solid #ccc;
      border-top: none;
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
    .pcrecommend{
      display: block;
      text-align: right;
      margin-bottom: 3vw;
      height: 8vw;
      line-height: 8vw;
      border: 1px solid #ccc;
      border-top: none;
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
  }
}
</style>