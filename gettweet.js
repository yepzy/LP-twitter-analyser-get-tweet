var TwitterStream = require('twitter-stream-api'),
    fs = require('fs');

var keys = {
    consumer_key : "JICzlMMuDvjdh5yf74xnIrv39",
    consumer_secret : "O3WmxES0Tl9vplK5NmvdYF7Cvh6y6d633pRWfT5mM9KCyvc96a",
    token : "619461847-LXLrvM1H6iOBmUhJzUoRhQVyWdcFuqDr5XIVIwfx",
    token_secret : "t07Db3jmDF2qihhwlncMgIaj9eXMEbHzpt8kr0vdqD0zp"
};

var Twitter = new TwitterStream(keys, false);
Twitter.stream('statuses/filter', {
    track: 'javascript'
});

Twitter.pipe(fs.createWriteStream('tweets.json'));