const mongoose = require('mongoose');
const AgendaSchema = mongoose.Schema({
        id_cita: {type: Array},
        fechaCreacion: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Agenda', AgendaSchema)