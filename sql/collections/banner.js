const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bannerSchema = new Schema ({
  bannerid:{type:Number},
  imgUrl:{type:String}
})
module.exports = mongoose.model('banner',bannerSchema)