const { app, BrowserWindow } = require("electron");
const fs = require("fs-extra");

if (process.env.NODE_ENV === "development") {
  const userDataPath = app.getPath("userData");
  /*  const {default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS} = require('electron-devtools-installer');
  console
  installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));

  installExtension(REDUX_DEVTOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err)); */

  const [, , ...args] = process.argv;
  if (args.indexOf("clear") > -1) {
    if (fs.existsSync(`${userDataPath}/IndexedDB`)) fs.removeSync(`${userDataPath}/IndexedDB`);
    if (fs.existsSync(`${userDataPath}/books`)) fs.removeSync(`${userDataPath}/books`);
    if (fs.existsSync(`${userDataPath}/thumbs`)) fs.removeSync(`${userDataPath}/thumbs`);
    if (fs.existsSync(`${userDataPath}/Local Storage`))
      fs.removeSync(`${userDataPath}/Local Storage`);
  }
}
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true,
      // NOTE: disabled on purpose of loading file from fs in development mode
      // DON'T : disable this on other environment except development
      webSecurity: process.env.NODE_ENV !== "development",
    },
  });
  mainWindow.maximize();
  mainWindow.show();
  mainWindow.setMenuBarVisibility(false);

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  if (process.env !== "production") {
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
