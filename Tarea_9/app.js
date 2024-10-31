const express = require('express');
const path = require('path');
const pagesRoutes = require('./routes/pages');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('/',pagesRoutes);

app.get('/',(req,res)=>{
    res.redirect('/page1');
});

app.listen(PORT,()=>{
    console.log('El servidor está en funcionamiento: http://localhost:${PORT}');
});