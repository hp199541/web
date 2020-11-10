<template>
  <div class="resetpass">
    <div class="tel">
      <div class="tel-des">手机号</div>
      <el-input v-model="tel" @blur='valudatetel'></el-input><span class="code" @click="getCore" v-if="showCore">发送验证码</span><span class="code" v-if="!showCore">{{time}}</span>
      <div class="teltip" v-show="teltip">请输入正确的手机号码</div>
    </div>
    <div class="code">
      <div class="code-des">验证码</div>
      <el-input v-model="code" @blur='valudatecode'></el-input>
      <div class="codetip" v-show="codetip">请输入正确的验证码</div>
    </div>
    <div class="pass">
      <div class="pass-des">密码</div>
      <el-input v-model="pass" @blur='valudatepass'></el-input>
      <div class="passtip" v-show="passtip">请输入正确的密码格式</div>    
    </div>
    <div class="checkpass">
      <div class="checkpass-des">重复密码</div>
      <el-input v-model="checkpass" @blur='valudatecheckpass'></el-input>
      <div class="checkpasstip" v-show="checkpasstip">请输入相同的密码</div>    
    </div>
    <div class="submit">
      <p @click="reset">重置密码</p>
      <p>Reset Password</p>
    </div>
    <div class="methods">
      <span @click="tologin">登录</span>
      <span>Sign in</span>
      <span>/</span>
      <span @click="register">注册</span>
      <span>Register</span>
    </div>
  </div>
</template>
<script>
import {getCore} from '@/api'
import {valudatetel,valudatepass} from '@/utils/valudate';
import {Debounce} from '@/utils/config.js'
export default {
  data() {
    return {
      time:60,
      tel: '',
      pass:'',
      code:'',
      checkpass:'',
      teltip:false,
      passtip:false,
      checkpasstip:false,
      codetip:false,
      showCore:true
    }
  },
  methods:{
    tologin(){
      this.$router.push('/login')
    },
    register(){
      this.$router.push('/register')
    },
    valudatetel () {
      if(valudatetel(this.tel)){
        this.teltip = false
      } else {
        this.teltip = true
      }
    },
    valudatepass() {
      if(valudatepass(this.pass)){
        this.passtip = false
      } else {
        this.passtip = true
      }
    },
    valudatecheckpass() {
      if(this.checkpass !== this.pass){
        this.checkpasstip = true
      } else {
        this.checkpasstip = false
      }
    },
    valudatecode(){
      console.log(this.code)
    },
    getCore () {
      this.showCore = !this.showCore
      var timer =  setInterval(() => {
          if(this.time > 1){
            this.time-=1
          } else {
            clearTimeout(timer)
            this.time = 60
            this.showCore = !this.showCore
          }
        },1000)
    },
//运用防抖技术，防止重复提交表单
    reset:Debounce(function(){
      if(!this.teltip && !this.passtip &&!this.checkpasstip && this.tel !== '' && this.pass !== '' && this.checkpass !=='') {
          console.log(111)
        } else {
          console.log(2222)
        }
    },1000)
  }
}
</script>
<style lang="scss">
.resetpass{
  height: 70vh;
  margin-top: 15vh;
  .tel{
    width: 70vw;
    margin: 0 auto;
    margin-bottom: 10vw;
    height: 16vw;
    .code{
      display: inline-block;
      font-size: 4vw;
      width: 25vw;
      text-align: center;
    }
    .teltip{
      color: red;
      font-size: 12px;
    }
    .tel-des{
      font-family: Arial;
    }
    .tel-des::after{
      content: 'Cell-phone number';
      color: rgba(0,0,0,0.5);
      font-size: 12px;
      margin-left: 10px;
    }
    .el-input{
      width:60%;
      .el-input__inner{
        border: none;
        border-bottom: 1px solid #ccc;
      }
    }
  }
  .code{
    width: 70vw;
    margin: 0 auto;
    margin-bottom: 10vw;
    height: 16vw;
    .codetip{
      color: red;
      font-size: 12px;
    }
    .code-des{
      font-family: Arial;
    }
    .code-des::after{
      content: 'Verification Code';
      color: rgba(0,0,0,0.5);
      font-size: 12px;
      margin-left: 10px;
    }
    .el-input{
      width:100%;
      .el-input__inner{
        border: none;
        border-bottom: 1px solid #ccc;
      }
    }
  }
  .pass{
    width: 70vw;
    margin: 0 auto;
    margin-bottom: 10vw;
    height: 16vw;
    .passtip{
      color: red;
      font-size: 12px;
    }  
    .pass-des{
      font-family: Arial;
    }
    .pass-des::after{
      content: 'Password';
      color: rgba(0,0,0,0.5);
      font-size: 12px;
      margin-left: 10px;
    }
    .el-input{
      .el-input__inner{
        border: none;
        border-bottom: 1px solid #ccc;
      }
    }  
  }
  .checkpass{
    width: 70vw;
    margin: 0 auto;
    margin-bottom: 10vw;
    height: 16vw;
    .checkpasstip{
      color: red;
      font-size: 12px;
    }  
    .checkpass-des{
      font-family: Arial;
    }
    .checkpass-des::after{
      content: 'Repeat Password';
      color: rgba(0,0,0,0.5);
      font-size: 12px;
      margin-left: 10px;
    }
    .el-input{
      .el-input__inner{
        border: none;
        border-bottom: 1px solid #ccc;
      }
    }  
  }
  .submit{
    p{
      text-align: center;
      &:nth-child(1){
        color: black;
        font-family: Arial;
        font-size: 5vw;       
      }
      &:nth-child(2){
        color: rgba(0,0,0,0.5);
        font-size: 12px;
        font-family: Arial;       
      }      
    }
  }
  .methods{
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 40vw;
    span{
      text-align: center;
      &:nth-child(1){
        color: black;
        font-family: Arial;
      }
      &:nth-child(2){
        color: rgba(0,0,0,0.5);
        font-family: Arial;
        font-size: 12px;
      }
      &:nth-child(3){
        color: black;
        font-family: Arial;
      }
      &:nth-child(4){
        color: black;
        font-family: Arial;
      }
      &:nth-child(5){
        color: rgba(0,0,0,0.5);
        font-family: Arial;
        font-size: 12px;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .resetpass{
    padding-top: 20vw;
    width: 25vw;
    height: 30vw;
    margin: 0 auto;
    .tel{
      width: 100%;
      margin: 0;
      height: 6vw;
      .tel-des{
        font-size: 1.5vw;
      }
      .el-input{
        width: 50%;
      }
      .code{
        width: 45%;
        font-size: 1vw;
      }
    }
    .code{
      width: 100%;
      margin: 0;
      height: 6vw;
      .code-des{
        font-size: 1.5vw;
      }
    } 
    .pass{
      width: 100%;
      margin: 0;
      height: 6vw;
      .pass-des{
        font-size: 1.5vw;
      }
    } 
    .checkpass{
      width: 100%;
      margin: 0;
      height: 6vw;
      .checkpass-des{
        font-size: 1.5vw;
      }
    } 
    .submit{
      p:nth-child(1){
        font-size: 1.5vw;        
      }
    }
    .methods{
      width: 20vw;
      position: absolute;
      right: 5vw;
      bottom: 5vw;
      span{
        &:nth-child(1),&:nth-child(4){
          font-size: 1.5vw;  
        }
      }
    }     
  }
}
</style>
<style src='@/css/index.scss' lang='scss'></style>