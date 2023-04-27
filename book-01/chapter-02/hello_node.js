const http = require('http')

http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/plain'});
    console.log('hello world ',res)
    res.end('Hello node.js!\n')
}).listen(3000)

console.log(`server running at: http://localhost:3000`)