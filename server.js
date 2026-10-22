const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const BASE_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // Sanitize URL path
    let safePath = req.url.split('?')[0];
    if (safePath === '/' || safePath === '') {
        safePath = '/index.html';
    }

    const filePath = path.join(BASE_DIR, safePath);

    // Prevent directory traversal
    if (!filePath.startsWith(BASE_DIR)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            // SPA fallback: return index.html
            const fallbackPath = path.join(BASE_DIR, 'index.html');
            fs.readFile(fallbackPath, (fallbackErr, content) => {
                if (fallbackErr) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('404 Not Found');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end(content);
                }
            });
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        fs.readFile(filePath, (readErr, content) => {
            if (readErr) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 Internal Server Error');
            } else {
                res.writeHead(200, {
                    'Content-Type': contentType,
                    'Cache-Control': 'no-cache'
                });
                res.end(content);
            }
        });
    });
});

server.listen(PORT, '127.0.0.1', () => {
    console.log(`====================================================`);
    console.log(`☕ Velvet & Leaf - Coffee & Tea Cafe Web App`);
    console.log(`🚀 Server listening at: http://localhost:${PORT}`);
    console.log(`====================================================`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        const altPort = PORT + 1;
        console.log(`Port ${PORT} in use, trying ${altPort}...`);
        server.listen(altPort, '127.0.0.1');
    } else {
        console.error('Server error:', err);
    }
});
