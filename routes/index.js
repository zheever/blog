var express = require('express');
var router = express.Router();
var url = require("url");

var fs = require("fs");
var data;
try
  {
  	var contents = fs.readFileSync("public/data/blog_data.json");
  	data = JSON.parse(contents);
  	//console.log(data);
  }
catch(err)
  {
 		console.log(err);
  }

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('home');
});

router.get('/home', function(req, res, next) {
  	res.render('home');
});

router.get('/list', function(req, res, next) {
  	 if (req.headers['x-pjax']) {//如果x-pjax为true使用res.renderPjax()返回页面
        res.render('list', data);
    } else {
    	res.render('home');
    } 
});

router.get(/^\/p\/(\w+)$/, function(req, res, next) {
  	var req_url = url.parse(req.originalUrl);
  	var strs = req_url.pathname.split('/');
  	res.render('blogs/' + strs[2] + '.html');
});



module.exports = router;
