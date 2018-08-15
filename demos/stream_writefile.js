let request = require('request'),
stream = require('stream'),
fs = require('fs'),

// requesting a url given from the command line, or my home page
uri = process.argv[2] || 'https://dustinpfister.github.io',

// a tx file to write to
txFile = fs.createWriteStream('file_' + new Date().getTime() + '.txt');

// start the get request
request({

    method: 'get',
    uri: uri

})

// if an error log it
.on('error', function (err) {

    console.log(err);

})

// for each chunk
.on('data', function (chunk) {

    // log to the console
    console.log(chunk.toString());

    // and write it to the file
    txFile.write(chunk);

})

// when done
.on('end', function () {

    // let me know, and end
    console.log('file done');
    txFile.end();

})
