const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createSettingWindow = () => {
  const settingWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'settingPreload.js'),
      backgroundThrottling: false
    }
  });

  settingWindow.loadFile(path.join(__dirname, 'setting.html'));

  // Open the DevTools.
  //settingWindow.webContents.openDevTools();
  return settingWindow;
};

const createChatflowWindow = (event, {width, height, url, injectCSS}) => {
  const chatflowWindow = new BrowserWindow({
    width: +width,
    height: +height,
    webPreferences: {
      preload: path.join(__dirname, 'browserPreload.js'),
      backgroundThrottling: false
    }
  });

  var cssText = fs.readFileSync(path.join(__dirname, 'browser.css'), 'utf8');

  chatflowWindow.loadURL(url);
  chatflowWindow.webContents.insertCSS(cssText);
  chatflowWindow.webContents.insertCSS(injectCSS);
  chatflowWindow.removeMenu();
};

ipcMain.on('openChatflowWindow', createChatflowWindow);

app.disableHardwareAcceleration();

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createSettingWindow();
  //yaml.load(fs.readFileSync("setting.yaml", 'utf-8'))
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createSettingWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.