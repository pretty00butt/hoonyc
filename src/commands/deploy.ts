import { Command, flags } from "@oclif/command"

import { load } from "../lib/config"
import deploy from "../lib/deploy"

export default class Deploy extends Command {
  static description = "describe the command here"

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-a, --app=AppName)
    app: flags.string({ char: "a", description: "App Name" }),
    // env with no value (-e, --env)
    env: flags.string({ char: "e", description: "Environment to deploy" })
  }

  async run() {
    const { flags } = this.parse(Deploy)

    const { app = "", env = "" } = flags
    const _config = load()
    const config = _config[app][env]
    this.log(env)
    this.log(_config[app])

    deploy({
      app,
      env,
      ...config,
      log: this.log
    })
  }
}
