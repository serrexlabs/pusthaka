import { remote } from "electron";

export default class ConfigService {
  public getUserDataPath(): string {
    return remote.app.getPath("userData");
  }
}
