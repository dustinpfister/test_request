let request = require('request'),
fs = require('fs');

// start the get request
request(process.argv[2] || 'https://dustinpfister.github.io')

// log any error
.on('error', function(err){ console.log(err);})

// log chunks
.on('data', function (chunk) {console.log(chunk.toString());})

// pipe to createWriteStream
.pipe(fs.createWriteStream('file_' + new Date().getTime() + '.txt'));
