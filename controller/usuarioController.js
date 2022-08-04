const Usuario = require('../models/Usuario');
const bcrypt = require("bcrypt")

exports.generarUsuario = async (req,res) => {
    try{
        let usuario;
        saltRound = 10;
        //creamos usuario
        usuario = new Usuario(req.body)
        await usuario.save()
        res.send(usuario);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerUsuario = async (req,res) => {
    try {
        const usuario = await Usuario.find();
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarUsuario = async (req,res) => {
    try {
        const {nombreUsuario,contrasena,correo,tipoUsuario} = req.body;

        let usuario = await Usuario.findById(req.params.id);
        
        if (!usuario){
            res.status(404).json({msg: 'No existe el usuario'})
        } 
        
        usuario.nombreUsuario = nombreUsuario;
        usuario.contrasena = await Usuario.encryptPass(contrasena);
        usuario.correo = correo;
        usuario.tipoUsuario = tipoUsuario;
        
        usuario = await Usuario.findByIdAndUpdate({ _id: req.params.id}, usuario, {new: true})
        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.buscarUsuario = async (req,res) => {
    try {
        let usuario = await Usuario.findById(req.params.id);
            
        if (!usuario){
            res.status(404).json({msg: 'No existe el usuario'})
        } 

        res.json(usuario);
    } catch (error) {
        console.log(error);
            res.status(500).send('Hubo un error');
    }
}

exports.eliminarUsuario = async (req,res) => {
    try {
        let usuario = await Usuario.findById(req.params.id);
        
        if (!usuario){
            res.status(404).json({msg: 'No existe el usuario'})
        } 
        await Usuario.findOneAndDelete({_id: req.params.id});
        res.json({msg: 'Usuario eliminado'})
        
    } catch (error) {
        console.log(error);
            res.status(500).send('Hubo un error');
    }
}

