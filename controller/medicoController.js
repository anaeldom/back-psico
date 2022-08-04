const Medico = require('../models/Medico');

exports.generarMedico = async (req,res) => {
    try{
        let medico;
        //creamos medico
        medico = new Medico(req.body)
        await medico.save()
        res.send(medico);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerMedico = async (req,res) => {
    try {
        const medicos = await Medico.find();
        res.json(medicos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarMedico = async (req,res) => {
    try {
        const {nombreMedico,apellidoPatMedico,apellidoMatMedico,especialidad,id_agenda} = req.body;

        let medico = await Medico.findById(req.params.id);
        
        if (!medico){
            res.status(404).json({msg: 'No existe el producto'})
        } 
        
        medico.nombreMedico = nombreMedico;
        medico.apellidoPatMedico = apellidoPatMedico;
        medico.apellidoMatMedico = apellidoMatMedico;
        medico.especialidad = especialidad;
        medico.id_agenda = id_agenda;

        medico = await Medico.findByIdAndUpdate({ _id: req.params.id}, medico, {new: true})
        res.json(medico);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.buscarMedico = async (req,res) => {
    try {
        let medico = await Medico.findById(req.params.id);
            
        if (!medico){
            res.status(404).json({msg: 'No existe el producto'})
        } 

        res.json(medico);
    } catch (error) {
        console.log(error);
            res.status(500).send('Hubo un error');
    }
}

exports.eliminarMedico = async (req,res) => {
    try {
        let medico = await Medico.findById(req.params.id);
        if (!medico){
            res.status(404).json({msg: 'No existe el producto'})
        } 
        await Medico.findOneAndDelete({_id: req.params.id});
        res.json({msg: 'Medico eliminado'})
        
    } catch (error) {
        console.log(error);
            res.status(500).send('Hubo un error');
    }
}

exports.espeMedico = async (req,res) => {
    const lastMedicos = await Medico.find().populate("especialidad");
    res.json(lastMedicos);
}

exports.espeMedicoUnique = async (req,res) => {
    const lastMedicos = await Medico.find({_id:req.params.id}).populate("especialidad");
    res.json(lastMedicos);
}