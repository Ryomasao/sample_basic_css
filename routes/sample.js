var express = require('express');
var router = express.Router();

//sample管理ページ 
router.get('/', function(req, res, next) {
  res.render('sample_common', { title: 'CSS練習用のTOPページ' });
});


router.get('/:sample_id', function(req, res, next) {
  var sampleId = req.params.sample_id;
  res.render('sample_' + sampleId, { title: 'sample' + sampleId},function(err,html){
    if(!err){
      res.send(html)
    }else{
      res.render('sample_common/error', {title:'ページがないよ'});
    }
  });
});

//こういう、sample_id配下のルーティングってこんな感じでいいのかな。
router.get('/:sample_id/:name', function(req, res, next) {
  var sampleId = req.params.sample_id;
  var name = req.params.name;
  res.render('sample_' + sampleId + '/' + name, { title: 'sample' + sampleId},function(err,html){
    if(!err){
      res.send(html)
    }else{
      res.render('sample_common/error', {title:'ページがないよ'});
    }
  });
});

module.exports = router;
