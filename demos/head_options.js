let request = require('request'),
url = require('url');

// head requests can be as simple as this
request(

    // options
    {
        method: 'head',
        baseUrl: 'https://api.github.com/repos/dustinpfister/',
        uri: '/test_request',
        headers: {
            'User-Agent': 'request'
        }
    },

    // call back
    function (err, req, body) {

    if (err) {

        console.log(err);

    } else {

        console.log(req.headers['content-type']); // application/json; charset=utf-8

    }

});
