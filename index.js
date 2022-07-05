const express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));



app.get('/', function(req, res) {
    res.sendFile('index.html', {root : __dirname}, function(err){
      if (err){
        res.send('No File');
      }
    });
});
  
const PORT = process.env.PORT || 9999
app.listen(PORT, function(){
  console.log(`Listening on ${ PORT }`);
});




