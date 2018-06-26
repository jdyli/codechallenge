var app = require('express')();
var Restclient = require('node-rest-client').Client;
var Twit = require('twit');

app.get('/', function(req, res){
    res.send('Hello world.');
});
app.listen(process.env.PORT || 3030);

var restclient = new Restclient();

var T = new Twit({
    consumer_key:         '',
    consumer_secret:      '',
    access_token:         '',
    access_token_secret:  '',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })


var getQuoteURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=text&lang=en&key=457653';  

function postQuote() {
    restclient.get(
        getQuoteURL,
        function(data, response) {
          
          var dataConversion = data.toString('utf8');
          T.post('statuses/update', { status: dataConversion}, function(err, data, response) {
            try {
                console.log(data);
            }
            catch {
                console.log(data);
            }
          });
        });
}

//Send a tweet every 1 minute
setInterval(function() {
    try {
      postQuote();
    }
   catch (e) {
      console.log(e);
    }
  },60000);

