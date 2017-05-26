const Controller = require('./_controller');
const Creator = require('../models/creator');
const Project = require('../models/project');

const router = new Controller(Creator).withCreate().withGet().withGetAll().withUpdate().withRemove().router();

let getCreatorWithProjects = (req, res, next) => {
  const query = {
    'id': req.params.id,
    include: [{
      model: Project
    }]
  };
  Creator.findOne(query).then((data) => {  
    res.status(200).send(data);   
  });
}

router.get('/:id/projects', getCreatorWithProjects);

module.exports = router;
