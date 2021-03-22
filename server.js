const express = require('express');

let app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/view.html')
});

app.listen(8080);