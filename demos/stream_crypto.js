let request = require('request'),
crypto = require('crypto'),
stream = require('stream'),
fs = require('fs');

request('https://google.com')

.pipe(crypto.createCipher('aes-256-cbc', 'do-not-tell'))

.pipe(fs.createWriteStream('google.encrypted'))

.on('error', function (err) {

    console.log(err);

});
