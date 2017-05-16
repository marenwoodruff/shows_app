var express = require('express');
var app = express();
var hbs = require('hbs');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send('hello friend');
});

app.get('/shows', function(req, res) {
    var faveShows = ['Newsroom', 'SNL', '30 Rock'];

    res.render('fave-shows', {
        data: faveShows
    });
});

var port = 3000;

app.listen(port, function() {
    console.log('listening on port ' + port);
});
