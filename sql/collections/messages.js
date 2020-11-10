const mongoose = require('mongoose')
const Schema = mongoose.Schema
const msgSchema = new Schema({
  msg_id:{type:Number},
  msg_content:{type:String},
  link_number:{type:String}
})
module.exports = mongoose.model('message',msgSchema)