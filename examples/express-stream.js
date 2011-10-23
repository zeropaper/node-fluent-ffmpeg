var express = require('express'),
  ffmpeg = require('../lib/fluent-ffmpeg');

var app = express.createServer();

app.use(express.static(__dirname + '/flowplayer'));

app.get('/', function(req, res) {
  res.send('index.html');
});

app.get('/video/:filename', function(req, res) {
  res.contentType('flv');
  console.info('req.params.filename', req.params.filename);
  // make sure you set the correct path to your video file storage
  var pathToMovie = '/home/robert/Sites/kern/content/videos/' + req.params.filename; 
  var proc = new ffmpeg(pathToMovie)
    // use the 'flashvideo' preset (located in /lib/presets/flashvideo.js)
    .usingPreset('flashvideo')
    // save to stream
    .writeToStream(res, function(retcode, error){
      console.error(error);
      console.log('file has been converted succesfully');
    });
});

app.listen(4000);