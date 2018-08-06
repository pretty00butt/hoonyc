import { Command, flags } from "@oclif/command"
import chalk from "chalk"

import { load } from "../lib/config"
// import deploy from "../lib/deploy"

// Commands
import add from "../lib/deploy/add"
import push from "../lib/deploy/push"

export default class Deploy extends Command {
  static description = "describe the command here"

  static args = [{ name: "command" }]

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-a, --app=AppName)
    app: flags.string({ char: "a", description: "App Name" }),
    // env with no value (-e, --env)
    env: flags.string({ char: "e", description: "Environment to deploy" })
  }

  async run() {
    const { args, flags } = this.parse(Deploy)
    // const log = this.log

    const { app = "", env = "" } = flags
    const { command } = args

    const config = load()

    // Message
    this.showMessage({ command, app, env, config })

    // Action
    this.runCommand({ command, app, env, config })
  }

  showMessage({ command, app, env }) {
    switch (command) {
      case "add":
        this.log(
          chalk.blue(`➕ Add ${app} to the list of hoonyc deployment apps...`)
        )
        break
      case "push":
        this.log(chalk.blue(`⬆️ Push ${app} to your ${env} server...`))
        break
      default:
        this.error(`${command} is the command that is not supported yet.`)
    }
  }

  runCommand({ command, app, env, config }) {
    // Action
    switch (command) {
      case "add":
        add({
          app,
          env,
          printLog: this.log,
          printError: this.error,
          exit: this.exit,
          config
        })
        break
      case "push":
        push({
          app,
          env,
          printLog: this.log,
          printError: this.error,
          exit: this.exit,
          ...config[app][env]
        })
        break
      default:
        this.error(`${command} is the command that is not supported yet.`)
        self.exit()
    }
  }
}
