var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function (req, res) {
    res.render('first-template');
});

app.get('/sign_up', function (req, res) {
    res.render('sign_up');
});

app.get('/profile', function (req, res) {

    res.render('profile', {
        user:
            { name: "Johnny", password: "1234" }
    });
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});