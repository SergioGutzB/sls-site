const express = require('express');

const app = new express();
const bodyParser = require('body-parser');


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', 'dist/views');

app.use('/', express.static('dist', {index: false}));

app.get('/', (req,res) => {
   let basePath = 'http://' + req.headers['host'] + "/";
   if(req.headers['host'] && req.headers['host'].indexOf(".amazonaws.com") > -1)
       basePath = 'https://' + req.headers['host'] + '/production/';

   res.render('index', { basePath: basePath });
});

module.exports = app;
