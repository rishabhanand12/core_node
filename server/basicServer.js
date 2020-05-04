const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('qs');

// 1. Write script to create a basic http server using createServer method, write 'Welcome to NodeJS' as response and
// listen for request on port 5555.


const PORT = process.env.PORT || 5555;
const server = http.createServer(requestHandler);

function requestHandler(req, res) {
  res.end("Welcome to NodeJS");
}

server.listen(PORT, () => console.log("Server Running on Port " +PORT));


// 2. Write script to create a server, send in response the request headers 
// and add listener on port 6666.

const PORT = process.env.PORT || 6666;
const server = http.createServer(requestHandler);

function requestHandler(req, res) {
  let parsedHeader = JSON.stringify(req.headers)
  res.end(parsedHeader);
}

server.listen(PORT, () => console.log("Server Running on Port " +PORT));

// 3. create a server and console request methods and url by doing request 
// from postman or web browsers.

const PORT = process.env.PORT || 3000;

const server = http.createServer(requestHandler);

function requestHandler(req, res) {
  console.log(req.method);
  console.log(req.url);
  res.end(req.method,req.url);
}

server.listen(PORT, () => console.log("Server Running on Port "+ PORT))

// 4. create a server
  // - set response headers as 'text/html' using res.setHeader property.
  // - write some HTML content in response
  // - listen on port 6000

const PORT = process.env.PORT || 6000;

const server = http.createServer(requestHandler);

function requestHandler(req, res) {
  res.setHeader = ('Content-Type','text/html')
  res.end('<h1>Hello World</h1>')
}

server.listen(PORT, () => console.log("Server Running on Port " +PORT));

// 5. create a server
  // - create a seperate file index.html and write some html content
  // - read the html file content and send it in response in createServer method
  // - don't forget to set header before writing to response

const server = http.createServer(requestHandler);
const PORT = process.env.PORT || 3000

function requestHandler(req, res) {
  fs.readFile('./index.html',(err, data) => {
    res.setHeader = ('content-type', 'text/html')
    if(err) {
      res.end(err)
    } else if(data) {
      res.end(data);
    }
  })
}

server.listen(PORT, () => console.log("SErver Runnung on Port " +PORT));

// 6. create a server
  // - create 3 different file ie. index.html, about.html, contact.html
  // - inside createServer, handle different urls for serving different html file
  // - '/' route for index.html file
  // - "/about" for about.html file
  // - "/contact" for contact.html file

const server = http.createServer(requestHandler);

const PORT = process.env.PORT || 3000

function requestHandler(req, res) {
  var parsedUrl = url.parse(req.url)
  console.log(parsedUrl);
  if(parsedUrl.pathname === "/") {
    fs.readFile('./index.html', (err, data) => {
      if(err) {
        res.end(err);
      } else if(data) {
        res.setHeader = ('content-type', 'text/html')
        res.end(data);
      }
    })
  } else if(parsedUrl.pathname === "/about") {
      fs.readFile('./about.html', (err, data) => {
        if(err) {
          res.end(err);
        } else if(data) {
          res.setHeader = ('content-type', 'text/html')
          res.end(data);
        }
      })  
  } else if(parsedUrl.pathname === "/contact") {
    fs.readFile('./contact.html', (err, data) => {
      if(err) {
        res.end(err);
      } else if(data) {
        res.setHeader = ('content-type', 'text/html')
        res.end(data);
      }
    })  
  } else {
      res.end('Page Not Found');
  }    
}

server.listen(PORT, () => console.log("Server Running on Port " +PORT))

// 7. create an Server(echoServer)
  // handle post request for incoming data from postman using req as eventEmitter
  // send incoming data back in response

const echoServer = http.createServer(requestHandler);
const PORT = process.env.PORT || 3000;

function requestHandler(req, res) {
  var store = "";
  
  req.on('data', (chunk) => {
    store += (chunk);
  })

  req.on('end', () => {
    console.log(store);
    if(req.method === 'POST') {
      res.end(store);
    }  
  })
}

echoServer.listen(PORT, () => console.log("Server Running on Port " +PORT))

// 8. create a server
  // handle json data from postman
  // parse the json data
  // send json data back in response

const server = http.createServer(requestHandler);

const PORT =process.env.PORT || 3000;

function requestHandler(req, res) {
  
  var store = ""

  req.on('data', (chunk) => {
    store += chunk;
  })

  req.on('end', () => {
    if(req.method === 'POST') {
      let parsedData = qs.parse(store);
      res.end(JSON.stringify(parsedData));
    }
  })
}

server.listen(PORT, () => console.log("Server Running on Port "+PORT));


// 9. create a server
  // handle x-www-urlencoded(form data) coming form postman
  // parse form-data using querystring module
  // send data back in response

const server = http.createServer(requestHandler);

const PORT =process.env.PORT || 3000;

function requestHandler(req, res) {
  
  var store = ""

  req.on('data', (chunk) => {
    store += chunk;
  })

  req.on('end', () => {
    if(req.method === 'POST') {
      let parsedData = qs.parse(store);
      res.end(JSON.stringify(parsedData));
    }
  })
}

server.listen(PORT, () => console.log("Server Running on Port "+PORT));

// 10. create a server and add listener on port 7000
  // send get request on 'http://localhost:7000/new?username=altcampus' from postman or browser
  // parse the request url using 'url' core node module
  // extract protocol, path and pathname, query from the request
  // send path in response

const server = http.createServer(requestHandler);

const PORT = process.env.PORT || 7000;

function requestHandler(req, res) {
  if(req.method === 'GET') {
    let parsedURL = url.parse(req.url);
    console.log(parsedURL)
    res.end("Protocol - "+JSON.stringify(parsedURL.protocol)+ "\nPath - "+JSON.stringify(parsedURL.path)+ "\nPathName - "+JSON.stringify(parsedURL.pathname)+ "\nQuery - "+JSON.stringify(parsedURL.query));
  }
}

server.listen(PORT, () => console.log("Server Running on Port "+PORT));

// 11. Write script to create an absolute and relative path of 'theory.md' from the current file.
  // use path module from core node

// Absolute Path
const path = require('path');
var indexPath = path.join(__dirname, 'theory.md')

// Relative Path
var app = require('./theory.md')