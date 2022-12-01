var express = require('express');
var router = express.Router();

let cart =  require('../public/jsondata/cartitems.json')
router.get('/', async function(req, res, next) {
  res.status(200).json(cart);
});

router.post('/', async function(req, res, next) {
      res.status(200).json({
        status:true,
        msg:'product added to cart'
      })
});

module.exports = router;