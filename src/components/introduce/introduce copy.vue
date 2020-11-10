<template>
<div class="introduce" v-if="current" accordion>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item :title="current.video_title" name="1">
      <div>{{current.video_describe}}</div>
    </el-collapse-item>
  </el-collapse>
  <div class="methods">
    <span @click="spin(current.video_id)">收藏</span>
    <span>/</span>
    <span @click="share">分享</span>
  </div>
</div>
</template>
<script>
import Vue from 'vue'
import { Toast  } from 'vant';
import Nativeshare from 'nativeshare'
Vue.use(Toast);
import {spin} from '@/api/index.js'
  export default {
    props:{
      current:Object
    },
    data() {
      return {
        activeNames: ['0'],
        nativeShare:null
      };
    },
    methods: {
      share (command) {
        const str = window.navigator.userAgent
        if(str.toLowerCase().indexOf("mobile") == -1){
          this.$emit('share','pc')            
        }else{
          // this.$emit('share','mobile')
          this.nativeShare.setShareData({
              icon: this.current.img_url,
              link: window.location.href,
              title: this.current.video_title,
              desc:this.current.video_describe,
              from: '@fa-ge',            
          })
        try {
          console.log(command)
          this.nativeShare.call(command)
          // 如果是分享到微信则需要 nativeShare.call('wechatFriend')
          // 类似的命令下面有介绍
          console.log('支持')
        } catch(err) {
          // 如果不支持，你可以在这里做降级处理
          console.log(err)
          // Toast.err('不支持该浏览器自动分享,请您手动分享')
        }
        }
      },
      handleChange(val) {
        // console.log(val);
      },
      async spin(id){
        const res = await spin({id})
        if (res.data.status_code === 200){
          Toast.success('收藏成功')
        } else {
          Toast.success('收藏失败')
        }
      }
    },
    created () {
    this.nativeShare = new NativeShare({
        // wechatConfig: {
        //   appId: self.shlist.appId,
        //   timestamp: self.shlist.timestamp,
        //   nonceStr: self.shlist.nonceStr,
        //   signature: self.shlist.signature,
        // },
        // 让你修改的分享的文案同步到标签里，比如title文案会同步到<title>标签中
        // 这样可以让一些不支持分享的浏览器也能修改部分文案，默认都不会同步
        syncDescToTag: false,
        syncIconToTag: false,
        syncTitleToTag: false,
      })
      // setTimeout(() => {
      // const Header = document.getElementsByClassName('el-collapse-item__header')[0]
      // const Html = document.createElement('div')
      // Html.innerHTML = `<p>${this.current.author}</p><p>${this.current.flag}</p>`
      // // console.log(Html)
      // Header.appendChild(Html)
      // },500)
    }
  }
</script>
<style lang="scss">
  .introduce {
    margin: 5vw 0 2vw 0;
    display: flex;
    justify-content: space-between;
    .el-collapse {
      width: 70vw;
      .el-collapse-item {
        border: 1px solid #ccc;
        border-left: none;
        div {
          .el-collapse-item__header {
            height: 25vw;
            font-size: 5vw;
            font-weight: bolder;
            padding-left: 5vw;
            .el-icon-arrow-right:before {
              background-color: red;
              border-radius: 50%;
              color: white;
            }
          }
        }
        .el-collapse-item__wrap {
          .el-collapse-item__content {
            div {
              padding: 0 5vw;
              font-size: 3vw;
            }
          }
        }
      }
    }
    .methods {
      background: linear-gradient(to bottom, gray 30%, white 30%);
      border: 1px solid #ccc;
      border-left: none;
      width: 30vw;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  @media screen and (min-width:768px) {
    .introduce{
      margin-top: 0;
      .el-collapse{
        
        .el-collapse-item{
          div{
            .el-collapse-item__header{
              height: 10vw;
              font-size: 2vw;
              padding-right: 30vw;
              position: relative;
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;
              div{
                p{
                  &:nth-child(1){
                    font-size: 1.2vw;
                  }
                  &:nth-child(2){
                    font-size: 0.8vw;
                    color: rgba(0,0,0,0.5);
                  }
                }
              }
              .el-collapse-item__arrow .el-icon-arrow-right{
                font-size: 3vw;
              }
            }
        }
      .el-collapse-item__wrap{
                  .el-collapse-item__content{
                    div{
                      font-size: 1vw;
                    }
                  }
                }
            }
          }
      .methods{
        span{
          font-size: 2vw;
        }
      }
    }
  }
</style>