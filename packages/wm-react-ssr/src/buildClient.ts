import { build } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

interface IBuildClientOptions {
  root: string
  htmlFile: string
  outputDir: string
}

export const buildClient = async ({ root, htmlFile, outputDir }: IBuildClientOptions) => {
  await build({
    plugins: [react()],
    mode: 'production',
    root,
    base: '/',
    build: {
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, root, htmlFile),
        },
        output:[
          {
            entryFileNames: 'client.js',
            name: 'server',
            format: 'cjs',
            dir: path.resolve(__dirname, root, outputDir),
          }
        ]
      },
      emptyOutDir: true,
    },
  })
}