// Modules to control application life and create native browser window
const {
  app,
  Menu,
  BrowserWindow,
  BrowserView,
  globalShortcut,
  ipcMain,
} = require("electron");
const path = require("path");
const url = require("url");

// 获取在 package.json 中的命令脚本传入的参数，来判断是开发还是生产环境
const mode = process.argv[2];

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    //弹出的窗口有无边框,默认为有
    // frame:false,
    show: false,
    backgroundColor: "#586148",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      webviewTag: true,
    },
  });

  // and load the index.html of the app.
  //mainWindow.loadFile('index.html')

  //判断是否是开发模式
  if (mode === "dev") {
    mainWindow.loadURL("http://localhost:3000/");
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "./build/index.html"),
        protocol: "file:",
        slashes: true,
      })
    );
  }

  mainWindow.webContents.on("did-finish-load", () => {});
  mainWindow.webContents.on("dom-ready", () => {});
  mainWindow.once("ready-to-show", function () {
    mainWindow.show();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// app.whenReady().then(createWindow)
app.on("ready", () => {
  createWindow();
});

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q

  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
