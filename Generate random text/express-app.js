const express = require('express');
const app = express();

var loremIpsum = require('lorem-ipsum')

app.get('/lorem/:numParagraph', function(req, res){

  var numParagraph = 80; ///TODO: get from the request

  var html = ""

  for(var i = 0; i < numParagraph; i++){
    var output     = loremIpsum();
    html +=   `
            <p>${output}</p>
      `
  }
  res.send(html);
  // res.sendFile( path.join( __dirname, 'lorem.html') );
});
// app.get('/lorem'+numParagraph, function (path, response) {
//
//   response.send(`<html><head></head><body><p>${output}</p><br><p>${output}</p><br><p>${output}</p></body></html>`);
// });


// app.get('/goodbye', function (path, response) {
//   response.send('See you later!');
//   // console.log('See you later!');
// });

app.listen(3000, function () {
  console.log('Successfully started loremIpsum');
});
