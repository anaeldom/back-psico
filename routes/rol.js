const express = require('express')
const router = express.Router();
const rolController = require('../controller/rolController')

//AUTH DE LOS USUARIOS CREADOS Y NO CREADOS 
router.post('/login', rolController.login);
router.post('/signup', rolController.signup);
router.post('/signupm', rolController.signupm);

router.post('/prueba',rolController.espeMedico);
router.post('/admin',rolController.admin);
module.exports = router;