var express = require('express');
var router = express.Router();
var Love = require('../sql/collections/love')
const Video = require('../sql/collections/video') 
var sql = require('../sql/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({'index':1});
});

//添加收藏
router.get('/add', async (req,res,next) => {
  const {id} = req.query
  const result = await sql.find(Video,{video_id:id},{_id:0})
  try {
    await sql.insert(Love,result[0])
    res.send({
      'data':{
        'msg':'添加收藏成功',
        'status_code':200
      }      
    })
  } catch (error) {
    res.send({
      'data':{
        'msg':'添加收藏失败',
        'status_code':201
      }      
    })    
  }
})
router.get('/lovelist',async (req,res,next) =>{
  const result = await sql.find(Love,{})
  res.send({
    'data':{
      'msg':'获取收藏列表成功',
      'lovelist':result,
      'status_code':200
    }      
  })
})
router.get('/loveArr', async (req,res,next) => {
  let {limitNum,pageCode} = req.query;
  limitNum = limitNum * 1 || 5
  pageCode = pageCode * 1 || 0
  const count = await sql.count(Love)
  const result = await sql.paging(Love,{},{_id:0},limitNum,pageCode)
  res.send({
    'data':{
      'msg':'获取收藏列表成功',
      'lovelist':result,
      'total':count,
      'status_code':200
    }      
  })
})
module.exports = router;
