const http = require('http');

// TODO: Create an HTTP server

// TODO: Listen on port 3000

// DO NOT EDIT BELOW THIS LINE (Uncomment it once you are done with your code)

const fs = require('fs');
  const server = http.createServer((req, res) => {
   fs.readFile('output.txt','utf8',(err,data)=>{
    res.writeHead(200,{'content-Type':'text/plain'});
    res.end(data)
   });
  });

  server.listen(5050, () => {
  console.log('Server running at http://localhost:5050/');
});

