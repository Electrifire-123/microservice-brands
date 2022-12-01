var database = require('../db/conn');
const Brands = () =>{}
Brands.getBrands = (result) => {
  database.query(`SELECT * FROM brands`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    
    if (res.length) {
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  });  
}

Brands.getBrand = (id,result) => {
  database.query(`SELECT * FROM brands where id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    
    if (res.length) {
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });  
}
module.exports = Brands;