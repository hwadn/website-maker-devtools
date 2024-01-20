#!/usr/bin/env node
import { program } from 'commander'
import inquirer from 'inquirer'
import downloadGitRepo from 'download-git-repo'

import pjson from '../package.json'

program.usage('<command>')
program.version(pjson.version, '-v, --version')
program.parse()

inquirer.prompt([
	{
			name: 'componentName',
			message: 'your component name: '
	},
	{
			name: 'description',
			message: 'description: ',
			default: 'a wm component'
	}
]).then(answers => {
	// 拿到信息参数
	const { componentName, description } = answers
	const beginTime = new Date().getTime()
	console.log('start: jjj')
	downloadGitRepo('github:hwadn/wm-component-template', `./${componentName}`, (err: any) => {
		const time = (new Date().getTime() - beginTime) / 1000
    console.log(err || `create project finish in ${time}s`)
	})
})
