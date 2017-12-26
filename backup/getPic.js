var page = require('webpage').create();
       t = Date.now(); 
//page.open('http://github.com/', function() {
page.open('http://www.163.com/', function() {
//page.open('http://www.baidu.com/', function() {

  page.render('github.png');
         t = Date.now() - t; 
		 console.log('Loading time ' + t + ' msec');//cost 8 seconds
		 
  phantom.exit();
});