let http = require('http');

let request = (url, cb) => {

    if (!url) {
        return
    };

    cb = cb || function () {};

    // the body of the request
    let body = Buffer.alloc(0);

    let req = http.request(

            // options
        {
            host: url,
            method: 'GET',
            path: '/'

        },

            // callback
            (res) => {

            res.on('data', function (chunk) {

                // concat the current chunk, with body to
                // build the body
                body = Buffer.concat([body, chunk]);

            });

            res.on('end', function () {

                // we should have the finished body
                // call the callback passing the
                // values for, err,req,and body
                // parsing body to a string
                cb(null, req, body.toString());

            });

        });

    req.on('error', (err) => {
        cb(err, req, body);
    })

    req.end();

};

// get requests can be as simple as this
request('www.google.com', function (err, res, body) {

    if (err) {

        // if error, log it
        console.log(err);

    } else {

        // log body
        console.log(body);

    }

});
