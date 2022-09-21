const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('Servidor levantado');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});