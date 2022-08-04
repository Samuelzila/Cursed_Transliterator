// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld('menu', {
  minimiseWindow: () => {ipcRenderer.send('minimise');},
  maximiseWindow: () => {ipcRenderer.send('maximise');},
  closeWindow: () => {ipcRenderer.send('close');},
  isMaximised: () => {return ipcRenderer.sendSync('isMaximised');}
})