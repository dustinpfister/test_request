let request = require('request'),
crypto = require('crypto'),
stream = require('stream'),
fs = require('fs');

request('https://google.com')

.pipe(crypto.createCipher('aes-256-cbc', process.argv[2] || '1234'))

.pipe(fs.createWriteStream('google.encrypted'))

.on('error', function (err) {

    console.log(err);

});
