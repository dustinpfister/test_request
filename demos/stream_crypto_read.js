let request = require('request'),
crypto = require('crypto'),
stream = require('stream'),
fs = require('fs');

fs.createReadStream('google.encrypted')

.pipe(crypto.createDecipher('aes-256-cbc',process.argv[2] || '1234'))

.pipe(new stream.Transform({

        transform: function (a, en, cb) {

            console.log(a.toString());

            cb();

        }

    }))

.on('error', function (err) {

    console.log(err);

});
