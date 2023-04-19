//**************************************************************************************** */
//                               the server.js
//**************************************************************************************** */
'use strict'

const http = require('http'); //this line is going to remove it!
const debug = require('debug')('baknode:server');
const app = require('../src/app'); // this line seach the app file on the src directory


// ***************************************************************************************/
// this function normalizedPorta normalizes the server port
//************************************************************************************* */
const port = normalizedPorta(process.env.PORT || '3000');
app.set('port', port);


const server = http.createServer(app);


//servr, can you listen to the oc port?
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('API  actual is running in port ' + port);
console.log('server online');

//******************************************************************************************* */
///                          The functions space
//******************************************************************************************** */
function normalizedPorta(val){
    const port  = parseInt(val,10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
function onError(error){
    if(error.syscall != 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code){
        case 'EACCES': console.error(bind + 'requires elevated privilege!');
            process.exit(1);
            break;
        case  'EADDRINUSE': console.error(bind + 'is already in use!');
            process.exit(1);
            break;
        default: 
            throw error;
    }
}
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe  ' + addr : 'port  ' + addr.port;
    debug('Listening om ' + bind); 
}