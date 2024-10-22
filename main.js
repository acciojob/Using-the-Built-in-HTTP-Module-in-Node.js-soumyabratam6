const http = require('http');

// TODO: Create an HTTP server

// TODO: Listen on port 3000

// DO NOT EDIT BELOW THIS LINE (Uncomment it once you are done with your code)

const fs = require('fs');
const path = require('path');
const filePath = process.argv[2];

if (!filePath) {
    console.error('Please provide a file path as a command-line argument.');
    process.exit(1);  
  }

  const server = http.createServer((req, res) => {
    fs.readFile(path.resolve(filePath), 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end(`Error reading file: ${err.message}`);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });
  });

  server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
  });

