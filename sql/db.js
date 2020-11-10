const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/video_base'
mongoose.connect(DB_URL,{useNewUrlParser: true})
mongoose.connection.on('connected',() => {
  console.log('连接数据库成功')
})
mongoose.connection.on('disconnected',() => {
  console.log('数据库断开')  
})
mongoose.connection.on('error', () => {
  console.log('数据库连接异常')
})
module.exports = mongoose