const express =require('express');
const router = express.Router();
const path = require("path");

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname +"/inicio.html") );
});

router.get('/formulario',(req,res)=>{
    res.sendFile(path.join(__dirname + "/formulario.html"));
});

router.get('/info_generica',(req,res)=>{
    res.sendFile(path.join(__dirname + "/info_generica.html"));
});

module.exports = router;