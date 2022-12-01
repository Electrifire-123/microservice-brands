var express = require('express');
var router = express.Router();
var brands = require('./brands.model');
// let brands = require('../public/jsondata/brands.json')
/* GET home page. */
router.get('/', async function(req, res, next) {

  const data = await getData();
  // let temp = [];
  // for (let index = 0; index < data.length; index++) {
  //   const element = data[index];
  //   let getData= await getDataBasedOnName(element.name)
  //   temp.push(getData)
  // }

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

module.exports = router;