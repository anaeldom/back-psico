const mongoose = require('mongoose');
const AntecedentesSchema = mongoose.Schema({
    medicamentos:{type: Array},
    ultimoMedico:{type: String},
    id_transtorno:{type: Array},
    fechaCreacion: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Antecedentes', AntecedentesSchema)