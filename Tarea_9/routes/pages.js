const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'calculadora.html'));
});

router.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'generacion_qr.html'));
});

router.get('/page3', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'formulario.html'));
});

module.exports = router;