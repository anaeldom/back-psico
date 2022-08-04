const express = require('express')
const router = express.Router();
const especialidadController = require('../controller/especialidadController')

//API/MEDICO
router.post('/', especialidadController.generarEspecialidad);
router.get('/', especialidadController.obtenerEspecialidad);
router.put('/:id',especialidadController.actualizarEspecialidad);
router.get('/:id',especialidadController.buscarEspecialidad);
router.delete('/:id',especialidadController.eliminarEspecialidad);

module.exports = router