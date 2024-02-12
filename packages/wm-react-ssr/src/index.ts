import { buildClient } from './buildClient'
import { buildServer } from './buildServer'
import { exec } from 'child_process'
import path from 'path'

interface IOptions {
  root: string
  serverFile: string
  htmlFile: string
  outputDir: string
}

export async function buildSSR({
  root,
  serverFile = 'server.tsx',
  htmlFile = 'index.html',
  outputDir = 'dist'
}: IOptions) {
  const absoluteRoot = path.resolve(process.cwd(), root)
  await buildClient({ root: absoluteRoot, htmlFile, outputDir })
  console.log('build client ok')
  await buildServer({ root: absoluteRoot, serverFile, outputDir })
  console.log('build server ok')
  const distServerFile = path.resolve(process.cwd(), root, './dist/server.cjs')
  console.log('distServerFile:', distServerFile)

  const title = process.argv[2]
  exec(`node ${distServerFile} ${title}`, (err, stdout, stderr) => {
    console.log('err:', err)
    console.log('stdout:', stdout);
    console.error('stderr:', stderr);
  })
  console.log('ssr ok')
}
