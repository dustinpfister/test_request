// using request of course
let request = require('request'),

// as well as pngjs
png = require('pngjs').PNG;

// using the node.js built in stream, and fs modules
stream = require('stream'),
fs = require('fs'),

// an output file to write to
txFile = fs.createWriteStream('ascii.txt');

// request my stack overflow icon
request('https://i.stack.imgur.com/R3O9s.png?s=64&g=1')

// pipe the response to pngjs
.pipe(new png({
        filterType: 4
    }))

// when the png is parsed into workable data
.on('parsed', function () {

    // the this keyword refers to an object
    // that contains data on the png file
    let img = this,

    // the char palette
    palette = ' ,.,:,;,!,i,1,*,3,&'.split(','),

    // row will be used to build a row of chars
    row;

    // for all values of y in the image
    for (let y = 0; y < this.height; y++) {

        // start off with a new row
        row = '';

        // far all values of x (in the current row)
        for (let x = 0; x < this.width; x++) {

            // get the current index
            let index = (this.width * y + x) << 2,

            // rgb channel values (in 0-1 form)
            r = img.data[index] / 255,
            g = img.data[index + 1] / 255,
            b = img.data[index + 2] / 255,

            // alpha channel (in 0-1 form)
            a = img.data[index + 3] / 255,

            // value between black and white
            val = (r + g + b) / 3;

            // make it so alpha just reduces value
            val = val * a;

            // select char based on value
            row += palette[Math.floor(val * (palette.length - 1))];

        }

        // log the current row, and write the row to the txt file
        console.log(row);
        txFile.write(row + '\n');

    }

    console.log('image size: ', img.width, img.height);
    txFile.end();

})

// if an error happens log it
.on('error', function (err) {

    console.log(err);

});
