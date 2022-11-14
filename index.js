const { app, BrowserWindow } = require('electron')
const path = require('path')

//Configura a abertura do aplicativo
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: './src/components/images/logo.png',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadURL(`file://${__dirname}/index.html`);
}

//Inicia o aplicativo
app.whenReady().then(() => {
    createWindow()
})

//Fecha o aplicativo
app.on('window-all-closed', () => {
    app.quit();
});