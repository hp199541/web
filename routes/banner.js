var express = require('express');
var router = express.Router();
const sql = require('../sql/index')
const Banner = require('../sql/collections/banner')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add', async (req,res,next) => {
  await sql.insert(Banner,{
    bannerid:3,
    imgUrl:'https://img.yihaodianimg.com/vip-pro/images/pcQuality/img_jxpzItem3.svg'
  })
})
router.get('/bannerlist', async (req,res,next) => {
  const result = await sql.find(Banner,{})
  res.send({
    'data':{
      msg:'获取轮播图成功',
      status_code:200,
      banner_list:result
    }
  })
})
module.exports = router;