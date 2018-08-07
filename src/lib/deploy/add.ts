const co = require("co")
const prompt = require("co-prompt")

import { save } from "../config"

interface AddParams {
  app: string
  env: string
  config: any
  printLog?: object
  printError?: object
  exit?: object
}

export default ({ app, env, config }: AddParams) => {
  co(function*() {
    const appName = (yield prompt(`App Name ${app ? `(${app})` : ""}: `)) || app
    const targetEnv =
      (yield prompt(
        `Environment to deploy ${env ? `(${env})` : "(default: dev)"}: `
      )) || env

    config[appName] = config[appName] || {}
    config[appName][targetEnv] = config[appName][targetEnv] || {}
    const appConfig = config[appName][targetEnv]

    // Authentication Type
    // 1. Username & Password
    // 2. Private Key File
    appConfig.authType = yield prompt(
      `Authorization (1: username, password 2: private key): `
    )
    if (appConfig.authType === "1") {
      appConfig.username = yield prompt(`Username: `)
    } else {
      appConfig.privateKey = yield prompt(
        `Private Key Path: (/path/to/private/key.pem)`
      )
    }

    // Remote Server
    appConfig.host = yield prompt(`Server Host: `)
    appConfig.username = yield prompt(`Server Username: `)

    // Remote Deployment Environment
    appConfig.remotePath = yield prompt(
      `Remote Path to your app (Absolute Path): `
    )

    // Github
    appConfig.githubUsername = yield prompt(`Github Username: `)

    save(config)
    process.exit(1)
  })
}
