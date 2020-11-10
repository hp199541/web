<template>
  <div class="video-all">
    <li v-for="(item,index) of shortType" :key="index" class="videoitem" @click="todetail(item)">
      <div class="left">
        <img :src="item.list[0].img_url" alt="">
      </div>
      <div class="right">
        <h3>{{item.title}}</h3>
      </div>
    </li>
    <div class="shortabout">
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Footer from '@/components/footer/footer'
import {getShort} from '@/api/index'
export default {
  name:'short_video_type',
  components:{
    Footer
  },
  data () {
    return {
      shortType:[]
    }
  },
  created () {
    getShort().then(res => {
      if(res.data.status_code === 200) {
        // console.log(res.data.video_list)
        this.shortType = res.data.video_list
      }
    })
  },
  methods:{
    todetail(item){
      const video_id = item.list[0].video_id
      const tag = item.tag
      // console.log(item.list[0].video_id,item.tag)
      this.$router.push(`/detail?tag=${tag}&video_id=${video_id}`)
    }
  }
}
</script>
<style lang="scss">
.video-all{
  width: 90vw;
  margin: 0 auto;
  padding-top: 15vw;
  .videoitem{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10vw;
    // border-bottom: 1px solid #ccc;
    .left{
      flex: 5;
      margin-right: 10vw;
      img{
        width: 100%;
        height: auto;
      }
    }
    .right{
      flex: 4;
    }
  }
  .shortabout{
    text-align: right;
    font-weight: bolder;
    span{
      display: inline-block;
      margin-bottom: 5vw;
      border-bottom: 1px solid #ccc;
    }
  }
}
@media screen and (min-width: 768px){
  .video-all{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li.videoitem{
      margin: 0;
      width: 27vw;
      height: 25vw;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .left{
        flex: inherit;
        margin: 0;
        width: 100%;
        height: 15vw;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .left:hover{
        transform: scale(1.2);
      }
      .right{
        margin-top: 20px;
        width: 100%;
        flex: 1;
        h3{
          font-size: 2vw;
        }
      }
    }
    .shortabout{
      border-top: 2px solid #ccc;
      width: 100%;
      .footer{
        li{
          height: 5vw;
          line-height: 5vw;
          span{
            font-size: 1.6vw;
          }
        }
      }
    }
  }
}
</style>