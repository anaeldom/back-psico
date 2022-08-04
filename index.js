const express = require('express')
const conectarDB = require('./config/db')
const cors = require("cors");

//servidorCreation
const app = express();

//conexion
conectarDB();
app.use(cors());
app.use(express.json());

//rutas a la api
app.use('/api/medico',require('./routes/medico'))
app.use('/api/agenda',require('./routes/agenda'))
app.use('/api/antecedentes',require('./routes/antecedentes'))
app.use('/api/citas',require('./routes/citas'))
app.use('/api/especialidad',require('./routes/especialidad'))
app.use('/api/paciente',require('./routes/paciente'))
app.use('/api/transtorno',require('./routes/transtorno'))
app.use('/api/usuario',require('./routes/usuario'))
app.use('/api/rol',require('./routes/rol'))

app.listen(4000,()=>{
    console.log('Running perfectly.')
})