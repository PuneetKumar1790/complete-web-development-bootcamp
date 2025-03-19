const http = require('http');
const fs=require('fs')
const filecotent=fs.readFileSync('tut38.html')
const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(filecotent)
})
server.listen(3000,'127.0.0.1',()=>{
    console.log("listening on port 80")
})