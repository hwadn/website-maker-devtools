import { reactFCTemplateCompile, IAddedComponent } from './templates/react_fc_compile'
import { createDirectory } from './helpers/file'
import { writeFile } from 'fs/promises'
import { resolve } from 'path'
import * as prettier from "prettier"

interface ICodeGenArgs {
  config: string
  outputDir: string
  outputFileName: string
}

const codeGen = async ({ config, outputDir, outputFileName }: ICodeGenArgs) => {
  const addedComponents = JSON.parse(config) as IAddedComponent[]
  const imports = Array.from(new Set(addedComponents.map(({ name }) => name))).map((name) => ({ name }))
  const codeString = reactFCTemplateCompile({ imports, addedComponents })

  const outputDirectory = resolve(process.cwd(), outputDir)
  // Absolute file path
  await createDirectory(outputDirectory)

  const filePath = resolve(outputDirectory, `${outputFileName}.tsx`)
  const formattedCodeString = await prettier.format(codeString, {
    semi: false,
    tabWidth: 2,
    singleQuote: true,
    trailingComma: 'es5',
    parser: 'babel-ts'
  });
  await writeFile(filePath, formattedCodeString)
}

export default codeGen
