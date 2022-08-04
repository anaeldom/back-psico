const Transtorno = require('../models/Transtorno');

exports.generarTranstorno = async (req,res) => {
    try{
        let transtorno;
        //creamos transtorno
        transtorno = new Transtorno(req.body)
        await transtorno.save()
        res.send(transtorno);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTranstorno = async (req,res) => {
    try {
        let transtorno = await Transtorno.find({});
        console.log(transtorno);
        res.json(transtorno);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarTranstorno = async (req,res) => {
    try {
        const {nombreTranstorno,descripcion} = req.body;

        let transtorno = await Transtorno.findById(req.params.id);
        
        if (!transtorno){
            res.status(404).json({msg: 'No existe el transtorno'})
        } 

        transtorno.nombreTranstorno = nombreTranstorno;
        transtorno.descripcion = descripcion;

        transtorno = await Transtorno.findByIdAndUpdate({ _id: req.params.id}, transtorno, {new: true})
        res.json(transtorno);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.buscarTranstorno = async (req,res) => {
    try {
        let transtorno = await Transtorno.findById(req.params.id);
            
        if (!transtorno){
            res.status(404).json({msg: 'No existe el transtorno'})
        } 

        res.json(transtorno);
    } catch (error) {
        console.log(error);
            res.status(500).send('Hubo un error');
    }
}

exports.eliminarTranstorno = async (req,res) => {
    try {
        let transtorno = await Transtorno.findById(req.params.id);
        if (!transtorno){
            res.status(404).json({msg: 'No existe el transtorno'})
        } 
        await Transtorno.findOneAndDelete({_id: req.params.id});
        res.json({msg: 'Transtorno eliminado'})
        
    } catch (error) {
        console.log(error);
            res.status(500).send('Hubo un error');
    }
}