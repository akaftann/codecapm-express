let express = require('express');
let app = express();
app.use("/public",express.static(__dirname + "/public"))
app.get('/',function(req,res){
    const absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
});




































 module.exports = app;
