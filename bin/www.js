const http = require('http'),
      PORT = 8080;

const serverHandle = require('../app1')

const server = http.createServer(serverHandle)

server.listen(PORT, ()=>{
    console.log("listen OK")
})
