let request = require('request');

request('https://google.com')

.on('data', function (chunk) {

    console.log(chunk.toString());

});
