const Sequelize = require('sequelize');

module.exports = global.db.define('backer', {
  name: {
    type: Sequelize.STRING
  },
  balance: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});
