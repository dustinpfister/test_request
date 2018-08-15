let request = require('request'),
fs = require('fs');

// start the get request
request(process.argv[2] || 'https://dustinpfister.github.io')

.on('data', function(chunk){
	
	console.log(chunk.toString());
	
})

.pipe(fs.createWriteStream('file_' + new Date().getTime() + '.txt'));
