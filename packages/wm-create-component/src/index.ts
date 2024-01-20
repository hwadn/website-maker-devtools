#!/usr/bin/env node

import { initCommand } from './helpers/command'
import { initQA } from './helpers/qa'
import { downloadTemplate } from './helpers/download'
import { modifyJson } from './helpers/modify-json'
import { getYarnUserName } from './helpers/yarn-config'

import chalk from 'chalk';
import ora from 'ora'

async function main() {
	initCommand()
	const answers = await initQA()

	if (answers) {
		const beginTime = new Date().getTime()
		const { targetFolder, componentName, description } = answers

		const createLoading = ora('creating...');
		createLoading.start()
		try {
			await downloadTemplate(targetFolder)
			// replace package.json
			const pJsonPath = `${targetFolder}/package.json`
			const author = await getYarnUserName()
			await modifyJson(pJsonPath, { name: `@chd1994/${componentName}`, description, author })

			const time = (new Date().getTime() - beginTime) / 1000
			createLoading.succeed(`create project finish in ${time}s`)
		} catch (err: any) {
			createLoading.fail('create failed')
			console.log(chalk.red(err?.stack))
			console.log(chalk.blue('maybe you can check if "github.com" and "github.global.ssl.fastly.net" can be pinged successfully!'))
		}
	}
}

main()
