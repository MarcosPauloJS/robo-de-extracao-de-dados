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

        let columnIndex = 0
        let rowIndex = 0;
        let agroupData = [];

        separateData.forEach( (item)=>{

            console.log(columnIndex)
            if(columnIndex == 0){
                // console.log(typeof agroupData)
                agroupData[rowIndex] = [item];
                // console.log(agroupData)

            }
            else{
                console.log("row" + rowIndex)
                // console.log(agroupData.length)
                // console.log(agroupData[columnIndex])
                agroupData[rowIndex].push(item); 
                // console.log(agroupData)
            }

            if(columnIndex <= 27){
                columnIndex ++;
            }
            else{
                columnIndex = 0 ;
                rowIndex ++;
            }
          
        })

        console.log(agroupData)
        res.send(agroupData)
    }
}
