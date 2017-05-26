// http://docs.sequelizejs.com/manual/tutorial/associations.html

const Project = require('../models/project');
const Creator = require('../models/creator');
const Backer = require('../models/backer');
const Investment = require('../models/investment');

module.exports = () => {
  // One Creator has Many Projects
  Creator.hasMany(Project);
  // Many Projects have Many Backers
  Project.belongsToMany(Backer, {
    through: Investment
  });
  Backer.belongsToMany(Project, {
    through: Investment
  });
  // calling sequelize.sync() is required to do relations setup magic
  global.db.sync();
}
