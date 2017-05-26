const Sequelize = require('sequelize');

module.exports = global.db.define('investment', {
  amount: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});
