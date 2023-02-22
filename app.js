const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    const url=req.url
    const method=req.method
    if(url==='/'){
        fs.readFile('message.txt',{encoding:'utf-8' },(err,data)=>{
            if(err){
                console.log(err)
            }
            res.setHeader('Content-Type','text/html')
            res.write('<html>')
            res.write('<head><title>My first Page</title></head>')
            res.write(`<body>${data}</body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
            res.write('</html>')
            return res.end()

        })
        
    }
    if(url==='/message'&& method==='POST'){
        const body=[]
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end',()=>{
            const parseBody= Buffer.concat(body).toString()
            const message=parseBody.split('=')[1]
            fs.writeFile('message.txt',message,(err)=>{
                res.statusCode=302
                res.setHeader('Location','/')
                return res.end()
            })
        })
        
    }
    if(req.url=='/node'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>My first Page</title></head>')
        res.write('<body><h1>Hello from my node js project</></body>')
        res.write('</html>')
        res.end()
    }
    
})
server.listen(3000)