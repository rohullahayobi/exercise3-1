const express = require('express');
const router = express.Router();
const Project = require('../models/project');

const index = (req, res, next) => {
  // show all projects
  Project.findAll().then((data) => {    
    res.status(200).send({
      "data": data
    });      
  });
};

// Routes
router.get('/', index);

module.exports = router;
