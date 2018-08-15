let request = require('request'),
stream = require('stream'),
fs = require('fs'),

// requesting "War, and peace" (it's over 500,000 words)
uri = 'http://www.textfiles.com/etext/FICTION/war_peace_text',

// a tx file to write to
txFile = fs.createWriteStream('warpeace.txt');

// start out with a head request
// as I would likt to know the file
// size first
request({

    method: 'head',
    uri: uri

})

// if an error log it
.on('error', function (err) {

    console.log(err);

})

// if we have a response for the head request
.on('response', function (res) {

    // get the byte size
    let byteSize = res.headers['content-length'] || -1,
    byteDown = 0,
    per = 0;

    // if we have a byteSize between two bounds
    if (byteSize >= 0 && byteSize <= 10000000) {

        // Then make the actual get request
        // for the body of the file
        request({

            method: 'get',
            uri: uri

        })

        // if an error log it
        .on('error', function (err) {

            console.log(err);

        })

        // for each incoming chunk
        .on('data', function (chunk) {

            byteDown += chunk.length;
            per = byteDown / byteSize * 100;

            console.log('downloading: ' + per.toFixed(2) + '%');

            // write the current chunk
            txFile.write(chunk);

        })

        .on('end', function () {

            console.log('file done');
            console.log(byteDown + ' bytes downloaded');

            txFile.end();

        });

    } else {

        console.log('byteSize: ' + byteSize);
        console.log('byteSize not in bounds, headers:');
        console.log(res.headers);

    }

})
