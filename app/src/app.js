'use strict';

// 3rd-party dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');
const Sequelize = require('sequelize');

// Application config
const LOCAL_APP_PORT = 8080;
const PUBLIC_APP_PORT = process.env.PUBLIC_APP_PORT || LOCAL_APP_PORT;
const PG_HOST = process.env.PG_HOST;
const PG_PORT = process.env.PG_PORT;
const PG_USER = process.env.PG_USER;
const PG_DATABASE = process.env.PG_DATABASE || "";

// Sanity check for debugging
console.log("local app port:", LOCAL_APP_PORT);
console.log("public app port:", PUBLIC_APP_PORT);
console.log("db host:", PG_HOST);
console.log("db port:", PG_PORT);

// Set up a global Postgresql DB connection pool
global.db = new Sequelize(PG_DATABASE, PG_USER, "", {
  host: PG_HOST,
  port: PG_PORT,
  dialect: 'postgres',
  define: {
    underscored: true
  }
});

// Express middleware
app.use(bodyParser.json()); // for parsing application/json

// Import controllers (routes)
const index = require('./controllers/index');
const projects = require('./controllers/projects');
const creators = require('./controllers/creators');
const backers = require('./controllers/backers');

// Setup relations
require('./models/relations')();

// Set up express routes
app.use('/', index);
app.use('/projects', projects);
app.use('/creators', creators);
app.use('/backers', backers);

app.listen(LOCAL_APP_PORT, function() {
  console.log('App started ...');
});
