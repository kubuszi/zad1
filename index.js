const express = require('express');

const app = express();
let date_ob = new Date();
let date = ("0" +date_ob.getDate()).slice(-2);
let month = ("0"+(date_ob.getMonth()+1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
app.get("/",(req,res)=>{
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  res.send(`IP to ${ip}`+` czas: ${year}-${month}-${date} ${hours}:${minutes}:${seconds}`);
})

const port = process.env.PORT || 8080;
app.listen(port,()=>{
  console.log(year + "-" + month + "-" +date +" "+ hours +":"+minutes+":"+seconds);
  console.log("Jakub Sawa");
  console.log(`listening on port ${port}`)
})