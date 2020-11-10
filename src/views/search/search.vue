<template>
  <div class="search">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @input="searching(value)"
    >
      <template #action>
        <div @click="onSearch(value)" >搜索</div>
      </template>
    </van-search>
    <div class="searchType">
      <li v-for="(item,index) of searchType" :key="index" :class="{active:index == mark}" @click="changeType(index)">
        <span>{{item}}</span>
      </li>
    </div>
    <div class="line"></div>
    <div class="searchlist">
      <!-- <li v-for="(item,index) of searchlist" :key="index">{{item.video_title}}</li> -->
      <!-- <Searchlist :recommendlist='searchlist'></Searchlist> -->
    </div>
    <Pagination v-if="searchlist.length>0"></Pagination>
  </div>
</template>
<script>
import Vue from 'vue'
import { Search  } from 'vant';
import {searchlist} from '@/api/index.js'
import {throttle} from '@/utils/config.js'
import Searchlist from '@/components/recommend/list'
import Pagination from '@/components/pagination/pagination.vue'
Vue.use(Search );
export default {
  name:'search',
  components:{
    Searchlist,
    Pagination
  },
  data() {
    return {
      value: '',
      searchlist:[],
      searchType:[
        '短视频',
        '音频类',
        '纪录片'
      ],
      mark:0
    };
  },
  methods: {
    onSearch(val) {
      console.log(val);
    },
    changeType(index){
      console.log(index)
      this.mark = index
    },
    searching:throttle(function(val){
      searchlist({name:val}).then(res => {
        // console.log(res.data)
        this.searchlist = res.data
      })
    },1000)
  }
};
</script>
<style lang="scss">
.search{
  width: 90vw;
  margin: 0 auto;
  .van-search.van-search--show-action{
    .van-search__content.van-search__content--square{
      background-color: white;
      border-bottom: 1px solid #ccc;
      padding: 0;
      .van-cell.van-cell--borderless.van-field{
        .van-field__left-icon{
          display: none;
        }
      }
    }
    .van-search__action{
      div{
        color: black;
        font-size: 16px;
      }
      div::after{
        content: 'Search';
        font-size: 12px;
        color:rgba(0,0,0,0.5) ;
      }
    }
  }
  .searchType{
    width: 60vw;
    margin: 10vw auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li{
      color: #cccc;
      &:nth-child(2){
        &::before{
          content: '/';
          position: relative;
          left: -15px;
        }
        &::after{
          content: '/';
          position: relative;
          right: -15px;
        }
      }
    }
    .active{
      color: black;
    }
  }
}
@media screen and (min-width: 768px) {
  .search{
    .van-search.van-search--show-action{
      width: 25vw;
      margin: 4vw auto 3vw auto;
      .van-search__content.van-search__content--square{
        .van-cell.van-cell--borderless.van-field{
          .van-cell__value.van-cell__value--alone.van-field__value{
            .van-field__body{
              input.van-field__control{
                font-size: 1vw;
              }
            }
          }
        }
      }
      .van-search__action{
        div{
          font-size: 1.5vw;
          &::after{
            margin-left: 10px;
            font-size: 1vw;
          }
        }
      }
    }
    .searchType{
      width: 20vw;
      margin: 3vw auto 2vw auto;
      li{
        span{
          font-size: 1vw;
        }
        &:nth-child(2){
          &::after{
            right: -2.5vw;
            font-size: 1vw;
          }
          &::before{
            left: -2.5vw;
            font-size: 1vw;
          }
        }
      }
    }
    .line{
      width: 90vw;
      height: 2px;
      background-color: #ccc;
    }
    .el-pagination{
      margin-left: 60vw ;
    }
  } 
}
</style>
<style src='@/css/index.scss' lang='scss'></style>
