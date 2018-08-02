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
$ hoonyc COMMAND
running command...
$ hoonyc (-v|--version|version)
hoonyc/0.3.0 darwin-x64 node-v8.11.3
$ hoonyc --help [COMMAND]
USAGE
  $ hoonyc COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`hoonyc add`](#hoonyc-add)
* [`hoonyc deploy`](#hoonyc-deploy)
* [`hoonyc help [COMMAND]`](#hoonyc-help-command)

## `hoonyc add`

Add a new app

```
USAGE
  $ hoonyc add

OPTIONS
  -a, --app=app  App Name
  -e, --env=env  Environment
  -h, --help     show CLI help

EXAMPLE
  $ hnc add --app hnc --env dev
```

_See code: [src/commands/add.ts](https://github.com/the6thm0nth/hoonyc/blob/v0.3.0/src/commands/add.ts)_

## `hoonyc deploy`

describe the command here

```
USAGE
  $ hoonyc deploy

OPTIONS
  -a, --app=app  App Name
  -e, --env=env  Environment to deploy
  -h, --help     show CLI help
```

_See code: [src/commands/deploy.ts](https://github.com/the6thm0nth/hoonyc/blob/v0.3.0/src/commands/deploy.ts)_

## `hoonyc help [COMMAND]`

display help for hoonyc

```
USAGE
  $ hoonyc help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.0.5/src/commands/help.ts)_
<!-- commandsstop -->

# LICENSE

[MIT](LICENSE)
