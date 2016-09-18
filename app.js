const express = require('express');
const consolidate = require('consolidate');


var app = express();

app.listen(8080);

//配置模板
app.set('views','views');
app.set('view engine','html');
app.engine('html',consolidate.ejs);

app.use('/',require('./router/index'));





