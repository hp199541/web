<template>
  <div class="login">
    <div class="tel">
      <div class="tel-des">手机号</div>
      <el-input v-model="tel" @blur='valudatetel'></el-input>
      <div class="teltip" v-show="teltip">请输入正确的手机号码</div>
    </div>
    <div class="pass">
      <div class="pass-des">密码</div>
      <el-input v-model="pass" show-password @blur='valudatepass'></el-input>
      <div class="passtip" v-show="passtip">请输入正确的密码格式</div>    
    </div>
    <div class="submit">
      <p @click="login">登录</p>
      <p>Sign in</p>
    </div>
    <div class="methods">
      <span @click="register">注册</span>
      <span>Register</span>
      <span>/</span>
      <span @click="getpass">找回密码</span>
      <span>Forget password</span>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Toast  } from 'vant';
Vue.use(Toast);
import {login} from '@/api'
import {setToken} from '@/utils/token.js'
import {valudatetel,valudatepass} from '@/utils/valudate';
import {Debounce} from '@/utils/config.js'
export default {
  data() {
    return {
      tel: '13155271667',
      pass:'123456',
      teltip:false,
      passtip:false
    }
  },
  methods:{
    getpass(){
      this.$router.push('/resetpass')
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
//运用防抖技术，防止重复提交表单
    login:Debounce(function(){
      if(!this.teltip && !this.passtip && this.tel !== '' && this.pass !== '') {
        this.$store.dispatch('user/login',
          {username:this.tel,password:this.pass}
        ).then(res => {
          console.log(res)
        })
        } else {
          console.log(2222)
        }
    },1000)
  }
}
</script>
<style lang="scss">
.login{
  height: 70vh;
  margin-top: 15vh;
  .tel{
    width: 70vw;
    margin: 0 auto;
    margin-bottom: 10vw;
    height: 16vw;
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
  .login{
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
    }
    .pass{
      width: 100%;
      margin: 0;
      height: 6vw;
      .pass-des{
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