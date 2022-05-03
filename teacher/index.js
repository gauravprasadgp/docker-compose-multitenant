var express = require('express');
var app = express();
var ip = require('ip');
var port = 8003;
app.get('/*', function(req, res){
   res.send("Hello Teacher API!");
});
app.listen(port, ()=>{
    console.log('Node running on'+ ip.address(), "port: ", port)
});