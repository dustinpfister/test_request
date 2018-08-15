let request = require('request');

// get requests can be as simple as this
request('http://www.google.com', function (err, res, body) {

    if (err) {

        // if error, log it
        console.log(err);

    } else {

        // if I have a body, match anchor tags
        let anchors = body.match(/<a[^>]*>[^<]*<\/a>/gi);

        if (anchors) {

            anchors .forEach(function (a) {

                let href = a.match(/href=\"[\s\S]*\"/);

                if (href) {

                    // log urls
                    console.log(href[0].split('\"')[1]);

                }

            });

        } else {

            console.log('no anchors');

        }

    }

});
