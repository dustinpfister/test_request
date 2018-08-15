let request = require('request');

// get requests can be as simple as this
request('http://www.google.com', function (err, res, body) {

    if (err) {

        // if error, log it
        console.log(err);

    } else {

       console.log(body);

});
