import express from 'express'
import puppies from './routes/puppies.ts'

const server = express()

// Server configuration
server.use(express.json())

server.use('/api/v1/puppies', puppies)

// Your routes/router(s) should go here

// server.get('/:id', (req, res) => {
//   res.send(getPuppies)
// })
export default server
