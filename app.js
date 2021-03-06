var express = require('express');
var path = require('path');

var app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/home', function (req, res) {
    res.render('index');
});

app.listen(3000, function () {
    console.log('listening...')
})
