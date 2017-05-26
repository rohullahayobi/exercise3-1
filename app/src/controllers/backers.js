const Sequelize = require('sequelize');
const Controller = require('./_controller');
const Backer = require('../models/backer');

const router = new Controller(Backer).withCreate().withGet().withGetAll().withUpdate().withRemove().router();

// Add money to a backer's account balance
let addBalance = (req, res, next) => {

  res.send("Hello I received the request");
  // const addBalanceString = 'balance+' + req.body.addAmount;
  // const b = {
  //   'balance': Sequelize.literal(addBalanceString)
  // };
  // const q = {
  //   'id': req.body.id
  // };
  // Backer.update(b, {
  //   where: q
  // }).then(data => {
  //   //console.log("Updated", data);
  //   res.status(204).send({});
  // });
};



// A backer makes an investment transaction
let makeInvestment = (req, res, next) => {

  res.send("request came");
//     let tR = global.db.transaction((t) => {
// // TODO
//         }).then((result) => { // Transaction committed
//         res.status(200).send({
//         "data": result
//     });
// }).catch((err) => { // Transaction rolled back
//         callback
//             res.status(400).send(err);
// });
};
router.post('/makeInvestment', makeInvestment);

router.put('/addbalance', addBalance);

module.exports = router;
