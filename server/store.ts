import type { PuppyData, Puppy } from '../models/Puppy.ts'
import initialData from './initial-data.ts'
import * as fs from 'node:fs/promises'

interface Data {
  puppies: Puppy[]
}

// console.log(JSON.stringify(initialData))

export async function getPuppies(): Promise<Data> {
  try {
    const json = await fs.readFile('/initial-data.ts', 'utf-8')
    return JSON.parse(json)
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      return initialData
    }
    throw error
  }
}

export async function getPuppyById(id: number): Promise<Puppy | undefined> {
  try {
    const json = await fs.readFile('storage/data.json', 'utf-8')
    const data = JSON.parse(json)

    console.log(data.puppies[id - 1])

    // const id = parseInt(req.params.id)

    // if (isNaN(id) || data.puppies.length <= id) {
    //   // res.sendStatus(404)
    //   return 'error'
    // }
    return data.puppies[id - 1]
  } catch (e: any) {
    // res.sendStatus(500)
    // console.log(e)
    return e.message
  }
}
