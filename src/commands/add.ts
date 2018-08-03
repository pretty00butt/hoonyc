import { Command, flags } from "@oclif/command"

import { load, save } from "../lib/config"

const co = require("co")
const prompt = require("co-prompt")

export default class Add extends Command {
  static description = "Add a new app"

  static examples = [`$ hnc add --app hnc --env dev`]

  static flags = {
    help: flags.help({ char: "h" }),
    app: flags.string({ char: "a", description: "App Name" }),
    env: flags.string({ char: "e", description: "Environment" })
  }

  async run() {
    const { flags } = this.parse(Add)
    const { app, env } = flags
    const config = load()

    co(function*() {
      const appName = yield prompt(`App Name ${app ? `(${app})` : ""}: `)
      const targetEnv = yield prompt(
        `Environment to deploy ${env ? `(${env})` : "(default: dev)"}: `
      )

      config[appName] = {}
      config[appName][targetEnv] = {}
      const appConfig = config[appName][targetEnv]

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
      appConfig.host = yield prompt(`Server Host: `)
      appConfig.username = yield prompt(`Server Username: `)
      appConfig.githubUsername = yield prompt(`Github Username: `)

      save(config)
      process.exit(1)
    })
  }
}
