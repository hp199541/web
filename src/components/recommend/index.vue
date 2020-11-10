<template>
  <div class="recommend">
    <div class="swiper-container">
      <swiper ref="mySwiper" :options="swiperOptions" v-if="recommendlist.length">
        <swiper-slide v-for="(item,index) of recommendlist.slice(0,3)" :key="index" @click.native="todetail(item.video_id)">
          <img :src="item.img_url" alt="">
        </swiper-slide>
      </swiper>
  </div>
  </div>
</template>
<script>
/* 类似于轮播图的横向展示，用于推荐和中间的轮播图广告，传入一个recommendlist数组
每一个item的值
author:Sting
flag:Number
img_url:String
video_describe:String
video_id:Number
video_title:String
video_url:String
*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Vue from 'vue'
Vue.use(VueAwesomeSwiper /* { default options with global component } */)
export default {
    name: 'swiper-example-loop',
    title: 'Loop mode / Infinite loop',
    props:{
      recommendlist:Array
    },
  data(){
    return {
          swiperOptions: {
          slidesPerView: 1.6,
          spaceBetween:30
            }
    }
  },
  mounted () {

  },
  methods:{
    todetail(video_id){
      //  this.$router.push('/detail?videoid='+video_id)
      //有时候路由传参会丢失，我们为你可以使用query方式，.push({name:'name',query:{}})  路由配置 /：qurey的数据
      this.$router.push({path:'/detail',query:{
        video_id:video_id
      }})
       this.$emit('update',video_id)
    }
  }
}
</script>
<style lang='scss' scoped>
.recommend{
  width: 90%;
  margin: 8vw auto;
  height: 25vw;
  .swiper-container{
    height: 25vw;
    .swiper-container{
      height: 25vw;
      .swiper-wrapper{
        height: 25vw;
        .swiper-slide{
          box-sizing: border-box;
          height: 25vw;
          border: 2px solid #ccc;
          border-radius: 10px;
          img{
            height: 100%;
          }
        }
      }
    }
  }  
}
        
</style>