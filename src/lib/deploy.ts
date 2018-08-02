import { readFileSync } from "fs"
import { Client } from "ssh2"

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
  password?: string
  privateKey?: string
  githubUsername?: string
  githubPassword?: string
  log?: any
}

export default ({
  app = "",
  authType = "1",
  host = "",
  username = "",
  // password = "",
  privateKey = "",
  githubUsername = "",
  githubPassword = "",
  log
}: DeployParams) => {
  const conn = new Client()
  let sshConfig: SshConfig = { host, port: 22, username }

  switch (authType) {
    case "1": // username, password
      break
    case "2": // privateKey
      sshConfig.privateKey = readFileSync(privateKey)
      break
    default:
      throw new Error("AuthType을 지정해주세요.")
  }

  conn
    .on("ready", () => {
      conn.shell((err, stream) => {
        if (err) throw err
        stream
          .on("close", () => {
            conn.end()
          })
          .on("data", (data: any) => {
            log(`STDOUT: ${data}`)
            if (data.indexOf("Username") > -1) {
              stream.write(`${githubUsername}\n`)
            }

            if (data.indexOf("Password") > -1) {
              stream.write(`${githubPassword}\n`)
            }
          })
          .stderr.on("data", data => {
            // console.log("STDERR: " + data)
            log(`STDERR: ${data}`)
          })
        stream.write(`cd ${app}\n`)
        stream.write(`git pull && yarn && yarn build && pm2 reload ${app}\n`)
      })
    })
    .connect(sshConfig)
}
