const express = require('express')
const server = express()
const volleyball = require('volleyball')

const PORT = '3003'


server.use(volleyball)


server.listen(PORT, () => {
  console.log(`now listning on ${PORT}`)
  })
