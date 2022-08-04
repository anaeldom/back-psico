const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UsuarioSchema = mongoose.Schema({
        nombreUsuario: {type: String, required: true, unique:true},
        contrasena: {type: String, required: true},
        correo: {type: String, required: true, unique:true},
        tipoUsuario:{type:String,required: true},
        idTipoUsuario:{type:String,required: true},
        fechaCreacion: {type: Date, default: Date.now()}
});

UsuarioSchema.statics.encryptPass = async (pass) => {
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(pass,salt)
} 

UsuarioSchema.statics.comparePass = async (pass,receivePass) => {
        return await bcrypt.compare(pass,receivePass)
}

module.exports = mongoose.model('Usuario', UsuarioSchema)