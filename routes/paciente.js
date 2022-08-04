const express = require('express')
const router = express.Router();
const pacienteController = require('../controller/pacienteController')

//API/MEDICO
router.post('/', pacienteController.generarPaciente);
router.get('/', pacienteController.obtenerPaciente);
router.put('/:id',pacienteController.actualizarPaciente);
router.get('/:id',pacienteController.buscarPaciente);
router.delete('/:id',pacienteController.eliminarPaciente);

module.exports = router