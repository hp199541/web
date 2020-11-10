const mongoose = require('../db')
const Schema = mongoose.Schema
const userSchema = new Schema({
  userid:{type:String},//用户id
  username:{type:String},//用户姓名
  password:{type:String}//密码
})
module.exports = mongoose.model('users',userSchema)