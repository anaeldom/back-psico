const Agenda = require('../models/Agenda');

exports.generarAgenda = async (req,res) => {
    try{
        let agenda;
        //creamos agenda
        agenda = new Agenda(req.body)
        await agenda.save()
        res.send(agenda);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerAgenda = async (req,res) => {
    try {
        const agendas = await Agenda.find();
        res.json(agendas);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarAgenda = async (req,res) => {
    try {
        const {id_cita} = req.body;

        let agenda = await Agenda.findById(req.params.id);
        
        if (!agenda){
            res.status(404).json({msg: 'No existe la agenda'})
        } 
        
        agenda.id_cita = id_cita;

        agenda = await Agenda.findByIdAndUpdate({ _id: req.params.id}, agenda, {new: true})
        res.json(agenda);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.buscarAgenda = async (req,res) => {
    try {
        let agenda = await Agenda.findById(req.params.id);
            
        if (!agenda){
            res.status(404).json({msg: 'No existe la agenda'})
        } 

        res.json(agenda);
    } catch (error) {
        console.log(error);
            res.status(500).send('Hubo un error');
    }
}

exports.eliminarAgenda = async (req,res) => {
    try {
        let agenda = await Agenda.findById(req.params.id);
        if (!agenda){
            res.status(404).json({msg: 'No existe la agenda'})
        } 
        await Agenda.findOneAndDelete({_id: req.params.id});
        res.json({msg: 'Agenda eliminada'})
        
    } catch (error) {
        console.log(error);
            res.status(500).send('Hubo un error');
    }
}