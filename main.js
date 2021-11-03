const { app, BrowserWindow, ipcMain} = require('electron')
const path = require("path");
const Store = require("electron-store");
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

    const store = new Store();
    store.set('testKey',[1,2,3,4])

    ipcMain.handle('setStoreValue', (event, key ,value) => {
        return store.set(key, value)
    })

    ipcMain.handle('getStoreValue',  (event, key) => {
        return store.get(key)
    })

})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
