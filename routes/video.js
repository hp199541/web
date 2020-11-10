var express = require('express');
var router = express.Router();
const sql = require('../sql/index')
const Video = require('../sql/collections/video')
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 增加视频
router.get('/add',async (req,res,next) => {
  const result = await sql.insert(Video,{
    flag:0,
    video_id:11,
    video_url:'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    video_describe:'在CSS3中，所有变形方法都是属于transform属性，因此所有关于变形的方法前面都要加上“tranform:”，以表示“变形”处理。这一点大家一定要记住',
    video_title:'demo5',
    author:'huang5',
    img_url:'https://img.yihaodianimg.com/vip-pro/images/pcQuality/img_jxpzItem1.png',
  })
  if(result == 1){
    res.send({
      'data':{
        'msg':'增加成功',
        'status_code':200
      }
    })
  }
})


//查询所有视频列表
router.get('/list',async (req,res,next) => {
  const result = await sql.find(Video,{},{_id:0})
  if(result.length>0){
    res.send({
      'data':{
        'msg':'增加成功',
        'video_list':result,
        'status_code':200
      }
    })
  } else {
    res.send({
      'data':{
        'msg':'视频列表为空',
        'status_code':201
      }
    })
  }
})

//查询短视频列表
router.get('/shortlist',async (req,res,next) => {
  const result = await sql.find(Video,{},{_id:0})
  // console.log(result)
  var  array1 = result.filter(item => (item.flag == 0))
  console.log(array1)
  var  array2 = result.filter(item => (item.flag === 1))
  var  array3 = result.filter(item => (item.flag === 2))
  if(result.length>0){
    res.send({
      'data':{
        'msg':'增加成功',
        'video_list':[
          {title:'老曹说事1',list:array1,tag:1,imgUrl:'https://img.yihaodianimg.com/vip-pro/images/pcQuality/img_jxpzItem1.png'},
          {title:'老曹说事2',list:array2,tag:2,imgUrl:'https://img.yihaodianimg.com/vip-pro/images/pcQuality/img_jxpzItem1.png'},
          {title:'老曹说事3',list:array3,tag:3,imgUrl:'https://img.yihaodianimg.com/vip-pro/images/pcQuality/img_jxpzItem1.png'}          
        ],
        'status_code':200
      }
    })
  } else {
    res.send({
      'data':{
        'msg':'视频列表为空',
        'status_code':201
      }
    })
  }
})

//查询结果进行分页
router.get('/pagelist',async (req,res,next) => {
  const {pageSize,pageCode} = req.query
  const result = await sql.paging(Video,{},{_id:0},pageSize*1,pageCode*1-1)
  res.send({
    'data':{
      'msg':'获取视频列表成功',
      'video_list':result,
      'status_code':200
    }
  })
})

// 获取老曹视频
router.get('/typeone',async (req,res,next) => {
  const {flag} = req.query
  const result = await sql.find(Video,{flag},{_id:0})
  res.send({
    'data':{
      'msg':'获取视频列表成功',
      'video_list':result,
      'status_code':200
    }
  })
})
//根据获取短视频类型1
router.get('/typeoneById',async (req,res,next) => {
  const id = req.query.id
  const result = await sql.find(Video,{flag:0},{_id:0})
  console.log(result)
  const data = result.filter(item =>(item.video_id == id))
  res.send({
    'data':{
      'msg':'获取视频列表成功',
      'video_list':data,
      'status_code':200
    }
  })
})
//获取短视频类型1
router.get('/typetwo',async (req,res,next) => {
  const result = await sql.find(Video,{flag:1},{_id:0})
  console.log(result)
  res.send({
    'data':{
      'msg':'获取视频列表成功',
      'video_list':result,
      'status_code':200
    }
  })
})
module.exports = router;