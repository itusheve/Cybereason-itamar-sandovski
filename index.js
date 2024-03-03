const http = require('http');
//const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const crossSpawn = require('cross-spawn');


// Function to create a static server for the container app
function createStaticServer(port) {
    const staticServer = http.createServer((req, res) => {
        const containerPath = process.cwd(); // Get current working directory
        const indexPath = path.join(containerPath, 'index.html');

        fs.readFile(indexPath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    });

    staticServer.listen(port, () => {
        console.log(`Container app is running at http://localhost:${port}`);
    });

    return staticServer;
}


function runSubAppPreview(subAppPath, port) {
    const subAppName = path.basename(subAppPath);
    
    const command = 'npm';
    const args = ['run', 'preview', '--', `--port=${port}`];

    const subAppProcess = crossSpawn(command, args, {
        cwd: subAppPath,
        stdio: 'inherit'
    });

    subAppProcess.on('close', (code) => {
        if (code === 0) {
            console.log(`${subAppName} preview has stopped`);
        } else {
            console.error(`${subAppName} preview has encountered an error (exit code ${code})`);
        }
    });
}

// Configuration
const containerPort = 5000;
const subApps = [
    { path: '/app1', port: 5001 },
    { path: '/app2', port: 5002 },
    { path: '/app3', port: 5003 },
    { path: '/app4', port: 5004 },
    // Add more sub-apps as needed
];


// Run npm run preview for each sub-application
// subApps.forEach(({ path: subAppPath, port }) => {
//     runSubAppPreview(subAppPath, port);
// });

// Create static server for the container app
const staticServer = createStaticServer(containerPort);

process.on('SIGINT', () => {
    console.log('Stopping servers and child processes...');
    staticServer.close();
    process.exit();
});
