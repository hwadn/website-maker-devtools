import { program } from 'commander'
import pjson from '../../package.json'

export function initCommand() {
	program.usage('<command>')
	program.version(pjson.version, '-v, --version')
	program.parse()
}
