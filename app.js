
// import Express
const express = require('express');

// Routers
const { checksRouter } = require('./routers/checks.routes');

// utils
const { db } = require('./utils/database.util')

// init express app
const app = express();

// Use for server
app.use(express.json());

// http://localhost:4000/checks
app.use( '/checks', checksRouter);

// Authenticate, sync the database
db.authenticate()
  .then(() => console.log('Db authenticated'))
  .catch(err => console.log(err));

db.sync()
  .then(() => console.log('Db synced'))
  .catch(err => console.log(err));

app.listen(4000, () => {
  console.log('express app running!');
});
