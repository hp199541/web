const mongoose = require('mongoose');
const Schema = mongoose.Schema
const audioSchema = new Schema({
  audio_id:{type:Number},
  audio_title:{type:String},
  audio_author:{type:String},
  audio_url:{type:String},
  audio_picture:{type:String}
})
module.exports = mongoose.model('audio',audioSchema)