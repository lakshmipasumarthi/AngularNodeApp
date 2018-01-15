const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config=require('./config/databse')
const path=require('path')

mongoose.connect(config.uri, (err)=>{
    if(err){
        console.log('could not connect to db:', err);
    }
    else{
        console.log('Connected to Database:'+config.db);
    }
});
mongoose.Promise = global.Promise;
app.use(express.static(__dirname+'/client/dist/'));
app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname+'/client/dist/index.html'))
  });
  
  app.listen(8080,()=>{
      console.log('Listening on Port 8080');
  });
