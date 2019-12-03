var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', supplyStats: [{
    "timestamp" : 1560384000,
    "circulating_supply" : 2501386543555556.0,
    "tradeable_stake" : 2387555555555.56,
    "non_participating_stake" : 9018613456444444.0,
    "participating_stake" : 981386543555556.0},{
    "timestamp" : 1570384000,
    "circulating_supply" : 2501386543555556.0,
    "tradeable_stake" : 2387555555555.56,
    "non_participating_stake" : 9018613456444444.0,
    "participating_stake" : 981386543555556.0},{
    "timestamp" : 1580384000,
    "circulating_supply" : 2501386543555556.0,
    "tradeable_stake" : 2387555555555.56,
    "non_participating_stake" : 9018613456444444.0,
    "participating_stake" : 981386543555556.0}] });
});

module.exports = router;
