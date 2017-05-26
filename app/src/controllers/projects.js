const Controller = require('./_controller');
const Project = require('../models/project');

const router = new Controller(Project).withCreate().withGet().withGetAll().withUpdate().withRemove().router();

module.exports = router;
