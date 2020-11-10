<template>
  <div class="Calendar">
    <div class="date">
      <span class="month">{{this.month}}</span>
      <span class="line">/</span>
      <span class="year">{{this.year}}</span>
    </div>
    <el-calendar  v-model="value" @click.native='calendarOnClick' :range="['2019-03-04', '2019-03-24']">
    </el-calendar>
  </div>
</template>
<script>
/* eslint-disable */
import {AddZero} from '@/utils/config.js'
  export default {
    data() {
      return {
        value: new Date(),
        year:'',
        month:''
      }
    },
    methods:{
      calendarOnClick(){
        var timestamp = new Date(this.value).getTime()
        this.month = AddZero(new Date(timestamp).getMonth())
        this.year = new Date(timestamp).getFullYear()
      }
    },
    mounted () {
      this.year = new Date(this.value).getFullYear()
      this.month = AddZero(new Date(this.value).getDate())
    }
  }
</script>
<style lang='scss' src='@/css/index.scss'></style>
<style lang="scss">
  .Calendar {
    margin-bottom: 5vw;
    .date{
      height: 10vw;
      margin-top: 8vw;
      text-align: right;
      padding:0 5vw;
      .month{
        font-size: 8vw;
        font-weight: bolder;
      }
      .line{
        margin-left: 5px;
        font-size: 8vw;
      }
    }
    .el-calendar {
      width: 90vw;
      margin: 0 auto;
      // border: 1px solid #ccc;
      // border-radius: 10px;
      .el-calendar__header {
        display: none;
        .el-calendar__title {
          font-size: 0.8vw;
        }
        .el-calendar__button-group {
          .el-button-group {
            .el-button {
              // width: 4vw;
              padding: 3px 8px;
            }
          }
        }
      }
      .el-calendar__body {
        padding: 0;
        .el-calendar-table {
          thead {
            th {
              font-size: 0.5vw;
            }
          }
          tbody {
            .el-calendar-table__row {
              td.current.is-selected.is-today {
                color: white;
                .el-calendar-day {
                  color: #ff3535;
                  margin: 0 auto;
                  height: 10vw;
                  width: 10vw;
                  border-radius: 50%;
                  font-weight: bolder;
                  transform: scale(1.5);
                }
                .el-calendar-day::after{
                  content: '_';
                  position: absolute;
                }
              }
              td {
                border: none;
                .el-calendar-day {
                  height: 10vw;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  span {
                    font-size: 0.8vw;
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