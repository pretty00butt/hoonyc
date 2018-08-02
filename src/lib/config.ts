import { existsSync, readFileSync, writeFileSync } from "fs"
import { homedir } from "os"
import { join as pathJoin } from "path"

const CONFIG_FILENAME = ".hoonycrc"
const CONFIG_FILE_PATH = pathJoin(homedir(), CONFIG_FILENAME)

function _load() {
  const isConfigExisting = existsSync(CONFIG_FILE_PATH)
  if (!isConfigExisting) {
    writeFileSync(pathJoin(homedir(), ".hoonycrc"), JSON.stringify({}, null, 2))
  }

  return JSON.parse(readFileSync(CONFIG_FILE_PATH) as any)
}

function _save(config: object = {}) {
  writeFileSync(CONFIG_FILE_PATH, JSON.stringify(config, null, 2))
  return true
}

export const load = _load
export const save = _save
export default load
