const express = require('express');
const path = require("path");

const app = express();
const PORT = 3000;
const routes = require('./rutas');

app.use('/',routes);

app.listen(PORT,()=>{
    console.log(console.log(`El servidor esta en funcionamiento: http://localhost:${PORT}`));
});