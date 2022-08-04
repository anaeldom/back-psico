const Especialidad = require('../models/Especialidad');

exports.generarEspecialidad = async (req,res) => {
    try{
        let especialidad;
        //creamos especialidad
        especialidad= new Especialidad(req.body)
        await especialidad.save()
        res.send(especialidad);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerEspecialidad = async (req,res) => {
    try {
        const especialidad = await Especialidad.find();
        res.json(especialidad);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarEspecialidad = async (req,res) => {
    try {
        const {nombreEspecialidad,descripcion,estadoVigente,cedula} = req.body;

        let especialidad = await Especialidad.findById(req.params.id);
        
        if (!especialidad){
            res.status(404).json({msg: 'No existe la especialidad'})
        } 
        
        especialidad.nombreEspecialidad = nombreEspecialidad;
        especialidad.descripcion = descripcion;
        especialidad.estadoVigente = estadoVigente;
        especialidad.cedula = cedula;

        especialidad = await Especialidad.findByIdAndUpdate({ _id: req.params.id}, especialidad, {new: true})
        res.json(especialidad);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.buscarEspecialidad = async (req,res) => {
    try {
        let especialidad = await Especialidad.findById(req.params.id);
            
        if (!especialidad){
            res.status(404).json({msg: 'No existe la especialidad'})
        } 

        res.json(especialidad);
    } catch (error) {
        console.log(error);
            res.status(500).send('Hubo un error');
    }
}

exports.eliminarEspecialidad = async (req,res) => {
    try {
        let especialidad = await Especialidad.findById(req.params.id);

        if (!especialidad){
            res.status(404).json({msg: 'No existe la especialidad'})
        } 
        await Especialidad.findOneAndDelete({_id: req.params.id});
        res.json({msg: 'Especialidad eliminada'})
        
    } catch (error) {
        console.log(error);
            res.status(500).send('Hubo un error');
    }
}