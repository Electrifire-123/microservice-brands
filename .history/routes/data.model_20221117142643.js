var database = require('../db/conn');

const getBrands = () =>{
  return new Promise((resolve, reject) =>{ 
    database.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
      if (error) {
        reject(error);
      }
      resolve(results[0].solution);
      // console.log('The solution is: ', results[0].solution);
    });
    
    connection.end();
  })
}

