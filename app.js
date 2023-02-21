const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url=='/home'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>My first Page</title></head>')
        res.write('<body><h1>Hello from Home page</></body>')
        res.write('</html>')
        res.end()
    }
    if(req.url=='/about'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>My first Page</title></head>')
        res.write('<body><h1>Hello from About Us page</></body>')
        res.write('</html>')
        res.end()
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