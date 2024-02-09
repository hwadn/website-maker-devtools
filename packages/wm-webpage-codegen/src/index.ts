import { reactFCTemplateCompile, IAddedComponent } from './templates/react_fc_compile'
import { createDirectory } from './helpers/file'
import { writeFile } from 'fs/promises'
import { resolve } from 'path'

const config = "[{\"id\":\"57c93354-90eb-4009-b31a-a06e72e1f700\",\"name\":\"@chd1994/wm-button\",\"version\":\"0.0.6\",\"props\":{\"formValues\":{\"container\":{\"margin\":\"auto\",\"padding\":\"0\",\"backgroundColor\":\"#eeeeee\"},\"data\":{\"text\":\"按钮\",\"type\":\"default\"}}}},{\"id\":\"935d1777-76ee-4f49-b4c7-b527099d52e1\",\"name\":\"@chd1994/wm-text\",\"version\":\"0.0.3\",\"props\":{\"formValues\":{\"container\":{\"margin\":\"0 20px\",\"padding\":\"20px 0\",\"backgroundColor\":\"#df29d3\"},\"data\":{\"text\":\"文本\",\"fontSize\":14}}}},{\"id\":\"62bb4465-b218-459f-a23f-b71b82bcb83e\",\"name\":\"@chd1994/wm-text\",\"version\":\"0.0.3\",\"props\":{\"formValues\":{\"container\":{\"margin\":\"0 20px\",\"padding\":\"20px 0\",\"backgroundColor\":\"#cece72\"},\"data\":{\"text\":\"文本\",\"fontSize\":14}}}},{\"id\":\"8a244cd9-ea9e-4e48-87a0-faf39383cfdf\",\"name\":\"@chd1994/wm-text\",\"version\":\"0.0.3\",\"props\":{\"formValues\":{\"container\":{\"margin\":\"0 20px\",\"padding\":\"20px 0\",\"backgroundColor\":\"#77c477\"},\"data\":{\"text\":\"文本\",\"fontSize\":14}}}},{\"id\":\"215a97b4-b697-4446-919f-e52e1b175117\",\"name\":\"@chd1994/wm-button\",\"version\":\"0.0.6\",\"props\":{\"formValues\":{\"container\":{\"margin\":\"auto\",\"padding\":\"0\",\"backgroundColor\":\"#eeeeee\"},\"data\":{\"text\":\"按钮\",\"type\":\"default\"}}}},{\"id\":\"a378cf5a-e236-4909-a99a-52848c4c8255\",\"name\":\"@chd1994/wm-button\",\"version\":\"0.0.6\",\"props\":{\"formValues\":{\"container\":{\"margin\":\"auto\",\"padding\":\"0\",\"backgroundColor\":\"#eeeeee\"},\"data\":{\"text\":\"按钮\",\"type\":\"primary\"}}}},{\"id\":\"a7ffb7af-cc63-4c03-96e2-c3376f07834e\",\"name\":\"@chd1994/wm-text\",\"version\":\"0.0.3\",\"props\":{\"formValues\":{\"container\":{\"margin\":\"0 20px\",\"padding\":\"20px 0\",\"backgroundColor\":\"#cece72\"},\"data\":{\"text\":\"文本\",\"fontSize\":14}}}},{\"id\":\"34c26dc0-3efb-426b-af69-1a3c7637c239\",\"name\":\"@chd1994/wm-button\",\"version\":\"0.0.6\",\"props\":{\"formValues\":{\"container\":{\"margin\":\"auto\",\"padding\":\"0\",\"backgroundColor\":\"#845a5a\"},\"data\":{\"text\":\"按钮哈哈哈\",\"type\":\"default\"}}}},{\"id\":\"a33f67a8-9f6a-4648-95a9-8f82d8bc7c6b\",\"name\":\"@chd1994/wm-text\",\"version\":\"0.0.3\",\"props\":{\"formValues\":{\"container\":{\"margin\":\"0 20px\",\"padding\":\"20px 0\",\"backgroundColor\":\"#cece72\"},\"data\":{\"text\":\"文本\",\"fontSize\":14}}}},{\"id\":\"ffc9ade2-819d-4165-ba8d-45a9a9004941\",\"name\":\"@chd1994/wm-button\",\"version\":\"0.0.6\",\"props\":{\"formValues\":{\"container\":{\"margin\":\"auto\",\"padding\":\"0\",\"backgroundColor\":\"#eeeeee\"},\"data\":{\"text\":\"按钮\",\"type\":\"default\"}}}}]"

const addedComponents = JSON.parse(config) as IAddedComponent[]
const imports = Array.from(new Set(addedComponents.map(({ name }) => name))).map((name) => ({ name }))

const main = async () => {
  const codeString = reactFCTemplateCompile({ imports, addedComponents })

  // TODO
  const apisDirectory = resolve(__dirname,  './outputs')
  // Absolute file path
  await createDirectory(apisDirectory)

  const filePath = resolve(apisDirectory, `index.tsx`)
  await writeFile(filePath, codeString)
  // TODO format
}

main()
