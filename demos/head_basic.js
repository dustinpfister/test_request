let request = require('request');

// head requests can be as simple as this
request.head('http://www.google.com', function (err, req, body) {

    console.log('yeah');
    console.log(err);

    if (err) {

        console.log(err);

    } else {

        console.log(req.headers['content-type']); // text/html; charset=ISO-8859-1

    }

});
