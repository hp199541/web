<template>
<div class="calendar">
  <van-calendar
    type="range" 
    @select='getTime'
    :min-date="minDate"
    :max-date="maxDate"
    :poppable="false"
    :show-confirm="false"
  />
  <div class="select">
    <li @click="changedate">01/01 -- 02/30 哈哈哈哈</li>
  </div>
</div>
</template>
<script>
/* 封装的日历组件，
通过changedate触发父组件方法，改变系列类型
*/
import Vue from 'vue';
import { Calendar } from 'vant';
Vue.use(Calendar);
export default {
  data () {
    return {
      minDate: new Date(2010, 0, 5),
      maxDate: new Date(2010, 0, 16),
    }
  },
  methods: {
    changedate(){
      console.log(1)
      var date = new Date(1605196800000)
      var year = date.getFullYear()
      var month = date.getMonth()
      var day = date.getDate()
      this.minDate = new Date(year,month,day)
      this.maxDate = new Date(year,month,day+3)
    },
    getTime(e){
      console.log(e[0].getTime())
    }
  },
  created () {
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth()
    var day = date.getDate()
    this.minDate = new Date(year,month,day)
    this.maxDate = new Date(year,month,day+3)
  }
};
</script>
<style lang="scss">
@media screen and (min-width: 768px){
  .calendar{
    display: flex;
    justify-content: center;
    width: 90vw;
    margin: 0 auto;
    .van-calendar{
      width: 50vw;
      .van-calendar__header{
        width: 50vw;
        .van-calendar__header-title{
          display: none;
        }
        .van-calendar__header-subtitle{
          width: 90%;
          margin: 1vw auto;
          text-align: right;
          font-size: 2vw;
        }
        .van-calendar__weekdays{
          span{
            font-size: 1vw;
          }
        }
      }
      .van-calendar__body{
        .van-calendar__month{
          .van-calendar__days{
            .van-calendar__day{
              height: 5vw;
              font-size: 1.5vw;
            }
            .van-calendar__day.van-calendar__day--disabled{
              height: 5vw;
              font-size: 1.5vw;
            }
            .van-calendar__day.van-calendar__day--middle{
              height: 5vw;
              color: black;
              font-size: 1.5vw;
              &::after{
                background-color: white;
              }
            }
            .van-calendar__day.van-calendar__day--start{
              height: 5vw;
              background-color: white;
              color: black;
              font-size: 1.5vw;
              .van-calendar__bottom-info{
                display: none;
              }
            }
            .van-calendar__day.van-calendar__day--end{
              height: 5vw;
              background-color: white;
              color: black;
              font-size: 1.5vw;
              .van-calendar__bottom-info{
                display: none;
              }
            }
          }
          .van-calendar__month-title{
            width: 45vw;
            margin: 1vw auto;
            text-align: right;
            font-size: 2vw;
          }
        }
      }
      .van-calendar__footer{
      }
    } 
    .select{
      border-left: 1px solid #ccc;
      width: 20vw;
      box-sizing: border-box;
      padding: 2vw 3vw;
      li{
        font-size: 1vw;
      }
    }
  } 
}
@media screen and (max-width: 768px){
.van-calendar{
  width: 90vw;
  margin: 0 auto;
  .van-calendar__header{
    .van-calendar__header-title{
      display: none;
    }
    .van-calendar__header-subtitle{
      width: 90vw;
      margin: 0 auto;
      text-align: right;
      font-size: 5vw;
    }
  }
  .van-calendar__body{
    .van-calendar__month{
      .van-calendar__days{
        .van-calendar__day{
          height: 10vw;
        }
        .van-calendar__day.van-calendar__day--disabled{
          height: 10vw;
        }
        .van-calendar__day.van-calendar__day--middle{
          height: 10vw;
          color: black;
          &::after{
            background-color: white;
          }
        }
        .van-calendar__day.van-calendar__day--start{
          height: 10vw;
          background-color: white;
          color: black;
          .van-calendar__bottom-info{
            display: none;
          }
        }
        .van-calendar__day.van-calendar__day--end{
          height: 10vw;
          background-color: white;
          color: black;
          .van-calendar__bottom-info{
            display: none;
          }
        }
      }
      .van-calendar__month-title{
        width: 90vw;
        margin: 0 auto;
        text-align: right;
        font-size: 5vw;
      }
    }
  }
  .van-calendar__footer{
  }
} 
.select{
  box-sizing: border-box;
  padding: 6vw 0;
  text-align: center;
  font-size: 4vw;
  border: 1px solid #ccc;
  border-left: none;
  border-right: none;
} 
}
</style>