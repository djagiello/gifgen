var GIFEncoder = require('gifencoder');
var encoder = new GIFEncoder(544, 315);
var pngFileStream = require('png-file-stream');
var fs = require('fs');

pngFileStream('slides/tmp_*')
    .pipe(encoder.createWriteStream({ repeat: -1, delay: 100, quality: 10 }))
    .pipe(fs.createWriteStream('myanimated.gif'));
