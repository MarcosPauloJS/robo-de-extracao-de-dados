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
        for (let i = 0; i < 15; i++) {
            separateData.shift();
        };

        let columnIndex = 0
        let rowIndex = 0;
        let agroupData = [];

        separateData.forEach( (item)=>{

            console.log(columnIndex)
            if(columnIndex == 0){
                agroupData[rowIndex] = [item];

            }
            else{
                console.log("row" + rowIndex)

                agroupData[rowIndex].push(item); 
            }

            if(columnIndex <= 27){
                columnIndex ++;
            }
            else{
                columnIndex = 0 ;
                rowIndex ++;
            }
          
        })
        res.json({agroupData})
    }
}
