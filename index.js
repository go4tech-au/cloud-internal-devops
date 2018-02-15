const cool = require('cool-ascii-faces');
const PORT = process.env.PORT || 5000;
const http = require('http');
const url = require('url');
const fs = require('fs');
const server = http.createServer(function(request, response) {
const path = url.parse(request.url).pathname;
    switch (path) {
        case '/':
            response.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            response.write("This is Test Message.");
            response.end();
            break;
        case '/images/Prismatic-Thumbs-Up-Social-Media-Word-Cloud.svg':
            fs.readFile(__dirname + path, function(error, data) {
            console.log(__dirname + path);
            console.log("Imagen");
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'image/svg+xml'
                    });
                    response.write(data);
                    response.end();
                }
            });
            break;
        case '/images/DevOpsCarsalesLogo.png':
            fs.readFile(__dirname + path, function(error, data) {
            console.log(__dirname + path);
            console.log("Imagen");
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'image/png'
                    });
                    response.write(data);
                    response.end();
                }
            });
            break;
        case '/images/cloud_logo.png':
            fs.readFile(__dirname + path, function(error, data) {
            console.log(__dirname + path);
            console.log("Logo Imagen");
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'image/png'
                    });
                    response.write(data);
                    response.end();
                }
            });
            break;
        case '/index.html':
            fs.readFile(__dirname + path, function(error, data) {
            console.log(__dirname + path);
            console.log("hola");
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    response.write(data);
                    response.end();
                }
            });
            break;
        case '/about.html':
            fs.readFile(__dirname + path, function(error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    response.write(data);
                    response.end();
                }
            });
            break;
        default:
            response.writeHead(404);
            response.write("opps this doesn't exist - 404");
            response.end();
            break;
    }
});
server.listen(PORT)
