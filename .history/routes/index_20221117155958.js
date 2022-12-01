var express = require('express');
var router = express.Router();
var brands = require('./brands.model');
// let brands = require('../public/jsondata/brands.json')
/* GET home page. */
router.get('/', async function(req, res, next) {
  const data = await getData();
  res.status(200).json(data);
});

router.get('/:id', async function(req, res, next) {

  const data = await getBrandData(2);
  console.log('data');
  console.log(data);

  res.status(200).json(data);
});

const getData = () =>{
  return new Promise((resolve, reject) =>{ 
    brands.getBrands((error,result)=>{
      resolve(result);
      reject(error);
    })   
  })
}

const getBrandData = (id) =>{
  return new Promise((resolve, reject) =>{ 
    brands.getBrand(id,(error,result)=>{
      resolve(result);
      reject(error);
    })
  })
}
module.exports = router;