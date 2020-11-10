<template>
  <div class="link">
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="textarea">
    </el-input>
    <div class="methods">
      <div class="methods-left">
        <span @click="submit">发送</span>
      </div>
      <div class="methods-right">
        <span>联系方式</span>
        <el-input v-model="input"></el-input>
      </div>
    </div>
    <div class="linkabout">
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Toast  } from 'vant';
Vue.use(Toast);
import Footer from '@/components/footer/footer.vue'
import {submitmessage} from '@/api/index.js'
export default {
  components:{
    Footer
  },
  data() {
    return {
      textarea: '',
      input: ''
    }
  },
  methods:{
  async submit(){
      console.log(this.textarea,this.input)
    const res = await submitmessage({content:this.textarea,tel:this.input})
    console.log(res)
    if(res.data.status_code == 200){
      Toast.success(res.data.msg)
    }
    }
  }
}
</script>
<style lang="scss">
.link{
  min-height: 80vw;
  width: 90vw;
  margin:5vw auto;
  .el-textarea{
  min-height: 80vw;
    .el-textarea__inner{
      min-height: 80vw !important;
      display: inline-block;
    }
  }
  .linkabout{
    text-align: right;
    font-weight: bolder;
    .footer{
      .item0{
        color:#ec5f3a ;
      }
      span{
        display: inline-block;
        margin-bottom: 5vw;
        border-bottom: 1px solid #ccc;
      }
    }
  }
  .methods{
    margin-top: 5vw;
    margin-bottom: 20vw;
    display: flex;
    justify-content: space-between;
    .methods-left{
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      font-size: 5vw;
    }
    .methods-right{
      flex: 7;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      font-size: 5vw;    
      .el-input{
        input{
          border: none;
          border-bottom: 1px solid #ccc;
        }
      }  
    }
  }
}
@media screen and (min-width: 768px) {
  .link{
      // max-height: 10vw;
      min-height: inherit;
    .el-textarea{
      margin-left: 20vw;
      width: 50vw;
      min-height: inherit;
      .el-textarea__inner{
      min-height: 20vw !important; 
      }
    }
    .methods{
      width: 50vw;
      margin: 2vw auto;
      margin-bottom: 0;
      justify-content: flex-end;
      .methods-left{
        flex: inherit;
        width: 10vw;
        span{
          font-size: 1.5vw;
        }
      }
      .methods-right{
        flex: inherit;
        width: 20vw;
        span{
          font-size: 1.5vw;
        }
        .el-input{
          .el-input__inner{
            font-size: 1vw;
          }
        }
      }
    }
    .linkabout{
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