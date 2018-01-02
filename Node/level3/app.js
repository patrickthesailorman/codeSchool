// var fs = require('fs');
// var file = fs.createReadStream('fruits.txt');

//   file.on('readable', function(){
//     var chunk = null;
//     while(null !== (chunk = file.read())) {
//       console.log(chunk.toString());
//     }
//   });

// file.pipe(process.stdout);

var fs = require('fs');

var file = fs.createReadStream('origin.txt');
var destFile = fs.createWriteStream('destination.txt');

file.pipe(destFile, {end: false});

file.on('end', function(){
  destFile.end('Finished!');
});
