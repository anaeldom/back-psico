const express = require('express')
const router = express.Router();
const usuarioController = require('../controller/usuarioController')
const {verifyToken} = require("../middleware/authtoken");

//API/MEDICO
router.post('/', usuarioController.generarUsuario);
router.get('/', usuarioController.obtenerUsuario);
router.put('/:id',usuarioController.actualizarUsuario);
router.get('/:id',usuarioController.buscarUsuario);
router.delete('/:id',usuarioController.eliminarUsuario);
module.exports = router