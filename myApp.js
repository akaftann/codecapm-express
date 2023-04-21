let express = require('express');
let app = express();
app.use(express.static('public'))
app.get('/',function(req,res){
    const absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
});




































 module.exports = app;
