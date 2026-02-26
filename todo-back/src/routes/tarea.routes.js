const Router = require('express');
const tareaRouter = Router();
const { getTareas, getOneTarea, createTarea, updateTarea, deleteTarea } = require('../controllers/tarea.controllers');

tareaRouter
    .get('/', getTareas)
    .get('/:id', getOneTarea)
    .post('/', createTarea)
    .patch('/:id', updateTarea)
    .delete('/:id', deleteTarea)

module.exports = tareaRouter;