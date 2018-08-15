let request = require('request'),
stream = require('stream');

request('https://google.com')

.pipe(new stream.Transform({

        transform: function (a, en, cb) {

            this.push(a.toString());

            cb();

        }

    }))

.pipe(process.stdout)

.on('error', function (err) {

    console.log(err);

});
