const express = require('express');

const app = express();

const path = require('path')  // modulo para normalizar rutas

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))


// routers


const routes = require('./routers/index.routers')

app.use( routes)

// static files

app.use(express.static( path.join(__dirname, '../public')))



app.use( (req, res) => {


    res.sendFile(path.join(__dirname, '../public/404.html'))


})



app.listen(3000 ,  () => {

    console.log('connect server')
})