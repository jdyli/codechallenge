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


var getQuoteURL = '';  
var getStockURL = '';

function postQuote() {
    restclient.get(
        getQuoteURL,
        function(data, response) {
          
          var dataConversion = data.toString('utf8');
          T.post('statuses/update', {status: dataConversion}, function(err, data, response) {
            try {
                console.log(data);
            }
            catch {
                console.log(data);
            }
          });
        });
}

function postStock() {
  restclient.get(
    getStockURL,
    function(data, response) {
  
      var stockArray = data.dataset_data.data
      var stockArrayToday = stockArray[0];
      console.log("The stockprice of today is $", stockArrayToday[1]);
      var dataTweet = "The stockprice of today is " + stockArrayToday[1].toString();
      T.post('statuses/update', {status: dataTweet}, function(err, data, response) {
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

postStock();