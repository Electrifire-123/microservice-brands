var database = require('../db/conn');
const Brands = () =>{}
Brands.getBrands = (result) => {
  sql.query(`SELECT * FROM brands`, (err, res) => {
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