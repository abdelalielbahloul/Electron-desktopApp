const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        // backgroundColor: '#000',
        webPreferences: {
            nodeIntegration: true
        }
    })

  // and load the index.html of the app.
    win.loadFile('index.html')
//   win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
  
  