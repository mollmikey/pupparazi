import { readFile } from 'fs'
import type { PuppyData, Puppy } from '../models/Puppy.ts'
import initialData from './initial-data.ts'
import { Path } from 'react-router-dom'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

interface Data {
  puppies: Puppy[]
}

export async function getPuppies(): Promise<Data> {
  try {
    const pupData = await readFile(Path.join(__dirname))
  } catch (error) {}
}
