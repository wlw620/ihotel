const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();

//设置视图引擎
app.set("view engine", 'jade');
//设置视图引擎
app.set('views', path.join(__dirname, '../'));

app.use('/static', express.static('dist'));

//利用模板文件home.ejs渲染为html
app.get("*", function(req, res) {
    res.render('app');
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
