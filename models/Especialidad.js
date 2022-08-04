const mongoose = require('mongoose');
const EspecialidadSchema = mongoose.Schema({
    nombreEspecialidad: {type: String, required: true},
    descripcion: {type: String, required: true},
    //estadoVigente: {type:Boolean, required: true},
    //cedula: {type: String, required: true},
    fechaCreacion: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Especialidad', EspecialidadSchema)