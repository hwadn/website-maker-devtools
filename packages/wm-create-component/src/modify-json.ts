import fs from 'fs/promises'

export async function modifyJson(filePath: string, config: Record<string, string | number>) {
	const packageJsonString = await fs.readFile(filePath, { encoding: 'utf-8' });
	const newPackageJson = JSON.parse(packageJsonString)
	Object.entries(config).forEach(([key, value]) => {
		newPackageJson[key] = value
	})
	const newPackageJsonString = JSON.stringify(newPackageJson, undefined, 2)

	await fs.writeFile(filePath, newPackageJsonString)
}
