const Router = require('express');
const citaRouter = Router();
const { getCitas, getOneCita, createCita, updateCita, deleteCita } = require('../controllers/citamedica.controllers');
const { authenticateToken } = require('../middleware/authMiddleware');

citaRouter
    .get('/', authenticateToken, getCitas)
    .get('/:id', authenticateToken, getOneCita)
    .post('/', authenticateToken, createCita)
    .patch('/:id', authenticateToken, updateCita)
    .delete('/:id', authenticateToken, deleteCita)

module.exports = citaRouter;