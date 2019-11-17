const fs = require('fs');

var websites = [
    'www.facebook.com',
    'www.instagram.com',
    'www.coolblue.nl',
    'www.bol.com',
    'www.twitter.com',
    'www.youtube.com'
]

var filename = '/etc/hosts';

function blocker() {
    fs.readFile(filename, (err, data) => {
        if (err) throw err;
        //var lines = data.toString().split('\n');
        for (i = 0; i < websites.length; i++) {
            if (data.indexOf(websites[i]) < 0){
                fs.appendFile(filename, "127.0.0.1 " + websites[i] + "\n", (err) => {
                    if (err) console.log(err);
                    //fs.close(err => {
                    //    if (err) throw err;
                    //});
                    console.log("website >> " + websites[i] + " << added");
                });
            }
        }
    });
};

blocker();
