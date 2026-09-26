const http = require('http');
const fs = require('fs');
const server=http.createServer(function(req,res){
    fs.readFile('index.html',(err,data)=>{
        if(err){
            res.statusCode=500;
            res.end("Internal Server Error");
        }
        else{
            res.statusCode=200;
            res.setHeader("Content-Type","text/html")
            res.end(data)
        }
    })
});
const PORT=3000;
server.listen(PORT,()=>{
    console.log("listen to port ",PORT);
})