const mongoose = require('mongoose');
const TranstornoSchema = mongoose.Schema({
        nombreTranstorno: {type: String, required: true},
        descripcion: {type: String, required: true},
        fechaCreacion: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Transtorno', TranstornoSchema)