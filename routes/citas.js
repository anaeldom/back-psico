const express = require('express')
const router = express.Router();
const citasController = require('../controller/citasController')

//API/MEDICO
router.post('/', citasController.generarCitas);
router.get('/', citasController.obtenerCita);
router.put('/:id', citasController.actualizarCitas);
router.get('/:id', citasController.buscarCita);
router.delete('/:id', citasController.eliminarCita);
router.get('/bcm/:id', citasController.buscarCitaM);
router.get('/bcmm/:id', citasController.buscarCitaMM);
module.exports = router