<template>
  <div class="swiper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index" @click="changeitem">
        <img v-lazy="image.imgUrl" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from 'vue';
import { Lazyload } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import {banner} from '@/api/index'
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
export default {
  name:'swiper',
  data() {
    return {
      images: [],
    };
  },
  created () {
    banner()
    .then(res => {
      if(res.data.status_code == 200){
        this.images = res.data.banner_list
      }
    })
  },
  methods:{
    changeitem(event){
      console.log(event)
    }
  }
}
</script>
<style lang="scss">
.swiper{
  height: 40vw;
  .van-swipe{
    height: 100%;
    .van-swipe-item{
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .swiper{
    // display: none;
  }
}
</style>
