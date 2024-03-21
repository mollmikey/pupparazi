import express from 'express'
import puppies from './routes/puppies.ts'

const server = express()
// Server configuration
server.use(express.json())
server.use('/api/v1/puppies', puppies)

export default server
