import server from './server'

const PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  // eslint-disable-next-line no-console
  console.log('Listening...',)
})
