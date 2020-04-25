const express = require('express');
const app = express();

const arrecadacaoController = require('./controllers/ArrecadacaoController.js')

// configuração do express

app.use(express.json());

app.get('/', (req, res)=> {
    res.send('Robo de extração de dados')
});

app.get('/receitafederal/arrecadacao', arrecadacaoController.index)



app.listen(3333);