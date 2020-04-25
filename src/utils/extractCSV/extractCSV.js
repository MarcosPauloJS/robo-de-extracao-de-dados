const fs = require('fs-extra');

async function dataCSV(){
    return await fs.readFile("./src/utils/extractCSV/temp/arrecadacao_janeiro_2019.csv", "utf-8")
       .then(response =>{
           console.log(response)
       })
       .catch(error => console.error(error));   
}

module.exports = dataCSV;