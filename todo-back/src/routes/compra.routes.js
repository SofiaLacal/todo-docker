const Router = require('express');
const compraRouter = Router();
const { getCompras, getOneCompra, createCompra, updateCompra, deleteCompra } = require('../controllers/compra.controllers');

compraRouter
    .get('/', getCompras)
    .get('/:id', getOneCompra)
    .post('/', createCompra)
    .patch('/:id', updateCompra)
    .delete('/:id', deleteCompra)

module.exports = compraRouter;