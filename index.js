const express = require('express');
const { dbConnection } = require('./database/config.js');
require('dotenv').config();
const cors = require('cors')
const app=express();
//CORS
app.use(cors())

app.use(express.static('public'));
app.use(express.json());

//bd
dbConnection();

app.use('/api/token', require('./routes/token'));

app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT} `);
})