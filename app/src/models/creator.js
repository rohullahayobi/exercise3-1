const Sequelize = require('sequelize');

module.exports = global.db.define('creator', {
  name: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});
