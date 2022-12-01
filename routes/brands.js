var express = require('express');
var router = express.Router();
let brands = require('../public/jsondata/brands.json')



router.get('/', async function(req, res, next) {
  // res.status(200).json(brands)
  try{
    let x = 1;
      if(x < 5) throw "too low";
    }catch(e){
      console.log(e)
      res.status(500).json({status:false,msg:e});
    };
}
);

module.exports = router;