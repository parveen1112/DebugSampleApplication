/* eslint no-console: [0], global-require: [0] */
const server = require('@js-factory/ironhead');

server.on('ironhead:binded', (props) => {
    console.log('\n\n--------------------------------------------------------\n\n');
    console.log(`Node app is running on port ${props.port}`);
    console.log(`\nEnvironment  : ${(process.env.NODE_ENV || 'development')}`);
    console.log(`Cluster Mode : ${(process.env.NODE_CLUSTERS || false)}`);
    console.log(`Date: ${new Date()}`);
    console.log('\n\n--------------------------------------------------------\n\n');
});

server.run();

process.on('uncaughtException', (err) => {
    console.log('uncaughtException===', err);
    console.error(err.toErrString ? err.toErrString() : err.stack);
});


process.on('unhandledRejection', (err, p) => {
    console.error('Unhandled Rejection at: Promise ', p, 'reason:', err.stack);
});
