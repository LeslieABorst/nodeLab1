const http = require("http");
const quote = require('./quotes');

const onRequest = (request, response) => {
    response.writeHead(200, {"Content-type": "text/plain" });
    response.write(`${quote.random()}`);
    response.end();
};



http.createServer(onRequest).listen(3000);

