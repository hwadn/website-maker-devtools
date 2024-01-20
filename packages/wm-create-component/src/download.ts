import downloadGitRepo from 'download-git-repo'

export async function downloadTemplate(targetFolder: string) {
	return new Promise((resolve, reject) => {
		downloadGitRepo('github:hwadn/wm-component-template', targetFolder, (err: any) => {
			if (err) {
				console.log('please check if "github.com" and "github.global.ssl.fastly.net" can be pinged successfully!')
				reject(err)
			} else {
				resolve(undefined)
			}
		})
	})
}
