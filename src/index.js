const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()

const port = process.env.PORT || 3000;
const app = express()

app.listen(port, ()=>{console.log('Server listening on port',port)})

app.get('/', (req,res)=> res.send('Parcial I'))

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(()=>console.log('connect with mongodb'))
    .catch((error)=> console.error(error))

const compraSchemaRoutes = require('./routes/compra_routes')
/* Middleware */
app.use(express.json())
/* Crear usuario: http://localhost:3000/dashboard/user
Consultar usuarios: http://localhost:3000/dashboard/users*/
app.use('/dashboard',compraSchemaRoutes)

