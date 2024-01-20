import downloadGitRepo from 'download-git-repo'

export async function downloadTemplate(targetFolder: string) {
	return new Promise((resolve, reject) => {
		downloadGitRepo('github:hwadn/wm-component-template', targetFolder, (err: any) => {
			if (err) {
				reject(err)
			} else {
				resolve(undefined)
			}
		})
	})
}
