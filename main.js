const { app, BrowserWindow } = require('electron');
const path = require('path');

// Function to create the main application window
function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,  // Allows Node.js integration
            contextIsolation: false // Disables context isolation
        }
    });

    // Load the HTML file into the window using a proper path
    mainWindow.loadFile(path.join(__dirname, 'Home/index.html')); // Use relative path
}

// Event when Electron has finished initializing
app.whenReady().then(() => {
    createWindow(); // Create the main window

    // Re-create the window if the app is activated and no windows are open
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Event when all windows are closed
app.on('window-all-closed', () => {
    // On macOS, apps typically stay open until the user explicitly quits with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit(); // Quit the app if not on macOS
    }
});
