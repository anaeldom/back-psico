const Paciente = require('../models/Paciente');

exports.generarPaciente = async (req,res) => {
    try{
        let paciente;
        //creamos paciente
        paciente = new Paciente(req.body)
        await paciente.save()
        res.send(paciente);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPaciente = async (req,res) => {
    try {
        const paciente = await Paciente.find();
        res.json(paciente);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarPaciente = async (req,res) => {
    try {

        const {nombrePaciente,apellidoPatPaciente,apellidoMatPaciente,fechaNacimiento,antecedentes,citasPrevias,telefono} = req.body;

        let paciente = await Paciente.findById(req.params.id);
        
        if (!paciente){
            res.status(404).json({msg: 'No existe el paciente'})
        } 
        
        paciente.nombrePaciente = nombrePaciente;
        paciente.apellidoPatPaciente = apellidoPatPaciente;
        paciente.apellidoMatPaciente = apellidoMatPaciente;
        paciente.fechaNacimiento = fechaNacimiento;
        paciente.antecedentes = antecedentes;
        paciente.citasPrevias = citasPrevias;
        paciente.telefono = telefono;

        paciente = await Paciente.findByIdAndUpdate({ _id: req.params.id}, paciente, {new: true})
        res.json(paciente);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.buscarPaciente = async (req,res) => {
    try {
        let paciente = await Paciente.findById(req.params.id);
            
        if (!paciente){
            res.status(404).json({msg: 'No existe el paciente'})
        } 

        res.json(paciente);
    } catch (error) {
        console.log(error);
            res.status(500).send('Hubo un error');
    }
}

exports.eliminarPaciente = async (req,res) => {
    try {
        let paciente = await Paciente.findById(req.params.id);
        if (!paciente){
            res.status(404).json({msg: 'No existe el paciente'})
        } 
        await Paciente.findOneAndDelete({_id: req.params.id});
        res.json({msg: 'Paciente eliminado'})
        
    } catch (error) {
        console.log(error);
            res.status(500).send('Hubo un error');
    }
}