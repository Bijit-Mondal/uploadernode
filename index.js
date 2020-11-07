const http = require('http');
const formidable = require('formidable');
var fs = require('fs');
const port = process.env.PORT || 3000

server = http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'https://bijit-mondal.github.io/uploadernode/Uploads/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!. Find Your File At ');
        console.log(newpath);
        res.write(newpath);
        res.end();
      });
 });
  } else {
    fs.readFile('index.html',function(err,data){
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      return res.end();
    });
  }
});
server.listen(port,() =>{
  console.log(`Server running at port `+port);
})
