import * as Config from '@oclif/config'
import {expect, fancy, FancyTypes} from 'fancy-test'

import {command} from './command'
import exit from './exit'
import hook from './hook'
import {loadConfig} from './load-config'

loadConfig.root = module.parent!.filename

export const test = fancy
.register('loadConfig', loadConfig)
.register('command', command)
.register('exit', exit)
.register('hook', hook)

export default test

export {
  expect,
  FancyTypes,
  Config,
  command,
}
