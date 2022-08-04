const express = require('express')
const router = express.Router();
const agendaController = require('../controller/agendaController')

//API/MEDICO
router.post('/', agendaController.generarAgenda);
router.get('/', agendaController.obtenerAgenda);
router.put('/:id',agendaController.actualizarAgenda);
router.get('/:id',agendaController.buscarAgenda);
router.delete('/:id',agendaController.eliminarAgenda);

module.exports = router