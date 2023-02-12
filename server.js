/*!
* File Name: server.js
* Name: Inderjit Singh Bedi 
* Student Id: 301313264
* Date: 11/02/2023
*/

const app = require('./app');
const debug = require('debug')('PortfolioAssignment:server');
const http = require('http');

let port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

const server = http.createServer(app);

server.listen(port);

server.on('listening', () => {
    let address = server.address();
    let binding = typeof address === 'string' ? 'pipe ' + address : 'port ' + address.port;
    debug('Listening on ' + binding);
});

server.on('error', (error) => {
    if (error.syscall !== 'listen')
        throw error;
    let binding = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(binding + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(binding + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
});

function normalizePort(val) {
    let port = parseInt(val, 10);
    if (isNaN(port))
        return val;
    if (port >= 0)
        return port;
    return false;
}

