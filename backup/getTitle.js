// a phantomjs example  
var page = require('webpage').create();  
phantom.outputEncoding="gbk"; 
 t = Date.now(); 
page.open("http://www.cnblogs.com/front-Thinking", function(status) {  
   if ( status === "success" ) {  
      console.log(page.title);   
       t = Date.now() - t; 
       console.log('Loading time ' + t + ' msec'); //cost 8 seconds to show title！！！！！？？？？？//cost 0.6 seconds
   } else {  
      console.log("Page failed to load.");   
   }  
   phantom.exit(0);  
});  