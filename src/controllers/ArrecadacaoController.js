const extractCSV = require('../utils/extractCSV/extractCSV');

module.exports ={
    async index(req, res){
        console.log( await extractCSV())
        res.send('Em contrução')
    }
}