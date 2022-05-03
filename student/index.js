var express = require('express');
var app = express();
var ip = require('ip');
var port = 8002;
app.get('/*', function(req, res){
   res.send("Hello Student API!");
});
app.listen(port, ()=>{
    console.log('Node running on'+ ip.address(), "port: ", port)
});