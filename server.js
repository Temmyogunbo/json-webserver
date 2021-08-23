const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
port = process.env.PORT || 4000

const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use(router)

server.listen(port, () => {
  console.log('JSON Server is running')
})