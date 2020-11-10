<template>
<div class="introduce" v-if="current">
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item name="1">
      <template slot="title">
        <span class="video_title">{{current.video_title}}</span>
        <span class="video_author">{{current.author}}</span>
        <span class="video_time">2020/1/1</span>
      </template>
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
/* 详情组件，
通过传入一个对象，当前显示视频的详情
author:Sting
flag:Number
img_url:String
video_describe:String
video_id:Number
video_title:String
video_url:String
*/
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
@media screen and (max-width: 768px) {
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
            height: auto;
            font-size: 5vw;
            font-weight: bolder;
            padding-left: 5vw;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            line-height: normal;
            &.is-active{
              .video_title::after{
               content: '>';
               transform: rotate(90deg);
              }
            }
            span{
              margin: 2vw 0;
            }
            .video_title::after{
              content: '>';
              display: inline-block;
              font-size: 12px;
              width: 6vw;
              height: 6vw;
              margin-left: 3vw;
              line-height: 6vw;
              text-align: center;
              border-radius: 50%;
              background-color: red;
              color: white;
            }
            .video_author{
              font-weight: normal;
              font-size: 4vw;
            }
            .video_time{
              font-weight: normal;
              font-size: 3vw;
            }
            .el-icon-arrow-right:before {
              display: none;
              // background-color: red;
              // border-radius: 50%;
              // color: white;
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
}
  @media screen and (min-width:768px) {
  .introduce {
    margin: 5vw 0 2vw 0;
    display: flex;
    justify-content: space-between;
    .el-collapse {
      width: 70vw;
      .el-collapse-item {
        display: flex;
        border: 1px solid #ccc;
        border-left: none;
        &.is-active{
          display: flex;
          .el-collapse-item__wrap{
          }
        }
        div {
          .el-collapse-item__header {
              width: 15vw;
            &.is-active{
              width: 15vw;
              .video_time::after{
                content: '>';
                transform: rotate(90deg);
              }
            }
            height: auto;
            font-size: 3vw;
            font-weight: bolder;
            padding-left: 5vw;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            line-height: normal;
            span{
              margin: 0.7vw 0;
            }
            // .video_title
            .video_author{
              font-weight: normal;
              font-size: 2vw;
            }
            .video_time{
              font-weight: normal;
              font-size: 1.5vw;
              color: #ccc;
            }
            .video_time::after{
              content: '>';
              display: inline-block;
              font-size: 4vw;
              width: 4vw;
              height: 4vw;
              margin-left: 3vw;
              line-height: 4vw;
              text-align: center;
              border-radius: 50%;
              background-color: red;
              color: white;
            }
            .el-icon-arrow-right:before {
              display: none;
              // background-color: red;
              // border-radius: 50%;
              // color: white;
            }
          }
        }
        .el-collapse-item__wrap {
          .el-collapse-item__content {
            div {
              padding: 0 5vw;
              font-size: 1.5vw;
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
      span{
        font-size: 2.5vw;
      }
    }
  }
  }
</style>