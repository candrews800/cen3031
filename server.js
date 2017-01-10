var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
    var parsedUrl = url.parse(request.url);

    if (parsedUrl.path === "/listings") {
      response.end(listingData);
    } else {
      response.statusCode = 404;
      response.end("Bad gateway error");
    }
};

server = http.createServer(requestHandler);

fs.readFile('listings.json', 'utf8', function(err, data) {
    listingData = data;

    server.listen(port);
    console.log("Server listening ...")
});