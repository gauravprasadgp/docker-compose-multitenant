var express = require('express');
var app = express();
var ip = require('ip');
var port = 8001;
app.get('/*', function(req, res){
   res.send("Hello Authentication API!");
});
app.listen(port, ()=>{
    console.log('Node running on'+ ip.address(), "port: ", port)
});