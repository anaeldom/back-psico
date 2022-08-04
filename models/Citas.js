const mongoose = require('mongoose');
const CitasSchema = mongoose.Schema({
    fechaCita: {type: Date, required:true},
    horaCita: {type: String, required:true},
    id_medico: {type: String, required:true},
    id_paciente: [{
        ref: "Paciente",
        type: mongoose.Schema.Types.ObjectId
    }],
    notas: {type: String},
    fechaCreacion: {type: Date, default: Date.now()}
});


module.exports = mongoose.model('Citas', CitasSchema)