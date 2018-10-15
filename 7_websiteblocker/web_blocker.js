const fs = require('fs');

var websites = [
    'wwww.facebook.com',
    'www.instagram.com',
    'www.coolblue.com',
    'www.bol.com',
    'www.twitter.com'
]

function blocker() {
    fs.readFile('/etc/hosts', (err, data) => {
        if (err) throw err;
        var lines = data.toString().split('\n');
        if (lines.indexOf('localhost') < 0){
            console.log('hoi');
        }
    });
};

blocker();
