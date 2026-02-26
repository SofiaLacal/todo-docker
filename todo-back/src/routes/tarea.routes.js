const Router = require('express');
const tareaRouter = Router();
const { getTareas, getOneTarea, createTarea, updateTarea, deleteTarea } = require('../controllers/tarea.controllers');
const { authenticateToken } = require('../middleware/authMiddleware');

tareaRouter
    .get('/', authenticateToken, getTareas)
    .get('/:id', authenticateToken, getOneTarea)
    .post('/', authenticateToken, createTarea)
    .patch('/:id', authenticateToken, updateTarea)
    .delete('/:id', authenticateToken, deleteTarea)

module.exports = tareaRouter;