const express = require('express')
const router = express.Router();
const transtornoController = require('../controller/transtornoController')

//API/MEDICO
router.post('/', transtornoController.generarTranstorno);
router.get('/', transtornoController.obtenerTranstorno);
router.put('/:id',transtornoController.actualizarTranstorno);
router.get('/:id',transtornoController.buscarTranstorno);
router.delete('/:id',transtornoController.eliminarTranstorno);

module.exports = router