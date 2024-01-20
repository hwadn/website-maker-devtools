#!/usr/bin/env node

import { initCommand } from './command'
import { initQA } from './qa'
import { downloadTemplate } from './download'
import { modifyJson } from './modify-json'

async function main() {
	initCommand()
	const answers = await initQA()

	if (answers) {
		const beginTime = new Date().getTime()
		const { targetFolder, componentName, description } = answers
		console.log('creating...')
		await downloadTemplate(targetFolder)
		// replace package.json
		const pJsonPath = `${targetFolder}/package.json`
		await modifyJson(pJsonPath, { name: `@chd1994/${componentName}`, description })
		const time = (new Date().getTime() - beginTime) / 1000
		console.log(`create project finish in ${time}s`)
	}
}

main()
