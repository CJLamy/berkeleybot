// Command that will pull from swearmipsum to send a friendly curse to folks.
module.exports = function(robot) {
  robot.hear(/I curse thee/i, function(msg) {
    var request = require('request');
    var website = 'http://ship-of-fools.com/curse/';
    request.get({ url: website }, function (error, response, html) {
      // If the request fails, lets the user know.
      if (error) {
        msg.send('Attempt to pull link failed');
      } else {
        //Use Cheerio to pull HTML and scrape it.
        var $ = require('cheerio');
        var parsedHTML = $.load(html);
        var curseText = parsedHTML("#result").children().first().text();
        msg.send(truncate(curseText));
      }
    });
  });
};

//  https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=QUERY_HERE

module.exports = function(robot) {
  robot.hear(/kitty me/i, function(msg) {
    var Firebase = require("firebase");
    var myFirebaseRef = new Firebase("https://rudy-db.firebaseIO.com/");
  });
}

// msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
// request.get({ type: json, url: 'somesite.com' }, function...)