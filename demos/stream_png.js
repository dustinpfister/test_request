let request = require('request'),
stream = require('stream'),
png = require('pngjs').PNG;
fs = require('fs');

request('https://i.stack.imgur.com/R3O9s.png?s=64&g=1')

.pipe(new png({
        filterType: 4
    }))

.on('parsed', function () {

    let img = this;
    pallet = ' ,.,.,.,:,~,i,1,3,8'.split(','),
    str = '';

    for (let y = 0; y < this.height; y++) {

        str = '';

        for (let x = 0; x < this.width; x++) {

            let idx = (this.width * y + x) << 2,

            // rgb values
            r = img.data[idx] / 255,
            g = img.data[idx + 1] / 255,
            b = img.data[idx + 2] / 255,
            val = Math.floor((r + g + b) / 3 * 9);

            str += pallet[val];

        }

        console.log(str);

    }

    console.log('image size: ', img.width, img.height);

})

/*
.pipe(new stream.Transform({

objectMode: true,
transform: function (a, en, cb) {

console.log(a.toString());

cb();

}

}))
 */

.on('error', function (err) {

    console.log(err);

})

/*
.on('response', function (res) {

console.log(res)

});
*/
