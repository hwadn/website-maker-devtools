import inquirer from 'inquirer'
import fs from 'fs'
import path from 'path'

interface IAnswers {
	componentName: string
	description: string
	targetFolder: string
}

export async function initQA(): Promise<IAnswers | undefined> {
	const answers = await inquirer.prompt<Omit<IAnswers, 'targetFolder'>>([
		{
				name: 'componentName',
				message: 'your component name: ',
				validate: (componentName) => componentName.trim().length > 0,
		},
		{
				name: 'description',
				message: 'description: ',
				default: 'a wm component',
		}
	])

	const componentName = answers.componentName.trim()
	const targetFolder = `./${componentName}`
	const absoluteFolder = path.resolve(process.cwd(), targetFolder)
	const isExist = fs.existsSync(absoluteFolder)
	
	if (isExist) {
		const { shouldOverwrite } = await inquirer.prompt<{ shouldOverwrite: boolean }>([
			{
					name: 'shouldOverwrite',
					type: 'confirm',
					message: `A folder with the name "${absoluteFolder}" already exists, overwrite it?`
			},
		])

		if (!shouldOverwrite) return
	}

	return { componentName, description: answers.description.trim(), targetFolder: absoluteFolder }
}

