var restclient = require('node-rest-client');
var Twit = require('twit');
var app = require('express')();

app.get('/', function(req, res){
    res.send('Hello world.');
});
app.listen(process.env.PORT || 3030);

var T = new Twit({
    consumer_key:         'ARqyBZjyUxpLFRg2IvbEeYTdS',
    consumer_secret:      '6MpXkyemh7sAc3ENqi7bxOrIRTNo8KyD0OCuJJqMtcPtjUOrt2',
    access_token:         '580185248-b1DMwS2pLRyHhnt75DLYrXtKBmHBW1XSul59wfSn',
    access_token_secret:  '5hgb7ktTph90LIvXhDosbSQLtozBJX7ynV61c0jrr5Mey',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })

  //
//  tweet 'hello world!'

T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
    console.log(data)
  })


