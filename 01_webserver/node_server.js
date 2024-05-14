// first we need to to understnd, how to create a server
// we need to create HTTP server, (why http server?) because is the protocol that the web uses to communicate
// first we need http from the node
const http = require("http") 
// we need to declare to whom and where the server should respond
const port = 3000
const host = "127.0.0.1"
// now we will create a server
const server = http.createServer((req, res)=>{
    if (req.url === "/") {
        res.statusCode = 200
        res.setHeader("Content-type","text/plain")
        res.end("hello prasad")
    }else if(req.url === "/login"){
        res.statusCode = 200
        res.setHeader("Content-type","text/plain")
        res.end("this is login page")
    }else{
        res.statusCode = 400
        res.setHeader("Content-type","text/plain")
        res.end("sorry friends")
    }
})

server.listen(port,host,()=>{
    console.log(`the server is listening at http://${host}//${port}`)
})