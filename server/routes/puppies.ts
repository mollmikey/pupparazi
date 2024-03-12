import express from 'express'
import * as store from '../store.ts'
import * as fs from 'node:fs/promises'

const router = express.Router()

router.get('/', async (req, res) => {
  const data = await store.getPuppies()
  res.json(data)
})

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  // console.log(id)
  const data = await store.getPuppyById(id)
  res.json(data)
})

export default router
