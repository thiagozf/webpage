var fs = require('fs'),
    html5Lint = require('html5-lint');

fs.readFile('public/index.html', 'utf8', function(err, html) {
  if (err) throw err;

  html5Lint(html, function(err, results) {
    results.messages.forEach(function(msg) {
      var type = msg.type, // error or warning
          message = msg.message,
          line = msg.lastLine;

      console.log("[%s] Line %d: %s", type, line, message);
    });
  });
});
