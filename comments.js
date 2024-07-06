// Create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;

// Create server
http.createServer(function (req, res) {
  const q = url.parse(req.url, true);
  let filename = "." + q.pathname;
  if (filename === "./") {
    filename = "./index.html";
  }
  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}).listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
// Add comments