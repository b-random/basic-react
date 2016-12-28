var express = require('express');

//create the app
var app = express();

app.use(express.static('public'));

// start server
app.listen(3000, function(){ 
    console.log('Express server is up on port 3000');
});