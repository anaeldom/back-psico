const Citas = require('../models/Citas');
const Medico = require('../models/Medico');
const Paciente = require('../models/Paciente');

exports.generarCitas = async (req,res) => {
    try{
        let cita;
        //creamos medico
        cita = new Citas(req.body)
        await cita.save()
        res.send(cita);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerCita = async (req,res) => {
    try {
        const citas = await Citas.find();
        res.json(citas);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarCitas = async (req,res) => {
    try {
        const {fechaCita,horaCita,id_medico,id_paciente,notas} = req.body;

        let cita = await Citas.findById(req.params.id);
        
        if (!cita){
            res.status(404).json({msg: 'No existe la cita'})
        } 
        
        cita.fechaCita = fechaCita;
        cita.horaCita = horaCita;
        cita.id_medico = id_medico;
        cita.id_paciente = id_paciente;
        cita.notas = notas;

        cita = await Citas.findByIdAndUpdate({ _id: req.params.id}, cita, {new: true})
        res.json(cita);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.buscarCita = async (req,res) => {
    try {
        let cita = await Citas.findById(req.params.id);
            
        if (!cita){
            res.status(404).json({msg: 'No existe la cita'})
        } 

        res.json(cita);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.buscarCitaM = async (req,res) =>{
    try {        
        let cita = await Citas.find({'id_medico':req.params.id})//.populate('id_paciente');

        console.log(cita);
        if (!cita){
            res.status(404).json({msg: 'No existe la cita'})
        } 
        res.json(cita);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.buscarCitaMM = async (req,res) =>{
    try {        
        let cita = await Citas.find({'id_medico':req.params.id}).populate('id_paciente');

        console.log(cita);
        if (!cita){
            res.status(404).json({msg: 'No existe la cita'})
        } 
        res.json(cita);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarCita = async (req,res) => {
    try {
        let cita = await Citas.findById(req.params.id);
        if (!cita){
            res.status(404).json({msg: 'No existe la cita'})
        } 
        await Citas.findOneAndDelete({_id: req.params.id});
        res.json({msg: 'Cita eliminada'})
        
    } catch (error) {
        console.log(error);
            res.status(500).send('Hubo un error');
    }
}

