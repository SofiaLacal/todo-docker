const Router = require('express');
const compraRouter = Router();
const { getCompras, getOneCompra, createCompra, updateCompra, deleteCompra } = require('../controllers/compra.controllers');
const { authenticateToken } = require('../middleware/authMiddleware');

compraRouter
    .get('/', authenticateToken, getCompras)
    .get('/:id', authenticateToken, getOneCompra)
    .post('/', authenticateToken, createCompra)
    .patch('/:id', authenticateToken, updateCompra)
    .delete('/:id', authenticateToken, deleteCompra)

module.exports = compraRouter;