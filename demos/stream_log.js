let request = require('request');

request('https://raw.githubusercontent.com/request/request/master/README.md')

.pipe(process.stdout);