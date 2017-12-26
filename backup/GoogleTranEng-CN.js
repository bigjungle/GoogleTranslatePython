#!/usr/bin/env phantomjs

var system = require('system');
//var text = encodeURIComponent(system.stdin.read());
var text = 'man,hello there!';
//var url = "https://translate.google.cn/?hl=en#auto/en/" + text;
var url = "https://translate.google.cn/?hl=en#en/zh-CN/" + text;

 t = Date.now(); 
  console.log('starting....');
var page = require('webpage').create();
phantom.outputEncoding="gbk";
page.settings.userAgent = 'Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:13.0) Gecko/20100101 Firefox/13.0';
 
page.onConsoleMessage = function (msg) {
  system.stdout.write(msg); 
};
 
page.open(url, function (status) {
  if (status !== 'success') {
    console.log('Unable to access network');
    return;
  }
  console.log('success');
  t = Date.now() - t; 
  console.log('Loading time ' + t + ' msec'); 
//cost 8 seconds to show title！！！！！？？？？？
//cost 85 seconds to translate!!!!! 
	   
  page.includeJs("https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js", checkChange);

  function checkChange() {
    var done = page.evaluate(function () {
      var result = $('#result_box').text();
      if (result && result.trim() != ""){
        console.log('translate is:');
        console.log(result);
        return true;
      }

      return false;
    });

    if (!done)
      checkChange();
    else
      phantom.exit();
  };
});