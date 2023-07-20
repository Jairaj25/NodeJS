const ffmpeg = require('fluent-ffmpeg');
const stream = require('stream');
const fs = require('fs');
const path = require('path');
function transcodeVideo(inputPath, outputPath, outputFormat, callback) {
  try {
    const inputStream = fs.createReadStream(inputPath);
    const outputStream = fs.createWriteStream(outputPath);
    const ffmpegCommand = ffmpeg(inputStream)
      .format(outputFormat)
    const ffstream = ffmpegCommand.pipe();
    ffstream.pipe(outputStream, { end: true });
    ffstream.on('end', () => {
      console.log('Video transcoded successfully.');
    });
  } catch (err) {
    console.log(`Error transcoding video`);
  }
}
const inputFilePath = path.join(__dirname,'sample.mp4');
const outputFilePath = path.join(__dirname,'output.webm');
const outputFormat = 'webm';
transcodeVideo(inputFilePath, outputFilePath, outputFormat, (err, message) => {
  if (err) {
    console.error(err);
  }
});