var restclient = require('node-rest-client');
var Twit = require('twit');
var app = require('express')();

app.get('/', function(req, res){
    res.send('Hello world.');
});
app.listen(process.env.PORT || 3030);

var T = new Twit({
    consumer_key:         '',
    consumer_secret:      '',
    access_token:         '',
    access_token_secret:  '',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })

  //

var getQuoteURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=text&lang=en&key=457653';

//  tweet 'hello world!'
T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
    console.log(data)
  })


