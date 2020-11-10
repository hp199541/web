const mongoose = require('mongoose')
const Schema = mongoose.Schema
const loveSchema = new Schema({
  video_id:{type:Number},//视频id
  video_url:{type:String},//视频链接
  video_describe:{type:String},//视频描述
  video_title:{type:String},//视频标题
  author:{type:String},//作者
  img_url:{type:String},//封面图片
  flag:{type:Number} //0代表短视频 1代表360天计划 2代表纪录片
})
module.exports = mongoose.model('love',loveSchema)