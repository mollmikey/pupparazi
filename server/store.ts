import type { PuppyData, Puppy } from '../models/Puppy.ts'
import initialData from './initial-data.ts'
import * as fs from 'node:fs/promises'
import * as Path from 'node:path'
import url from 'node:url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

interface Data {
  puppies: Puppy[]
}

export async function getPuppies(): Promise<Data> {
  try {
    const text = await fs.readFile(
      Path.resolve('../storage/data.json'),

      'utf-8'
    )
    const obj = JSON.parse(text)
    return obj
  } catch (err: any) {
    if (err.code === 'ENOENT') {
      return initialData
    }
    throw err
  }
}

export async function getPuppyById(id: number): Promise<Puppy | undefined> {
  const allPuppies = await getPuppies()
  const puppy = allPuppies.puppies.find((puppy: Puppy) => puppy.id == id)
  return puppy as Puppy
}

export async function updatePuppy(id: number, data: Puppy) {
  const puppiesData = await getPuppies()
  const puppiesArr = puppiesData.puppies
  const updatedPuppy = puppiesArr.map((puppyObj) => {
    if (puppyObj.id === id) {
      puppyObj.name = data.name
      puppyObj.owner = data.owner
      puppyObj.image = data.image
      puppyObj.breed = data.breed

      return { ...data, id }
    } else {
      return puppyObj
    }
  })

  const updatedPupData = { puppies: updatedPuppy }
  const jsonUpdatedPup = JSON.stringify(updatedPupData, null, 2)
  await fs.writeFile(
    Path.join(__dirname, '../storage/data.json'),
    jsonUpdatedPup,
    'utf-8'
  )
}
