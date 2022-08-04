const mongoose = require('mongoose');
const PacienteSchema = mongoose.Schema({
    nombrePaciente:{type: String,required: true},
    apellidoPatPaciente:{type: String,required: true},
    apellidoMatPaciente:{type: String,required: true},
    fechaNacimiento:{type: String,required: true},
    antecedentes:{type: String},
    telefono:{type: Number,required: true},
    fechaCreacion: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Paciente', PacienteSchema)