var database = require('../db/conn');
const Brands = () =>{}
Brands.getBrands = (result) => {
  database.query(`SELECT * FROM brands`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log(res);
    if (res.length) {
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  });  
}

module.exports = Brands;