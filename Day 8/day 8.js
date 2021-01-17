var http = require('http');
var fs = require('fs');
 
//2.
var productPage = fs.readFileSync('./home.html');
 
//3.
var server = http.createServer(function (req, resp) {
    //4.
    if (req.method === "GET") {
        resp.writeHead(200, { 'content-type': 'text/html' });
        resp.write(JSON.stringify(productData));
        resp.end(productPage);
    }
    //5.
    else if (req.method === "POST") {
        var productData = '';
        req.on('data', function (prd) {
            productData += prd;
        }).on('end', function () {
            console.log('The received data is ' + productData.toString());
            resp.end('Data received  from you is ' + productData.toString());
        });          
    }
});
server.listen(5050);
console.log('Server started on  5050');