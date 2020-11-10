<template>
  <div class="users">
    <div class="top">
      <div class="userinfo">
        <span>个人信息</span>
        <span>Personal Introduce</span>
      </div>
      <div class="useracount">
        {{useracount}}
      </div>
    </div>
    <div class="user-content">
      <div class="tablist">
        <li v-for="(item,index) of tablist" :key="index" :class="{active:mark === index}" @click="changetab(index)">{{item}}</li>
      </div>
      <div class="collection" v-if="usertab">
        <div class="havcollection" v-if="collection.length>0">
          <li v-for="(item,index) of collection" :key="index">
          <div class="left"><img :src="item.img_url" alt=""></div>
          <div class="right">
            <h3>{{item.video_title}}</h3>
            <p>{{item.author}}</p>
            <p>{{item.video_describe}}</p>
          </div>
          </li>
        </div>
        <div v-else>
          暂时没有收藏
        </div>
      </div>
      <div v-else class="history">history</div>
      <Pagination :total='total' @changePage='changePage' v-if="isshow"></Pagination>
    </div>
  </div>
</template>
<script>
import {getspinlist,pagelove} from '@/api/index.js'
import Pagination from '@/components/pagination/pagination.vue'
export default {
  name:"user",
  components:{
    Pagination
  },
  data () {
    return {
      usertab:true,
      tablist:['我的收藏','/','浏览记录'],
      mark:0,
      collection:[],
      total:0
    }
  },
  computed:{
    useracount () {
      return this.$store.state.user.user
    },
    isshow () {
      if(this.mark == 0){
        return true
      } else {
        return false
      }
    }
  },
  methods:{
    changePage(page){
      const pageCode = page*1 - 1
      pagelove({limitNum:5,pageCode})
      .then(res => {
      console.log(res)
      if (res.data.status_code == 200) {
          this.collection = res.data.lovelist
          this.total = res.data.total
      }
    })
    },
    changetab(index){
      this.mark = index
      if(index === 0) {
        this.usertab = true
      } else {
        this.usertab = false
      }
    }
  },
  created () {
    const pageCode = 0
    pagelove({limitNum:5,pageCode})
    .then(res => {
      if (res.data.status_code == 200) {
          this.collection = res.data.lovelist
          this.total = res.data.total
      }
    })
  }
}
</script>
<style lang="scss">
  .users{
    width: 100vw;
    height: 20vw;
    border-bottom: 1px solid #ccc;
    .top{
      height: 100%;
      display: flex;
      .userinfo{
        flex: 3;
        background-color: #e5e5e5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span:nth-child(1){
          color: black;
          font-size: 20px;
          text-align: center;    
        }
        span:nth-child(2){
          color: #a0a0a0;
          font-size: 14px;
          text-align: center;
        }
      }
      .useracount{
        flex: 7 ;
        text-align: center;
        line-height: 20vw;
      }
    }
    .user-content{
      .tablist{
        height: 15vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #ccc;
        li{
            font-size: 20px;
            font-weight: bolder;
          &.active{
            color:#ec5f3a ;
          }
        }
      }
      .collection{
        .havcollection{
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
      }
    }
  }
@media screen and (min-width: 768px) {
  .users{
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    margin-top: 5vw;
    border: none;
    .top{
      height: 5vw;
      display: flex;
      border-top: 2px solid #ccc;
      border-bottom: 2px solid #ccc;
      .userinfo{
        flex: inherit;
        width: 20vw;
        background-color: #e5e5e5;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        span{
          &:nth-child(1){
            font-size: 2vw;
          }
          &:nth-child(2){
            font-size: 1vw;
          }
        }
      }
      .useracount{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2vw;
      }
    }
    .user-content{
      .tablist{
        width: 20vw;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        height: 10vw;
        box-sizing: border-box;
        padding: 2vw 0;
        border-bottom: none;
        li{
          font-size:1.5vw ;
        }
      }
      .collection{
        width: 90vw;
        margin: 0 auto;
        border-top: 2px solid #ccc;
        .havcollection{
          padding-top: 5vw;
          display: flex;
          justify-content: space-between;
          li{
            margin-right: 2vw;
            border: none;
            margin: 0;
            width: 15vw;
            height: 20vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            .left{
              width: 100%;
              height: 8vw;
              flex: inherit;
              img{
                width: 100%;
                height: 100%;
              }
            }
            .right{
              flex: 1;
              h3{
                font-size: 2vw;
              }
              p{
                &:nth-child(2){
                  color: black;
                  font-size: 1.5vw;
                }
                &:nth-child(3){
                  font-size: 1vw;
                  color: rgba(0,0,0,0.5);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>