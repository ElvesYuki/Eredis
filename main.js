const { app, BrowserWindow } = require('electron')
const path = require("path");
let mainWindow;

function createWindow() {
    return new BrowserWindow({
        width: 1024,
        height: 680,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
}

function loadWindow() {
    mainWindow = createWindow()

    mainWindow.loadURL("http://localhost:3000")

}

app.whenReady().then(() => {
    loadWindow()
    app.on('activate', () =>  {
        if (BrowserWindow.getAllWindows().length === 0){
            loadWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
