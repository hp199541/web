var express = require('express');
var router = express.Router();
var sql = require('../sql/index')
var Audio = require('../sql/collections/audio');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//增加音频
router.get('/addaudio', async(req,res,next) => {
  const result = await sql.insert(Audio,{
    audio_id:11,
    audio_title: '前前前世11',
    audio_author: 'RADWIMPS11',
    audio_url: 'http://www.170mv.com/kw/other.web.rj01.sycdn.kuwo.cn/resource/n3/2/63/3890495760.mp3',
    audio_picture: 'https://img.yihaodianimg.com/vip-pro/images/pcQuality/img_jxpzItem5.png'
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
router.get('/audioList', async(req,res,next) => {
    const result = await sql.find(Audio,{},{_id:0})
    if(result.length>0){
      res.send({
        'data':{
          'msg':'获取音频列表成功',
          'video_list':result,
          'status_code':200
        }
      })
    } else {
      res.send({
        'data':{
          'msg':'音频列表为空',
          'status_code':201
        }
      })
    }
})
module.exports = router;
