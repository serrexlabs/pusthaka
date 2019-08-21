import { remote } from "electron";

export const userDataPath = remote.app.getPath("userData");
