const express = require('express');
const path = require('path');
const fallback = require('express-history-api-fallback');


const rootDir = path.join(__dirname, 'dist');
const app = express();
app.disable("x-powered-by");
app.use(express.static(rootDir));
app.use(fallback('index.html', {root: rootDir}));

const server = app.listen(80, () => {
  console.log(`🚀 Sanity Studio is up!`)
})

module.exports = server;
