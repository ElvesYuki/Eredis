const { contextBridge,ipcRenderer, ipcMain } = require('electron')

console.log('加载==>preload.js')
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }
})

console.log('加载==>Store.js')

contextBridge.exposeInMainWorld('myAPI',{
    setStoreValue: (key, value) => ipcRenderer.invoke('setStoreValue', key, value),
    getStoreValue: (key) => ipcRenderer.invoke('getStoreValue', key),
})
