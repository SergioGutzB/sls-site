const serverlessExpress = require('@vendia/serverless-express');
const serverlessExpressMiddleware = require('@vendia/serverless-express/middleware');
const app = require('./dist/app');
const binaryMimeTypes = [
  'image/jpeg',
  'image/png',
  'image/gif',
];

app.use(serverlessExpressMiddleware.eventContext());
const server = serverlessExpress.createServer(app, null, binaryMimeTypes);

module.exports.express = (event, context) => serverlessExpress.proxy(server, event, context);

