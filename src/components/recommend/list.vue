<template>
  <div class="vertical-list">
    <li v-for="(item,index) of recommend.slice(0,3)" :key="index" @click="todetail(item)">
      <div class="left"><img :src="item.img_url" alt=""></div>
      <div class="right">
        <h3>{{item.video_title}}</h3>
        <p>{{item.author}}</p>
        <p>{{item.video_describe}}</p>
      </div>
    </li>
  </div>
</template>
<script>
/*推荐的竖向展示*/
export default {
  name:'verticalList',
  props:{
    recommend:{
      type:Array,
      default:[]
    }
  },
  methods:{
    todetail(item){
      const {video_id} = item
      const tag = tag || 0
      this.$router.push(`/detail?tag=${tag}&video_id=${video_id}`)      
    }
  }
}
</script>
<style lang="scss">
  .vertical-list {
    li {
      width: 90vw;
      height: 30vw;
      margin: 0 auto;
      display: flex;
      overflow: hidden;
      margin-bottom: 10vw;
      border-bottom: 1px solid #ccc;
      .left {
        flex: 6;
        img {
          display: inline-block;
          width: 50vw;
          height: 25vw;
        }
      }
      .right {
        flex: 4;
        p {
          &:nth-child(3) {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
        }
      }
    }
  }  
  @media screen and (min-width:768px ){
    .vertical-list{
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      li{
        width: 24vw;
        height: 10vw;
        display: flex;
        border: none;
        margin-bottom: 5vw;
        justify-content: space-between;
        .left{
          flex: inherit;
          width: 24vw;
          img{
            width: 90%;
            height: 100%;
          }
        }
        .right{
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          h3{
            font-size:1.5vw;
          }
          p{
            font-size: 1vw;
          }
        }
      }
    }
  }
</style>