let request = require('request'),
stream = require('stream');

// requesting "War, and peace" (it's over 500,000 words)
//request('https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8')

request('https://livestream.com/710espn/live.m3u8')

.pipe(new stream.Transform({

        objectMode: true,
        transform: function (a, en, cb) {

            // log each chunk as it comes in
            console.log(a.toString());

            cb();

        }

    }))

.on('error', function (err) {

    console.log(err);

});

