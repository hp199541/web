const express = require('express')
const router = express.Router() 
const Message = require('../sql/collections/messages') 
var sql = require('../sql/index')
var num = 0
router.post('/add', async (req,res,next) => {
  num++
  const {content,tel} = req.body
  await sql.insert(Message,{'msg_id':num,'msg_content':content,'link_number':tel})
  res.send({
    'data':{
      status_code:200,
      msg:'添加信息成功'
    }
  })
})
module.exports = router