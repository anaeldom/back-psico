const express = require('express')
const router = express.Router();
const antecedentesController = require('../controller/antecedentesController')

//API/MEDICO
router.post('/', antecedentesController.generarAntecedentes);
router.get('/', antecedentesController.obtenerAntecedentes);
router.put('/:id',antecedentesController.actualizarAntecedentes);
router.get('/:id',antecedentesController.buscarAntecedente);
router.delete('/:id',antecedentesController.eliminarAntecedente);

module.exports = router