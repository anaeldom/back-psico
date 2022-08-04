const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');
const Paciente = require('../models/Paciente');
const Medico = require('../models/Medico');
const bcrypt = require('bcryptjs');


const SECRET = 'api-general'

exports.login = async (req,res) => {
    const userFound = await Usuario.findOne({correo:req.body.correo})
    
    if(!userFound) return res.json({message:'Not Found User'});
    
    const matches = await Usuario.comparePass(req.body.contrasena, userFound.contrasena);
    
    if (!matches) return res.json({message:'No Coincide contrasena'});

    const token = jwt.sign({id: userFound._id},SECRET,{ expiresIn: 86400 });
    const rol = userFound.tipoUsuario;
    const id = userFound.idTipoUsuario;
    res.json({token,rol,id})    
}

exports.admin = async (req,res) => { //Este signup es solamente en PACIENTE
    const {nombreUsuario,contrasena,correo,tipoUsuario,idTipoUsuario} = req.body;
      
    const newUsr = new Usuario({
        nombreUsuario,
        contrasena: await Usuario.encryptPass(contrasena),
        correo,
        tipoUsuario: 'administrador',
        idTipoUsuario: 1 
    });

    const savedUsr = await newUsr.save();
    const token = jwt.sign({id:savedUsr._id},SECRET,{
        expiresIn: 86400//24hrs
    })
    res.json({token})    
}

exports.signup = async (req,res) => { //Este signup es solamente en PACIENTE
    const {nombreUsuario,contrasena,correo,tipoUsuario,idTipoUsuario} = req.body;
    const lastPaciente = await Paciente.findOne().sort({'fechaCreacion':-1})    
    const newUsr = new Usuario({
        nombreUsuario,
        contrasena: await Usuario.encryptPass(contrasena),
        correo,
        tipoUsuario: 'paciente',
        idTipoUsuario: lastPaciente._id
    });

    const savedUsr = await newUsr.save();
    const token = jwt.sign({id:savedUsr._id},SECRET,{
        expiresIn: 86400//24hrs
    })
    
    res.json({token})
}
exports.signupm = async (req,res) => { //Este signup es solamente en MEDICO
    const {nombreUsuario,contrasena,correo,tipoUsuario,idTipoUsuario} = req.body;
    const lastMedico = await Medico.findOne().sort({'fechaCreacion':-1})    
    const newUsr = new Usuario({
        nombreUsuario,
        contrasena: await Usuario.encryptPass(contrasena),
        correo,
        tipoUsuario: 'medico',
        idTipoUsuario: lastMedico._id
    });

    const savedUsr = await newUsr.save();
    const n = await Usuario.u
    const token = jwt.sign({id:savedUsr._id},SECRET,{
        expiresIn: 86400//24hrs
    })
    //Usuario.aggregate
    res.json({token})
}

exports.espeMedico = async (req,res) => {
    const lastMedicos = await Medico.find().populate("especialidad");
    res.json(lastMedicos);
}   

