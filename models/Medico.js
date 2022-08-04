const mongoose = require('mongoose');
const MedicoSchema = mongoose.Schema({
        nombreMedico: {type: String, required: true},
        apellidoPatMedico: {type: String, required: true},
        apellidoMatMedico: {type: String, required: true},
        especialidad: [{
                ref: "Especialidad",
                type: mongoose.Schema.Types.ObjectId
        }],
        telefono: {type: Number, required: true},        
        fechaCreacion: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Medico', MedicoSchema)