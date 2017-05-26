const Sequelize = require('sequelize');

module.exports = global.db.define('project', {
  category: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  project_start: {
    type: Sequelize.DATE
  },
  project_end: {
    type: Sequelize.DATE
  },
  funding_goal: {
    type: Sequelize.INTEGER
  },
  funding_start: {
    type: Sequelize.DATE
  },
  funding_end: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});
