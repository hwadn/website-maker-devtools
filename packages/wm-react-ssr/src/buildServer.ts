import { build } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

interface IBuildServerOptions {
  root: string
  serverFile: string
  outputDir: string
}

export const buildServer = async ({ root, serverFile, outputDir }: IBuildServerOptions) => {
  await build({
    plugins: [react()],
    mode: 'production',
    root,
    base: '/',
    build: {
      emptyOutDir: false,
      rollupOptions: {
        input: {
          server: path.resolve(__dirname, root, serverFile),
        },
        external: ["fs/promises", "path"],
        output:[
          {
            entryFileNames: 'server.cjs',
            name: 'server',
            format: 'cjs',
            dir: path.resolve(__dirname, root, outputDir),
          }
        ]
      }
    },
  })
}
