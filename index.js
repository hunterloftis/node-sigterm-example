'use strict'

const request = require('request');

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

let interval = setInterval(() => console.log('interval'), 10000);

function shutdown() {
  console.log('Shutting down...');
  request.get('https://nodebin.herokuapp.com/v1/nodes/lts', (err, res, body) => {
    if (err) throw err;
    console.log('received body:\n', body);
    process.nextTick(process.exit, 0);
  });
}
