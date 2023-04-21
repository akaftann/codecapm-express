let express = require('express');
let app = express();
let dotenv = require('dotenv').config();
app.use("/public",express.static(__dirname + "/public"))
app.get('/',function(req,res){
    const absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
});
app.get('/json',(req,res)=>{
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({"message":"HELLO JSON"})
    }else{
        res.json({"message":"Hello json"})
    }
})




































 module.exports = app;
