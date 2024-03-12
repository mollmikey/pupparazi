import express from 'express'
import * as store from '../store.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const data = await store.getPuppies()

    res.json(data)
  } catch (error) {
    if (error instanceof Error) {
      return error.message
    }
  }
})

export default router
