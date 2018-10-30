const express = require('express')
const bodyParser = require('body-parser')

const server = express()

const port = 3000

server.use(function (err, req, res, next) {
  console.error(err.stack)
  res.send(500, 'Something broke!')
})

server.use(bodyParser.json())
server.use(express.static('public'))

server.listen(port, function () { console.log("Server is listening on ", port) })
