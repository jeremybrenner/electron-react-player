
const electron = require('electron');
const path 	   = require('path');
const url 	   = require('url');

const app 	         = electron.app;
const BrowserWindow  = electron.BrowserWindow
let mainWindow       = null;

const init = () => {
	mainWindow = new BrowserWindow({ width: 800, height: 600 });
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	mainWindow.on('closed', () => {
		mainWindow = null;
	})
};

app.on('ready', init );
app.on('activate', () => { if ( mainWindow === null ) init() });
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit() });
