#!/usr/bin/env node
import { program } from 'commander'
import pjson from '../package.json'

program.usage('<command>')
program.version(pjson.version, '-v, --version')
program.parse()