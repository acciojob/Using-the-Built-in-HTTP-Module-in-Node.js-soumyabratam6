const http = require('http');
// TODO: Listen on port 3000

const fs = require('fs');
  const server = http.createServer((req, res) => {
   fs.readFile('output.txt','utf8',(err,data)=>{
    if (err) {
      res.writeHead(500,{'Content-Type':'text/plain'});
      res.end("error reading file")
    }else{
      res.writeHead(200,{'content-Type':'text/plain'});
      res.end(data)
    }
   });
  });

  server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

