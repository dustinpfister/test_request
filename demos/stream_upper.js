let request = require('request'),
stream = require('stream');

request('https://raw.githubusercontent.com/request/request/master/README.md')

.pipe(new stream.Transform({

        transform: function (chunk, en, cb) {

            this.push(chunk.toString().toUpperCase());

            cb();

        }

    }))

.pipe(process.stdout)

.on('error', function (err) {

    console.log(err);

});
