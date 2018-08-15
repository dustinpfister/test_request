let request = require('request'),
stream = require('stream');

// requesting "War, and peace" (it's over 500,000 words)
request('http://www.textfiles.com/etext/FICTION/war_peace_text')

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

