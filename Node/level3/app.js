// var fs = require('fs');
// var file = fs.createReadStream('fruits.txt');

//   file.on('readable', function(){
//     var chunk = null;
//     while(null !== (chunk = file.read())) {
//       console.log(chunk.toString());
//     }
//   });

// file.pipe(process.stdout);

// var fs = require('fs');

// var file = fs.createReadStream('origin.txt');
// var destFile = fs.createWriteStream('destination.txt');

// file.pipe(destFile, {end: false});

// file.on('end', function(){
//   destFile.end('Finished!');
// });
var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('index.html');
  file.pipe(response);
}).listen(8080);
