const extractCSV = require('../utils/extractCSV/extractCSV');

module.exports ={
    async index(req, res){
        let dataArrecadacao = await extractCSV();

        dataArrecadacao = dataArrecadacao.split('\n').join("qWe");
        patternSeparetor = new RegExp(/,|qWe/g) 

        let separateData = dataArrecadacao.split(patternSeparetor);

        separateData = separateData.filter( item =>{
            return item !== "" ? item : null
        })

        // remove as informações não pertencente a planilha
        for (let i = 0; i < 4; i++) {
            separateData.shift();
        };
        
        let agrupData =[];
        for( let i = 0; i < 27; i++){
            agrupData.push({
                State : separateData[i+1],
                revenue: []
            })
        }

        // remove o cabelhalho da planilha após ter salvo em outra planilha
        for (let i = 0; i < 29; i++) {
            separateData.shift();
        };
        
        columnIndex = 0;
        teste = 0;

        separateData.forEach( (item, index) => {
            if(columnIndex === 0){
            console.log("========================== IF ====================")
            // console.log(
            // console.log(columnIndex)
            // console.log(teste)
            // agrupData.forEach( (arr, index) =>{
            //     console.log(index)
            //     console.log(agrupData)
            //     console.log(agrupData[teste].revenue = 5)
            // })
            console.log(agrupData[teste])
            console.log(agrupData[teste].revenue.push([item]))


        }
        // columnIndex = columnIndex < 28 ? (columnIndex + 1) : 0;
        teste = teste < 26 ? (teste + 1) : 0;
        columnIndex = columnIndex < 28 ? (columnIndex + 1) : 0;
        })



        console.log(agrupData)
        // console.log(separateData)
        res.send(separateData)
    }
}
