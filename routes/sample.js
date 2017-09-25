var express = require('express');
var router = express.Router();

//sample管理ページ 
router.get('/', function(req, res, next) {
  res.render('sample_common', { title: 'CSS練習用のTOPページ' });
});

router.get('/2', function(req, res, next) {
  //var path = 'sample_2/' + req.params.pageTitle;
  //console.log(path);
  //res.render('sample_2/'+ req.params.pageTitle , { title: 'sample'},function(err,html){
  res.render('sample_2' , { title: 'sample'},function(err,html){
    if(!err){
      res.send(html)
    }else{
      res.render('sample_common/error', {title:'みつからん'});
    }
  });
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


module.exports = router;
