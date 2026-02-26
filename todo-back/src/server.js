const express = require('express');
const cors = require('cors');

const tareaRouter = require('./routes/tarea.routes');
const compraRouter = require('./routes/compra.routes');
const citamedicaRouter = require('./routes/citamedica.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tareas', tareaRouter);
app.use('/api/compras', compraRouter);
app.use('/api/citas-medicas', citamedicaRouter);

module.exports = app;