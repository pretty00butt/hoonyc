import { readFileSync } from "fs"
import { Client } from "ssh2"

const co = require("co")
const prompt = require("co-prompt")

interface SshConfig {
  host: string
  port: number
  username: string
  privateKey?: Buffer
  password?: string
}

interface DeployParams {
  app: string
  authType: string
  host: string
  username?: string
  privateKey?: string
  remotePath: string
  githubUsername: string
  githubPassword?: string
  printLog?: any
  printError?: any
  exit?: any
}

export default ({
  app = "",
  authType = "1",
  host = "",
  username = "",
  privateKey = "",
  remotePath = "",
  githubUsername = "",
  printLog,
  printError,
  exit
}: DeployParams) => {
  printLog(app, host)
  const conn = new Client()
  let sshConfig: SshConfig = { host, port: 22, username }

  switch (authType) {
    case "1": // username, password
      break
    case "2": // privateKey
      sshConfig.privateKey = readFileSync(privateKey)
      break
    default:
      printError("AuthType을 지정해주세요.")
      exit()
  }

  conn
    .on("ready", () => {
      co(function*() {
        const githubPassword = yield prompt.password("🚀 Github Password: ")

        conn.shell((err, stream) => {
          if (err) throw err
          stream
            .on("close", () => {
              conn.end()
            })
            .on("data", (data: any) => {
              printLog(`STDOUT: ${data}`)
              if (data.indexOf("Username") > -1) {
                stream.write(`${githubUsername}\n`)
              }

              if (data.indexOf("Password") > -1) {
                stream.write(`${githubPassword}\n`)
              }
            })
            .stderr.on("data", data => {
              // console.log("STDERR: " + data)
              printError(`STDERR: ${data}`)
            })
          stream.write(`cd ${remotePath}\n`)
          stream.write(`git pull && yarn && yarn build && pm2 reload ${app}\n`)
        })
      })
    })
    .connect(sshConfig)
}
