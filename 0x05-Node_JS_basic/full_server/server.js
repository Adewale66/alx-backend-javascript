const express = require('express');
const { default: router } = require('./routes');

const app = express();
const port = 1245;

app.use('/', router);

app.listen(port);
export default app;
