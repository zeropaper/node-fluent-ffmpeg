exports.load = function(ffmpeg) {
  ffmpeg
    .toFormat('flv')
    .updateFlvMetadata()
    //.withSize('320x?')
    .withVideoBitrate('512k')
    .withVideoCodec('libx264')
    .withFps(24)
    .withAudioBitrate('96k')
    .withAudioCodec('libfaac')
    .withAudioFrequency(22050)
<<<<<<< HEAD
    .withAudioChannels(2)
    //.addOptions([ '-vpre superfast' ]);
=======
    .withAudioChannels(2);
>>>>>>> 378dfed6cd7446f6308d292901b0b8a537604c84
  return ffmpeg;
};