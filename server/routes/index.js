const express = require('express');
const router = express.Router();

//controladores
const nosotrosController = require ('../controllers/nosotrosController');
const consultasHomePage = require('../controllers/homeController');
const mostrarViajes = require('../controllers/viajesController');
const mostrarTestimoniales = require('../controllers/testimonialesController');


module.exports = function () {

    router.get('/', consultasHomePage.consultasHomePage );
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes', mostrarViajes.mostrarViajes );
    router.get('/viaje/:id', mostrarViajes.mostrarViaje);
    router.get('/testimoniales', mostrarTestimoniales.mostrarTestimoniales );
    router.post('/testimoniales', mostrarTestimoniales.agregarTestimonial)

    return router;
};