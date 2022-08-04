const Antecedentes = require('../models/Antecedentes');

exports.generarAntecedentes = async (req,res) => {
    try{
        let antecedente;
        //creamos medico
        antecedente = new Antecedentes(req.body)
        await antecedente.save()
        res.send(antecedente);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerAntecedentes = async (req,res) => {
    try {
        const antecedentes = await Antecedentes.find();
        res.json(antecedentes);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarAntecedentes = async (req,res) => {
    try {
        const {medicamentos,ultimoMedico,id_transtorno} = req.body;

        let antecedente = await Antecedentes.findById(req.params.id);
        
        if (!antecedente){
            res.status(404).json({msg: 'No existe el antecedente'})
        } 
        
        antecedente.medicamentos = medicamentos;
        antecedente.ultimoMedico = ultimoMedico;
        antecedente.id_transtorno = id_transtorno;

        antecedente = await Antecedentes.findByIdAndUpdate({ _id: req.params.id}, antecedente, {new: true})
        res.json(antecedente);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.buscarAntecedente = async (req,res) => {
    try {
        let antecedente = await Antecedentes.findById(req.params.id);
            
        if (!antecedente){
            res.status(404).json({msg: 'No existe el antecedente'})
        } 

        res.json(antecedente);
    } catch (error) {
        console.log(error);
            res.status(500).send('Hubo un error');
    }
}

exports.eliminarAntecedente = async (req,res) => {
    try {
        let antecedente = await Antecedentes.findById(req.params.id);
        if (!antecedente){
            res.status(404).json({msg: 'No existe el antecedente'})
        } 
        await Antecedentes.findOneAndDelete({_id: req.params.id});
        res.json({msg: 'Antecedente eliminado'})
        
    } catch (error) {
        console.log(error);
            res.status(500).send('Hubo un error');
    }
}