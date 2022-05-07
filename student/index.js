var express = require('express');
var app = express();
var ip = require('ip');
var port = 8002;
const axios = require('axios');

// app.get('/', function(req, res){
//    res.send("Hello Student API!");
// });

app.get('/*',async (req, res) =>{
   var teacher = await axios.get('http://teacher:8003');
   res.status(200).send("response fetched from TEACHER api ==>"+teacher.data);
 });

app.listen(port, ()=>{
    console.log('Node running on '+ ip.address(), "port: ", port)
});