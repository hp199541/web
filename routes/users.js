var express = require('express');
var router = express.Router();
var crypto = require('crypto');
const User = require('../sql/collections/user')
const sql = require('../sql/index')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//注册接口
router.post('/register',(req,res,next) => {
  let {username,password} = req.body
  sql.find(User,{username}, { _id: 0 }).then(data => {
    if(data.length === 0) {
      var md5 = crypto.createHash('md5')
      var pass = md5.update(password).digest('base64')
      sql.insert(User,{username,'password':pass}).then(() => {
        res.send({msg:'注册成功'})
      })
    } else {
      res.send({msg:'该用户名已经存在'})
    }
  })
})
//登录接口
router.post('/login',async (req,res,next) => {
  let {username,password} = req.body
  result = await  sql.find(User,{username},{_id:0})
  if(result.length === 0) {
    res.send({
      msg:'该用户暂未注册',
      status_code:201
    })
  } else {
    var md5 = crypto.createHash('md5')
    var pass = md5.update(password).digest('base64')
    console.log(result[0].password)
    if(pass !== result[0].password) {
      res.send({
        msg:'用户密码错误',
        status_code:201
      })
    } else {
      res.send({
        msg:'登陆成功',
        status_code:200
      })
    }
  }
})
//获取验证码服务
router.post('/geuCore', async (req,res,next) => {
  const {tel} = req.body
  function MathRandom () {
    var num = '';
    for(var i=0;i<6;i++){
      num+=Math.floor(Math.random()*10)
    }
    return num
  }
  var code = MathRandom()
  const Core = require('@alicloud/pop-core')
  var client = new Core({
    accessKeyId: 'LTAI4FhyDoEgZNXymGp43igV',
    accessKeySecret: 'FixnZysEBHFKJCsPU9YGvPRhaidiSx',
    endpoint: 'https://dysmsapi.aliyuncs.com',
    apiVersion: '2017-05-25'
  });
  var params = {
    "RegionId": "cn-hangzhou",
    "PhoneNumbers": tel,
    "SignName": "教育",
    "TemplateCode": "SMS_177535651",
    "TemplateParam": `{\"code\":\"${code}\"}`
  };
  var requestOption = {
    method: 'POST'
  };
  client.request('SendSms', params, requestOption).then((result) => {
    console.log(result);
    if(result.Code == 'OK'){
      res.send({
        'data':{
          msg:'获取验证码成功',
          status_code:200
        }
      })
    } else {
      res.send({
        'data':{
          msg:'获取验证码失败',
          status_code:201
        }
      })      
    }
  }, (ex) => {
    console.log(ex);
  })
})
module.exports = router;
