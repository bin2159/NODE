const http=require('http')
const routes=require('./rroutes')
const server=http.createServer(routes)
server.listen(3000)