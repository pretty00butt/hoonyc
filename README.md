# hoonyc

hoonyc is a collection of commands that hoony uses

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/hoonyc.svg)](https://npmjs.org/package/hoonyc)

[![CircleCI](https://circleci.com/gh/the6thm0nth/hoonyc/tree/master.svg?style=shield)](https://circleci.com/gh/the6thm0nth/hoonyc/tree/master)

[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/the6thm0nth/hoonyc?branch=master&svg=true)](https://ci.appveyor.com/project/the6thm0nth/hoonyc/branch/master)
[![Codecov](https://codecov.io/gh/the6thm0nth/hoonyc/branch/master/graph/badge.svg)](https://codecov.io/gh/the6thm0nth/hoonyc)
[![Downloads/week](https://img.shields.io/npm/dw/hoonyc.svg)](https://npmjs.org/package/hoonyc)
[![License](https://img.shields.io/npm/l/hoonyc.svg)](https://github.com/the6thm0nth/hoonyc/blob/master/package.json)

# Usage

<!-- usage -->
```sh-session
$ npm install -g hoonyc
$ hnc COMMAND
running command...
$ hnc (-v|--version|version)
hoonyc/0.5.0 darwin-x64 node-v8.11.3
$ hnc --help [COMMAND]
USAGE
  $ hnc COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`hnc deploy [COMMAND]`](#hnc-deploy-command)
* [`hnc help [COMMAND]`](#hnc-help-command)

## `hnc deploy [COMMAND]`

describe the command here

```
USAGE
  $ hnc deploy [COMMAND]

OPTIONS
  -a, --app=app  App Name
  -e, --env=env  Environment to deploy
  -h, --help     show CLI help
```

_See code: [src/commands/deploy.ts](https://github.com/the6thm0nth/hoonyc/blob/v0.5.0/src/commands/deploy.ts)_

## `hnc help [COMMAND]`

display help for hnc

```
USAGE
  $ hnc help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.0.5/src/commands/help.ts)_
<!-- commandsstop -->

# LICENSE

[MIT](LICENSE)
