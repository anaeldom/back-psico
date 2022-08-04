const express = require('express')
const router = express.Router();
const medicoController = require('../controller/medicoController')

//API/MEDICO
router.post('/', medicoController.generarMedico);
router.get('/', medicoController.obtenerMedico);
router.put('/:id',medicoController.actualizarMedico);
router.get('/:id',medicoController.buscarMedico);
router.delete('/:id',medicoController.eliminarMedico);

router.post('/getMedicoCompleto',medicoController.espeMedico);
router.get('/getOneMedico/:id',medicoController.espeMedicoUnique);

module.exports = router