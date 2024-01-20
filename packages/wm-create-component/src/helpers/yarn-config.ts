import { exec } from 'child_process'

export async function getYarnUserName(): Promise<string> {
	return new Promise((resolve) => {
		exec('yarn config get username', (_err, stdout, _stderr) => {
			resolve(stdout?.replace(/\n$/, ''))
		})
	})
}
