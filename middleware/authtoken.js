const Usuario = require("../models/Usuario");
const jwt = require('jsonwebtoken');
const SECRET = 'api-general'

exports.verifyToken = async (req,res,next) => {
    try {
        const token = req.headers["x-access-token"];
    
        console.log(token);
        if(!token) return res.json({message:" No token provided"})
        
        const decoded = jwt.verify(token,SECRET)
        req.userId = decoded.id;
        
        const user = await Usuario.findById(req.userId,{contrasena: 0})
        if(!user) return res.json({message:'No user found'})

        next()
    } catch (error) {
        return res.json({message:'Not valid token'})
    }    
}