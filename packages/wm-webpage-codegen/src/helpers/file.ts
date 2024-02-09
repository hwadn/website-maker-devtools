import { mkdir, rm } from 'fs/promises'
import { dirname, resolve } from 'path'
import { existsSync } from 'fs'

export const createDirectory = async (directoryPath: string) => {
  if (existsSync(directoryPath)) return true

  const fatherDirPath = dirname(directoryPath)
  if (await createDirectory(fatherDirPath)) {
    await mkdir(directoryPath)
    return true
  }
}

export const deleteDirectory = async (outputDir?: string) => {
  const dir = resolve(__dirname, outputDir || './')
  await rm(dir, { recursive: true, force: true })
}
