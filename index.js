const jsonServer = require('json-server')
const server = jsonSever.create()
const router = jsonServer.router('db.json')
const middleware =jsonServer.defaults()
const port = process.env.PORT || 8002

server.use(router)
server.use(middleware)

server.listen(port)