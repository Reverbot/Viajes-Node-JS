//importar express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');

const db = require('./config/database');

db.authenticate()
    .then(() => console.log('DB conectada'))
    .catch(error => console.log(error));

//configurar express
const app = express();

//habilitar pug
app.set('view engine', 'pug');

//añadir las vistas
app.set('views', path.join(__dirname, './views'));

//validar si estamos en desarrollo o en produccion
const config = configs[app.get('env')];

//creamos la variable para el sitio
app.locals.titulo = config.nombresitio;

//cargar una carpeta estatica llamada public
app.use(express.static('public'));

//muestra el año actual
app.use((req, res, next) => {
    //crea una nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    return next();
})
//ejecutamos el boddy parser
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());


app.listen(3000);