var express = require('express');
var formidable = require('formidable');
var port = process.env.PORT || 5000;
var app = express();

app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res){
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = __dirname + 'https://bijit-mondal.github.io/uploadernode/Uploads/' + file.name;
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });

    res.sendFile(__dirname + '/ind.html');
    res.write('Uploaded');
    res.end();
});

app.listen(port);
